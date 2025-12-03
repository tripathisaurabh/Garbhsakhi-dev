'use client'

import React, { useState } from 'react'
import DemoModal from './DemoModal'
import MotionWrapper from './MotionWrapper'

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <footer className="w-full">

                {/* CTA Section */}
                <div className="w-full py-8 md:py-12 text-center">
                    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                        <MotionWrapper>
                            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3">
                                Built for Doctors — Designed for Better<br />
                                Pregnancy Care
                            </h2>
                        </MotionWrapper>

                        <MotionWrapper delay={0.2}>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
                                GarbhSakhi is an AI-enabled support platform created for doctors to streamline patient engagement, reminders, and monitoring — currently in early access for partner clinics.
                            </p>
                        </MotionWrapper>

                        <MotionWrapper delay={0.4}>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#D66F6F] text-white px-8 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-[#c96868] transition-colors shadow-lg"
                            >
                                Book a Demo
                            </button>
                        </MotionWrapper>
                    </div>
                </div>

                {/* FOOTER CONTENT */}
                <div className="w-full border-t-2 border-[#8B1D1D] rounded-t-[50px] bg-[#FFF0F0]/50 py-6 md:py-10">
                    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-6">

                            {/* LEFT SIDE */}
                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8B1D1D]">
                                    GarbhSakhi
                                </h3>

                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-md">
                                    AI-powered pregnancy care platform designed to assist clinics and hospitals in delivering smarter, safer maternal care through WhatsApp and AI.
                                </p>

                                {/* SOCIAL ICONS */}
                                <div className="flex gap-3 pt-2">

                                    {/* Instagram */}
                                    <a className="w-10 h-10 bg-[#8B1D1D] rounded-xl flex items-center justify-center hover:bg-[#6B1515] transition-colors">
                                        <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                                            <path d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 
                                            22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM12 7C14.76 7 17 
                                            9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 
                                            9.24 9.24 7 12 7ZM18 6.5C18 7.33 17.33 8 16.5 8C15.67 8 
                                            15 7.33 15 6.5C15 5.67 15.67 5 16.5 5C17.33 5 18 5.67 
                                            18 6.5Z"/>
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a className="w-10 h-10 bg-[#8B1D1D] rounded-xl flex items-center justify-center hover:bg-[#6B1515] transition-colors">
                                        <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 
                                            0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 
                                            3.5ZM0.22 8H4.78V24H0.22V8ZM8.34 8H12.72V10.16H12.78C13.38 
                                            9.02 14.88 7.82 17.12 7.82C21.44 7.82 22 10.52 22 
                                            14.22V24H17.44V15.38C17.44 13.28 17.4 10.64 14.7 
                                            10.64C12 10.64 11.6 12.96 11.6 15.22V24H7.04V8H8.34Z"/>
                                        </svg>
                                    </a>

                                    {/* X / Twitter */}
                                    <a className="w-10 h-10 bg-[#8B1D1D] rounded-xl flex items-center justify-center hover:bg-[#6B1515] transition-colors">
                                        <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 
                                            21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
                                        </svg>
                                    </a>

                                </div>
                            </div>

                            {/* RIGHT SIDE – MOBILE REARRANGED */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

                                {/* COMPANY */}
                                <div>
                                    <h4 className="text-sm md:text-lg font-bold text-black mb-2">Company</h4>
                                    <ul className="space-y-1">
                                        <li><a className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D]">About Us</a></li>
                                        <li><a className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D]">Contact Us</a></li>
                                        <li><a className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D]">Careers</a></li>
                                    </ul>
                                </div>

                                {/* PRODUCT */}
                                <div>
                                    <h4 className="text-sm md:text-lg font-bold text-black mb-2">Product</h4>
                                    <ul className="space-y-1">
                                        <li><a className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D]">Features</a></li>
                                        <li><a className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D]">Pricing</a></li>
                                        <li>
                                            <a
                                                onClick={() => setIsModalOpen(true)}
                                                className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D] cursor-pointer"
                                            >
                                                Book a Demo
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* LEGAL — FULL WIDTH IN MOBILE */}
                                <div className="col-span-2 md:col-span-1">
                                    <h4 className="text-sm md:text-lg font-bold text-black mb-2">Legal</h4>
                                    <ul className="space-y-1">
                                        <li><a className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D]">Privacy Policy</a></li>
                                        <li><a className="text-xs md:text-sm text-gray-700 hover:text-[#8B1D1D]">Terms & Conditions</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* COPYRIGHT */}
                        <div className="border-t border-gray-300 pt-4 text-center">
                            <p className="text-xs md:text-sm text-gray-600">
                                © 2025 GarbhSakhi. All rights reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
