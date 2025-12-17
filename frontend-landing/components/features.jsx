'use client'

import React from 'react'
import Image from 'next/image'
import MotionWrapper from './MotionWrapper'

export default function Features() {
    const features = [
        {
            icon: '/icons/whatsapp-icon.png',
            title: 'WhatsApp Integration',
            description: 'Connect directly with mothers on WhatsApp — no app installs, just seamless daily tracking.'
        },
        {
            icon: '/icons/dashboard-icon.png',
            title: 'Doctor-Focused Dashboard',
            description: 'Comprehensive insights, compliance analytics, and predictive trends — all in one intuitive view.'
        },
        {
            icon: '/icons/alerts-icon.png',
            title: 'Intelligent Alerts',
            description: 'AI detects critical warning signs early and instantly notifies doctors or caregivers.'
        },
        {
            icon: '/icons/reminders-icon.png',
            title: 'Daily Reminders',
            description: 'Comprehensive insights, compliance analytics, and predictive trends — all in one intuitive view.'
        },
        {
            icon: '/icons/analytics-icon.png',
            title: 'Advanced Analytics',
            description: 'Comprehensive insights, compliance analytics, and predictive trends — all in one intuitive view.'
        },
        {
            icon: '/icons/white-label-icon.png',
            title: 'White-Label Ready',
            description: 'Comprehensive insights, compliance analytics, and predictive trends — all in one intuitive view.'
        }
    ]

    return (
        <div id="features" className="w-full py-7">
            <style>{`
        @keyframes borderDrawClockwise {
          0% {
            clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0);
          }
          25% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 0, 0 0, 0 0, 0 0);
          }
          50% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 100%);
          }
          75% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0);
          }
        }

        .feature-item {
          position: relative;
          transition: transform 0.3s ease;
          padding: 1rem;
          border-radius: 20px;
        }

        .feature-item::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #D66F6F, #8B1D1D, #D66F6F);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-item:hover::before {
          opacity: 1;
          animation: borderDrawClockwise 0.8s ease-in-out forwards;
        }

        .feature-item:hover {
          transform: translateY(-4px);
        }

        /* Mobile Circular Diagram Layout */
        @media (max-width: 768px) {
          .circular-diagram {
            position: relative;
            width: 100%;
            aspect-ratio: 2 / 3;
            max-width: min(90vw, 400px);
            margin: 0 auto;
          }

          .center-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: min(27vw, 108px);
            height: min(27vw, 108px);
            border-radius: 50%;
            background: white;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }

          .feature-circle {
            position: absolute;
            width: min(27vw, 108px);
            height: min(27vw, 108px);
            background: white;
            border-radius: 50%;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: min(3vw, 12px);
            text-align: center;
            z-index: 3;
          }

          .connecting-line {
            position: absolute;
            background: #D66F6F;
            height: 2px;
            transform-origin: left center;
            z-index: 1;
          }
        }
      `}</style>

            <div className="w-full max-w-[1440px] mx-auto px-2 md:px-12">
                {/* Header */}
                <div className="text-center mb-4 md:mb-10">
                    <p className="text-[#8B1D1D] font-semibold text-sm md:text-base mb-2">Premium Features</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                        Designed for Modern Pregnancy Care
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                        From WhatsApp automation to smart alerts — Garbhsakhi brings simplicity and intelligence together for doctors and mothers.
                    </p>
                </div>

                {/* Desktop: Features Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {features.map((feature, index) => (
                        <MotionWrapper key={index} delay={index * 0.1}>
                            <div
                                className="feature-item text-center max-w-xs mx-auto"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 relative feature-icon">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Mobile: Circular Diagram */}
                <div className="md:hidden circular-diagram">
                    {/* Center Image */}
                    <div className="center-image">
                        <Image
                            src="/icons/love.png"
                            alt="Pregnancy Care"
                            width={100}
                            height={100}
                            className="object-contain"
                            style={{ width: '70%', height: '70%' }}
                        />
                    </div>

                    {/* Connecting Lines */}
                    {features.map((_, index) => {
                        const angle = (index * 60 - 90) * (Math.PI / 180);
                        const centerX = 50; // percentage
                        const centerY = 50; // percentage
                        const radiusPercent = 30; // percentage of container width

                        // Calculate line starting point (edge of center circle)
                        const centerCircleRadius = 13.5; // half of center image (27vw / 2)
                        const lineStartX = centerX + centerCircleRadius * Math.cos(angle);
                        const lineStartY = centerY + centerCircleRadius * Math.sin(angle);

                        // Calculate line length (from edge of center to edge of feature circle)
                        const featureCircleRadius = 13.5; // half of feature circle (27vw / 2)
                        const length = radiusPercent - centerCircleRadius - featureCircleRadius;
                        const lineAngle = angle * (180 / Math.PI);

                        return (
                            <div
                                key={`line-${index}`}
                                className="connecting-line"
                                style={{
                                    width: `${length}%`,
                                    left: `${lineStartX}%`,
                                    top: `${lineStartY}%`,
                                    transform: `rotate(${lineAngle}deg)`,
                                    transformOrigin: '0 50%',
                                }}
                            />
                        );
                    })}

                    {/* Feature Circles */}
                    {features.map((feature, index) => {
                        const angle = (index * 60 - 90) * (Math.PI / 180);
                        const centerX = 50; // percentage
                        const centerY = 50; // percentage
                        const radiusPercent = 30; // percentage of container width
                        const x = centerX + radiusPercent * Math.cos(angle);
                        const y = centerY + radiusPercent * Math.sin(angle);

                        return (
                            <div
                                key={index}
                                className="feature-circle"
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={40}
                                    height={40}
                                    className="object-contain mb-1"
                                    style={{ width: 'min(10vw, 40px)', height: 'min(10vw, 40px)' }}
                                />
                                <p className="font-bold text-black leading-tight" style={{ fontSize: 'clamp(8px, 2.2vw, 9px)' }}>
                                    {feature.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
