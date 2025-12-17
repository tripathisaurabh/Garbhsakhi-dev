'use client'

import React, { useMemo, useEffect, useState, useRef } from 'react'

export default function Home() {
  const [visibleFootprints, setVisibleFootprints] = useState(0)
  const [pathDrawn, setPathDrawn] = useState(false)
  const [samplePath, setSamplePath] = useState([])
  const containerRef = useRef(null)

  const points = useMemo(() => {
    const raw = [
      { x: 100, y: 95 },
      { x: 200, y: 150 },
      { x: 100, y: 235 },
      { x: 200, y: 300 }
    ]
    return raw.map(p => ({ x: (p.x / 300) * 100, y: (p.y / 400) * 100 }))
  }, [])

  const catmullRomToBezier = (pts, tension = 1) => {
    if (!pts || pts.length < 2) return ''
    const p = pts
    let d = `M ${p[0].x} ${p[0].y}`
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = i === 0 ? p[0] : p[i - 1]
      const p1 = p[i]
      const p2 = p[i + 1]
      const p3 = i + 2 < p.length ? p[i + 2] : p[p.length - 1]
      const c1x = p1.x + ((p2.x - p0.x) / 6) * tension
      const c1y = p1.y + ((p2.y - p0.y) / 6) * tension
      const c2x = p2.x - ((p3.x - p1.x) / 6) * tension
      const c2y = p2.y - ((p3.y - p1.y) / 6) * tension
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
    }
    return d
  }

  const pathD = useMemo(() => catmullRomToBezier(points, 1), [points])

  useEffect(() => {
    const samples = 200
    const pathPoints = []
    const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    tempPath.setAttribute('d', pathD)
    tempSvg.appendChild(tempPath)
    const totalLength = tempPath.getTotalLength()
    for (let i = 0; i <= samples; i++) {
      const point = tempPath.getPointAtLength((i / samples) * totalLength)
      pathPoints.push({ x: point.x, y: point.y })
    }
    setSamplePath(pathPoints)
  }, [pathD])

  const footprintPositions = useMemo(() => {
    const count = 8
    const positions = []
    if (samplePath.length === 0) return positions

    let totalLength = 0
    const segmentLengths = []
    for (let i = 1; i < samplePath.length; i++) {
      const dx = samplePath[i].x - samplePath[i - 1].x
      const dy = samplePath[i].y - samplePath[i - 1].y
      const length = Math.sqrt(dx * dx + dy * dy)
      segmentLengths.push(length)
      totalLength += length
    }

    const margin = totalLength * 0.08
    const usableLength = Math.max(totalLength - 2 * margin, 0.001)
    const offsetDistance = 1.2

    for (let i = 0; i < count; i++) {
      const fraction = i / (count - 1)
      const targetDistance = margin + fraction * usableLength
      let accumulated = 0

      for (let s = 0; s < segmentLengths.length; s++) {
        const segLength = segmentLengths[s]
        if (accumulated + segLength >= targetDistance) {
          const localT = (targetDistance - accumulated) / segLength
          const A = samplePath[s]
          const B = samplePath[s + 1]

          const baseX = A.x + (B.x - A.x) * localT
          const baseY = A.y + (B.y - A.y) * localT

          const pathAngle = Math.atan2(B.y - A.y, B.x - A.x)

          const isLeft = i % 2 === 0

          const offsetAngle = pathAngle + (isLeft ? -Math.PI / 2 : Math.PI / 2)
          const x = baseX + Math.cos(offsetAngle) * offsetDistance
          const y = baseY + Math.sin(offsetAngle) * offsetDistance

          const angle = pathAngle * (180 / Math.PI)

          positions.push({ x, y, angle, isLeft })
          break
        }
        accumulated += segLength
      }
    }
    return positions
  }, [samplePath])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPathDrawn(false)
            setVisibleFootprints(0)
            setTimeout(() => {
              setPathDrawn(true)
              const startDelay = 1000
              const interval = 150
              for (let i = 1; i <= footprintPositions.length; i++) {
                setTimeout(() => setVisibleFootprints(i), startDelay + interval * i)
              }
            }, 100)
          } else {
            setPathDrawn(false)
            setVisibleFootprints(0)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [footprintPositions.length])

  return (
    <div id="how-it-works" ref={containerRef} className="relative w-full min-h-[672px] h-[672px] overflow-x-hidden overflow-y-auto flex items-center justify-center px-0.5 md:px-4 pt-2 pb-[0.15rem]">
      <style>{`
        .footprint-icon { transition: opacity 300ms ease, transform 300ms ease; will-change: opacity, transform; }
        .path-line { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawPath 2s ease forwards; }
        @keyframes drawPath { to { stroke-dashoffset: 0; } }

        .control-dot {
          opacity: 0;
          animation: fadeInDot 600ms ease forwards;
          animation-delay: 2s;
        }
        @keyframes fadeInDot {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="relative w-full h-full max-w-7xl">
        {/* Header */}
        <div className="absolute top-1 md:top-4 left-0 right-0 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Get Started in Minutes</h1>
          <p className="text-gray-600 text-lg md:text-xl">From signup to monitoring your first patient</p>
        </div>

        {/* Path + control bullets (gray circles) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d={pathD} fill="none" stroke="#4B5563" strokeWidth="0.35" strokeLinecap="round" className="path-line opacity-50" />
          {points.map((pt, idx) => (
            <circle
              key={`dot-${idx}`}
              cx={pt.x}
              cy={pt.y}
              r="0.6"
              fill="#4B5563"
              className="control-dot drop-shadow-lg"
            />
          ))}
        </svg>

        {/* Footprints */}
        <div className="absolute inset-0 z-5">
          {footprintPositions.map((pos, i) => (
            <img
              key={i}
              src={pos.isLeft ? "/left.png" : "/right.png"}
              alt={pos.isLeft ? "left foot" : "right foot"}
              className="footprint-icon"
              style={{
                position: 'absolute',
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: `translate(-50%, -50%) rotate(${pos.angle + 90}deg)`,
                width: '24px',
                height: '28px',
                opacity: i < visibleFootprints ? 0.7 : 0,
              }}
            />
          ))}
        </div>

        {/* Steps */}
        <div className="relative z-10 h-full w-full">
          {/* Step 1 - Left aligned */}
          <Step
            num={1}
            title="Sign Up"
            desc="Create your account with your clinic's details. Choose your preferred plan."
            top="30%"
            left="5%"
            iconSrc="/icons/signup.png"
            align="left"
          />

          {/* Step 2 - Right aligned */}
          <Step
            num={2}
            title="Add Patients"
            desc="Enter patient info and due dates. The system takes care of daily tracking."
            top="40%"
            left="95%"
            iconSrc="/icons/addpatients.png"
            align="right"
          />

          {/* Step 3 - Left aligned */}
          <Step
            num={3}
            title="Auto-Onboarding"
            desc="Patients receive a WhatsApp invite automatically. The Garbhsakhi Bot guides them through setup."
            top="65%"
            left="5%"
            iconSrc="/icons/autoonboarding.png"
            align="left"
          />

          {/* Step 4 - Right aligned */}
          <Step
            num={4}
            title="Monitor & Track"
            desc="View real-time data, alerts, and engagement reports in your intelligent dashboard."
            top="75%"
            left="95%"
            iconSrc="/icons/monitor.png"
            align="right"
          />
        </div>
      </div>
    </div>
  )
}

/* Step component */
function Step({ num, title, desc, top, left, iconSrc, align = 'center' }) {
  // Determine transform and layout based on alignment
  const getTransform = () => {
    if (align === 'left') return 'translate(0, -50%)';
    if (align === 'right') return 'translate(-100%, -50%)';
    return 'translate(-50%, -50%)';
  };

  const contentAlign = align === 'left' ? 'items-start' : align === 'right' ? 'items-end' : 'items-center';
  const textAlign = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <div className="absolute" style={{ top, left, transform: getTransform() }}>
      <div className={`flex flex-col ${contentAlign}`}>
        <div className="relative mb-4">
          {/* PNG Icon */}
          <img
            src={iconSrc}
            alt={title}
            className="w-14 h-14 object-contain"
          />
        </div>
        <h3 className={`text-lg md:text-xl font-bold text-gray-800 mb-2 ${textAlign}`}>{title}</h3>
        <p className={`text-xs md:text-sm text-gray-600 leading-relaxed w-60 md:w-72 ${textAlign}`}>{desc}</p>
      </div>
    </div>
  )
}