'use client'

import React, { useState } from 'react'

export default function DemoModal({ isOpen, onClose }) {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('00:00')
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    if (!isOpen) return null

    // Generate hours and minutes for time picker
    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

    const handleTimeSelect = (hour, minute) => {
        setSelectedTime(`${hour}:${minute}`)
        setShowTimePicker(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSuccess(true)
    }

    const handleCloseSuccess = () => {
        setShowSuccess(false)
        onClose()
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <style jsx global>{`
                input[type="date"]::-webkit-calendar-picker-indicator {
                    opacity: 0;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
            `}</style>

            <div
                className="bg-gradient-to-b from-[#FFF0F0] to-[#E8D4F8] p-5 md:p-6 max-w-xl w-full relative"
                style={{ borderRadius: '30px' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    aria-label="Close modal"
                >
                    ×
                </button>

                <div className="text-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-black mb-1">
                        Schedule a Live Demo
                    </h2>
                    <p className="text-xs text-gray-700">
                        Book a 1:1 walkthrough of GarbhSakhi. Our team will guide you through the platform and answer all your questions.
                    </p>
                </div>

                <form className="space-y-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Doctor Name"
                        required
                        className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-[#B8A5D9]/30 rounded-3xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#B8A5D9] transition-colors text-sm"
                    />

                    <input
                        type="text"
                        placeholder="Clinic/Hospital Name"
                        required
                        className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-[#B8A5D9]/30 rounded-3xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#B8A5D9] transition-colors text-sm"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-[#B8A5D9]/30 rounded-3xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#B8A5D9] transition-colors text-sm"
                    />

                    <input
                        type="tel"
                        placeholder="Phone"
                        required
                        className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-[#B8A5D9]/30 rounded-3xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#B8A5D9] transition-colors text-sm"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="relative">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                required
                                className="w-full px-4 py-2 pr-10 bg-white/60 backdrop-blur-sm border-2 border-[#B8A5D9]/30 rounded-3xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#B8A5D9] transition-colors text-sm"
                                style={{ colorScheme: 'light' }}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowTimePicker(!showTimePicker)}
                                className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-[#B8A5D9]/30 rounded-3xl text-gray-800 focus:outline-none focus:border-[#B8A5D9] transition-colors text-sm text-left"
                            >
                                {selectedTime || '00:00'}
                            </button>

                            {showTimePicker && (
                                <div className="absolute top-full mt-1 left-0 right-0 bg-white border-2 border-[#B8A5D9]/30 rounded-2xl shadow-lg z-10 p-3">
                                    <div className="flex gap-2 justify-center">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs text-gray-600 mb-1">Hour</span>
                                            <div className="h-32 overflow-y-auto border border-gray-300 rounded-lg w-14 scroll-smooth">
                                                {hours.map((hour) => (
                                                    <button
                                                        key={hour}
                                                        type="button"
                                                        onClick={() => handleTimeSelect(hour, selectedTime.split(':')[1] || '00')}
                                                        className={`w-full py-1 text-sm hover:bg-[#B8A5D9]/20 ${selectedTime.split(':')[0] === hour ? 'bg-[#B8A5D9]/30 font-bold' : ''
                                                            }`}
                                                    >
                                                        {hour}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <span className="text-2xl font-bold self-center mt-5">:</span>

                                        <div className="flex flex-col items-center">
                                            <span className="text-xs text-gray-600 mb-1">Min</span>
                                            <div className="h-32 overflow-y-auto border border-gray-300 rounded-lg w-14 scroll-smooth">
                                                {minutes.map((minute) => (
                                                    <button
                                                        key={minute}
                                                        type="button"
                                                        onClick={() => handleTimeSelect(selectedTime.split(':')[0] || '00', minute)}
                                                        className={`w-full py-1 text-sm hover:bg-[#B8A5D9]/20 ${selectedTime.split(':')[1] === minute ? 'bg-[#B8A5D9]/30 font-bold' : ''
                                                            }`}
                                                    >
                                                        {minute}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <textarea
                        placeholder="Additional Notes..."
                        rows="2"
                        className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-[#B8A5D9]/30 rounded-3xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#B8A5D9] transition-colors text-sm resize-none"
                    ></textarea>

                    <div className="flex justify-center pt-1">
                        <button
                            type="submit"
                            className="bg-[#D66F6F] text-white px-10 py-2.5 rounded-3xl font-bold text-sm hover:bg-[#c96868] transition-colors shadow-lg"
                        >
                            Confirm Demo
                        </button>
                    </div>
                </form>
            </div>

            {showSuccess && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
                    onClick={handleCloseSuccess}
                >
                    <div
                        className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm w-full relative"
                        style={{ animation: 'slideUp 0.3s ease-out' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseSuccess}
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <div className="mb-4 flex justify-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Demo Confirmed!</h3>
                        <p className="text-gray-600 text-sm">We'll contact you shortly to schedule your personalized walkthrough.</p>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    )
}