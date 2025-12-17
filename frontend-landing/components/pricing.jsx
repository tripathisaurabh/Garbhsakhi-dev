'use client'

import React, { useEffect, useRef, useState } from 'react'
import MotionWrapper from './MotionWrapper'

export default function Pricing() {
    const scrollContainerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft
            const firstCard = container.querySelector('.pricing-card-mobile')
            if (!firstCard) return

            const cardWidth = firstCard.offsetWidth
            const gap = parseFloat(getComputedStyle(container).gap) || 0
            const totalCardWidth = cardWidth + gap
            const centerOffset = container.offsetWidth / 2 - cardWidth / 2
            const currentIndex = Math.round((scrollLeft + centerOffset) / totalCardWidth)
            setActiveIndex(Math.max(0, Math.min(currentIndex, 2)))

            // Apply rotation based on distance from center
            const cards = container.querySelectorAll('.pricing-card-mobile')
            cards.forEach((card, idx) => {
                const cardCenter = idx * totalCardWidth + cardWidth / 2
                const containerCenter = scrollLeft + container.offsetWidth / 2
                const distance = cardCenter - containerCenter
                const maxDistance = totalCardWidth
                const normalizedDistance = Math.min(Math.abs(distance) / maxDistance, 1)

                // Apply rotation based on position
                const rotationAngle = distance / maxDistance * 15
                card.style.transform = `rotateY(${rotationAngle}deg) scale(${1 - normalizedDistance * 0.1})`

                // Keep opacity full for current and previous cards, reduce for next
                if (idx === currentIndex + 1) {
                    card.style.opacity = 0.6
                } else {
                    card.style.opacity = 1
                }
            })
        }

        container.addEventListener('scroll', handleScroll)
        handleScroll() // Initial call

        // Re-calculate on resize
        window.addEventListener('resize', handleScroll)

        return () => {
            container.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    const plans = [
        {
            name: 'Starter (Free Trial)',
            price: '₹0',
            period: '/month',
            subtitle: 'Limited-time Early Access',
            badge: 'Free Trial Active',
            features: [
                'Up to 20 patients',
                'WhatsApp Bot Access',
                'Basic Dashboard',
                'Alert System',
                'PDF Reports',
                'Email Support'
            ],
            buttonText: 'Start Free Trial',
            buttonStyle: 'bg-[#8B1D1D] text-white hover:bg-[#6B1515]',
            highlighted: true
        },
        {
            name: 'Professional',
            price: '₹9,999',
            period: '/month',
            subtitle: 'Limited-time Early Access',
            features: [
                'Up to 50 patients',
                'Everything in Starter',
                'Advanced Analytics',
                'White Label Option',
                'Custom Alert Rules',
                'Priority Support'
            ],
            buttonText: 'Join Waiting List',
            buttonStyle: 'bg-white text-[#8B1D1D] border-2 border-[#8B1D1D] hover:bg-[#FFF0F0]',
            highlighted: false
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            subtitle: 'Limited-time Early Access',
            features: [
                'Up to 50 patients',
                'Everything in Starter',
                'Advanced Analytics',
                'White Label Option',
                'Custom Alert Rules',
                'Priority Support'
            ],
            buttonText: 'Contact Sales',
            buttonStyle: 'bg-white text-[#8B1D1D] border-2 border-[#8B1D1D] hover:bg-[#FFF0F0]',
            highlighted: false
        }
    ]

    return (
        <div id="pricing" className="w-full py-7">
            <style>{`
                /* Mobile 3D Scroll Styles */
                @media (max-width: 768px) {
                    .pricing-scroll-container {
                        display: flex;
                        overflow-x: auto;
                        scroll-snap-type: x mandatory;
                        -webkit-overflow-scrolling: touch;
                        gap: clamp(1rem, 5vw, 2rem);
                        padding: 2rem calc(50vw - min(70vw, 280px) / 2) 2rem calc(50vw - min(70vw, 280px) / 2);
                        perspective: 1500px;
                        perspective-origin: center center;
                        scroll-behavior: smooth;
                    }

                    .pricing-scroll-container::-webkit-scrollbar {
                        display: none;
                    }

                    .pricing-card-mobile {
                        flex: 0 0 min(70vw, 280px);
                        width: min(70vw, 280px);
                        scroll-snap-align: center;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        transform-style: preserve-3d;
                        will-change: transform, opacity;
                    }
                }
            `}</style>
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-[#8B1D1D] font-semibold text-xs md:text-sm mb-2">Flexible Pricing</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3">
                        Start Free — Upgrade When We Launch 🚀
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
                        We're currently in Early Access. Explore GarbhSakhi's premium features free of charge — professional plans will go live after our public launch.
                    </p>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <MotionWrapper key={index} delay={index * 0.1} className="flex">
                            <div
                                className={`relative rounded-3xl p-5 border-2 ${plan.highlighted ? 'border-[#8B1D1D]' : 'border-[#D66F6F]'
                                    } bg-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 w-full`}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#8B1D1D] text-white text-xs font-bold px-4 py-1 rounded-full">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-lg md:text-xl font-bold text-black mb-2 text-center">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="text-center mb-2">
                                    <span className="text-3xl md:text-4xl font-bold text-[#8B1D1D]">
                                        {plan.price}
                                    </span>
                                    <span className="text-base text-gray-600">{plan.period}</span>
                                </div>

                                {/* Subtitle */}
                                <p className="text-xs text-gray-600 text-center mb-5">
                                    {plan.subtitle}
                                </p>

                                {/* Features */}
                                <ul className="space-y-1.5 mb-5">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-700">
                                            <span className="text-[#8B1D1D] mr-2 mt-0.5">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button
                                    className={`w-full py-2.5 px-5 rounded-xl font-bold text-sm transition-all duration-300 ${plan.buttonStyle}`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Mobile: 3D Horizontal Scroll */}
                <div ref={scrollContainerRef} className="md:hidden pricing-scroll-container">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card-mobile relative rounded-3xl p-5 border-2 ${plan.highlighted ? 'border-[#8B1D1D]' : 'border-[#D66F6F]'
                                } bg-white/40 backdrop-blur-sm`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-[#8B1D1D] text-white text-xs font-bold px-4 py-1 rounded-full">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-lg font-bold text-black mb-2 text-center">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="text-center mb-2">
                                <span className="text-3xl font-bold text-[#8B1D1D]">
                                    {plan.price}
                                </span>
                                <span className="text-base text-gray-600">{plan.period}</span>
                            </div>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-600 text-center mb-5">
                                {plan.subtitle}
                            </p>

                            {/* Features */}
                            <ul className="space-y-1.5 mb-5">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-xs text-gray-700">
                                        <span className="text-[#8B1D1D] mr-2 mt-0.5">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                className={`w-full py-2.5 px-5 rounded-xl font-bold text-sm transition-all duration-300 ${plan.buttonStyle}`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
