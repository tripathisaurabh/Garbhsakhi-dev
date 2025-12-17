'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MotionWrapper from './MotionWrapper';

const GarbhSakhiHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FFF2F2] z-50 h-[70px] flex items-center shadow-sm">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <a href="#hero">
                <Image
                  src="/icons/logo.png"
                  alt="Garbhsakhi Logo"
                  width={220}
                  height={60}
                  className="w-auto h-[60px] object-contain cursor-pointer"
                />
              </a>
            </div>

            {/* Right Side Content (Links + Button) */}
            <div className="flex items-center gap-8 ml-auto">
              {/* Nav Links - Desktop */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-[#8B1D1D] hover:text-[#D66F6F] transition-colors font-bold text-sm">
                  Features
                </a>
                <a href="#how-it-works" className="text-[#8B1D1D] hover:text-[#D66F6F] transition-colors font-bold text-sm">
                  How It Works
                </a>
                <a href="#pricing" className="text-[#8B1D1D] hover:text-[#D66F6F] transition-colors font-bold text-sm">
                  Pricing
                </a>
                <a href="#testimonials" className="text-[#8B1D1D] hover:text-[#D66F6F] transition-colors font-bold text-sm">
                  Testimonials
                </a>
              </div>

              {/* CTA Button - Desktop */}
<a
  href={`${process.env.NEXT_PUBLIC_DOCTOR_APP_URL}/signup`}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block"
>
  <button className="bg-[#D66F6F] text-white px-6 py-2.5 rounded-full font-bold text-base hover:bg-[#c96868] transition-colors shadow-md">
    Start Free Trial
  </button>
</a>


           

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden z-50 p-2 text-[#8B1D1D]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="fixed top-[70px] right-4 bg-white/40 backdrop-blur-xl z-40 shadow-2xl rounded-[2rem] animate-in fade-in slide-in-from-right-5 duration-300 md:hidden" style={{ width: 'calc(55% - 40px)' }}>
            <div className="flex flex-col items-center gap-2 py-4 px-6">
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-[85%] text-center bg-white/50 backdrop-blur-md py-2 px-4 rounded-3xl text-[#8B1D1D] hover:text-[#D66F6F] hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-right-3"
                style={{ animationDelay: '50ms' }}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-[85%] text-center bg-white/50 backdrop-blur-md py-2 px-4 rounded-3xl text-[#8B1D1D] hover:text-[#D66F6F] hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-right-3"
                style={{ animationDelay: '100ms' }}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-[85%] text-center bg-white/50 backdrop-blur-md py-2 px-4 rounded-3xl text-[#8B1D1D] hover:text-[#D66F6F] hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-right-3"
                style={{ animationDelay: '150ms' }}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-[85%] text-center bg-white/50 backdrop-blur-md py-2 px-4 rounded-3xl text-[#8B1D1D] hover:text-[#D66F6F] hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-right-3"
                style={{ animationDelay: '200ms' }}
              >
                Testimonials
              </a>

              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-[85%] animate-in fade-in slide-in-from-right-3" style={{ animationDelay: '250ms' }}>
                <button className="w-full bg-[#D66F6F] text-white py-2 px-4 rounded-3xl font-semibold text-sm hover:bg-[#c96868] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="hero" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            <MotionWrapper delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] text-black">
                Your Trusted <br />
                <span className="text-[#8B1D1D]">Pregnancy</span> <br />
                <span className="text-[#8B1D1D]">Companion</span> Every Step of the Way
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-xl">
                Complete pregnancy care for healthcare providers and expecting mothers. AI-powered WhatsApp monitoring with 24/7 support, intelligent alerts, and personalized guidance for a safe and healthy pregnancy journey.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.5}>
              <div className="flex gap-6 pt-4">
                <a
  href={`${process.env.NEXT_PUBLIC_DOCTOR_APP_URL}/signup`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#D66F6F] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#c96868] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
    Join GarbhSakhi
  </button>
</a>

                <button className="bg-[#FFF0F0] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all duration-300 border border-[#D66F6F] shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Watch Video
                </button>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end items-center relative">
            <MotionWrapper delay={0.3} className="relative w-full max-w-[280px]">
              <Image
                src="/icons/mockup.png"
                alt="GarbhSakhi App Interface"
                width={400}
                height={800}
                className="w-full h-auto"
                priority
              />
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarbhSakhiHero;