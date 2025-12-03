'use client'

import React from 'react'
import Image from 'next/image'
import MotionWrapper from './MotionWrapper'

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Dr. Sneha Desai',
            location: 'Mumbai Women\'s Hospital',
            avatar: '/icons/doctor-avatar.png',
            rating: 5,
            quote: 'GarbhSakhi transformed my practice. Early alerts prevented 3 emergencies this month!'
        },
        {
            name: 'Dr. Riya Mehta',
            location: 'Delhi Maternity Care',
            avatar: '/icons/doctor-avatar.png',
            rating: 5,
            quote: 'Patients love the bot! Compliance is up 4x. Best investment for our clinic.'
        },
        {
            name: 'Dr. Ananya Kumar',
            location: 'Bangalore Clinic',
            avatar: '/icons/doctor-avatar.png',
            rating: 5,
            quote: 'Beautiful dashboard, easy to use. White label makes it feel like ours.'
        }
    ]

    // Duplicate testimonials multiple times for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

    return (
        <div id="testimonials" className="w-full py-7">
            <style>{`
                /* Mobile Continuous Scroll Animation */
                @media (max-width: 768px) {
                    .testimonials-scroll-wrapper {
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                        padding: 1rem 0;
                    }

                    .testimonials-scroll-container {
                        display: flex;
                        gap: 1.5rem;
                        animation: scroll-left 40s linear infinite;
                        width: max-content;
                    }

                    .testimonials-scroll-container-reverse {
                        display: flex;
                        gap: 1.5rem;
                        animation: scroll-right 40s linear infinite;
                        width: max-content;
                    }

                    @keyframes scroll-left {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-33.33%);
                        }
                    }

                    @keyframes scroll-right {
                        0% {
                            transform: translateX(-33.33%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    .testimonial-card-mobile {
                        flex: 0 0 min(85vw, 340px);
                        width: min(85vw, 340px);
                    }

                    /* Pause animation on hover */
                    .testimonials-scroll-container:hover,
                    .testimonials-scroll-container-reverse:hover {
                        animation-play-state: paused;
                    }
                }
            `}</style>
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-[#8B1D1D] font-semibold text-xs md:text-sm mb-2">Success Stories</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3">
                        Loved by Leading Gynecologists
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
                        Join hundreds of doctors who are revolutionizing pregnancy care.
                    </p>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <MotionWrapper key={index} delay={index * 0.1} className="flex">
                            <div
                                className="relative bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 max-w-xs mx-auto w-full"
                            >
                                {/* Avatar */}
                                <div className="flex justify-center mb-3">
                                    <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={56}
                                            height={56}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex justify-center mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-base">★</span>
                                    ))}
                                </div>

                                {/* Name and Location */}
                                <h3 className="text-sm md:text-base font-bold text-black text-center mb-0.5">
                                    {testimonial.name}
                                </h3>
                                <p className="text-[10px] md:text-xs text-gray-500 text-center mb-3">
                                    {testimonial.location}
                                </p>

                                {/* Quote Icon */}
                                <div className="flex justify-center mb-1">
                                    <span className="text-3xl text-[#D66F6F] opacity-50" style={{ fontFamily: 'Georgia, serif' }}>"</span>
                                </div>

                                {/* Quote */}
                                <p className="text-xs text-gray-700 text-center leading-relaxed font-medium">
                                    {testimonial.quote}
                                </p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Mobile: Continuous Scrolling Carousel - First Row */}
                <div className="md:hidden testimonials-scroll-wrapper">
                    <div className="testimonials-scroll-container">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="testimonial-card-mobile relative bg-white/80 backdrop-blur-md rounded-3xl p-3 shadow-lg border-2 border-[#8B1D1D]"
                            >
                                <div className="flex gap-3">
                                    {/* Left side: Avatar and Stars */}
                                    <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                                        {/* Avatar */}
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg overflow-hidden flex items-center justify-center">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={56}
                                                height={56}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-0.5">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-500 text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right side: Name, Location, and Quote */}
                                    <div className="flex flex-col justify-center flex-1 min-w-0">
                                        {/* Name */}
                                        <h3 className="text-base font-bold text-black mb-0.5">
                                            {testimonial.name}
                                        </h3>

                                        {/* Location */}
                                        <p className="text-xs text-gray-600 mb-1.5">
                                            {testimonial.location}
                                        </p>

                                        {/* Quote */}
                                        <p className="text-xs text-gray-700 leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Continuous Scrolling Carousel - Second Row (Reverse) */}
                <div className="md:hidden testimonials-scroll-wrapper">
                    <div className="testimonials-scroll-container-reverse">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div
                                key={`reverse-${index}`}
                                className="testimonial-card-mobile relative bg-white/80 backdrop-blur-md rounded-3xl p-3 shadow-lg border-2 border-[#8B1D1D]"
                            >
                                <div className="flex gap-3">
                                    {/* Left side: Avatar and Stars */}
                                    <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                                        {/* Avatar */}
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg overflow-hidden flex items-center justify-center">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={56}
                                                height={56}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-0.5">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-500 text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right side: Name, Location, and Quote */}
                                    <div className="flex flex-col justify-center flex-1 min-w-0">
                                        {/* Name */}
                                        <h3 className="text-base font-bold text-black mb-0.5">
                                            {testimonial.name}
                                        </h3>

                                        {/* Location */}
                                        <p className="text-xs text-gray-600 mb-1.5">
                                            {testimonial.location}
                                        </p>

                                        {/* Quote */}
                                        <p className="text-xs text-gray-700 leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
