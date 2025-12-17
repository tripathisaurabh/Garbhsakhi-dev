'use client'

import React, { useState } from 'react'

export default function AddPatientModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        age: '',
        pregnancyWeek: ''
    })
    const [errors, setErrors] = useState({})
    const [showSuccess, setShowSuccess] = useState(false)

    if (!isOpen) return null

    const validateForm = () => {
        const newErrors = {}

        // Phone number validation
        const phoneRegex = /^\d{10}$/
        if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be exactly 10 digits.'
        }

        // Age validation
        const age = parseInt(formData.age)
        if (formData.age && (isNaN(age) || age < 0 || age > 120)) {
            newErrors.age = 'Age must be a valid number between 0 and 120.'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // Here you would typically send the data to a backend
            console.log('Form submitted:', formData)
            setShowSuccess(true)
        }
    }

    const handleCloseSuccess = () => {
        setShowSuccess(false)
        setFormData({
            fullName: '',
            phoneNumber: '',
            age: '',
            pregnancyWeek: ''
        })
        setErrors({})
        onClose()
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-slate-50 p-6 md:p-8 max-w-xl w-full relative"
                style={{ borderRadius: '30px' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    aria-label="Close modal"
                >
                    ×
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Add Patients
                    </h2>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Patient Full Name */}
                    <div className="space-y-1 px-12">
                        <label className="block text-sm font-bold text-gray-900 ml-1">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-slate-300 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-slate-400 transition-colors text-base"
                        />
                    </div>

                    {/* Patient Phone Number */}
                    <div className="space-y-1 px-12">
                        <label className="block text-sm font-bold text-gray-900 ml-1">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 ${errors.phoneNumber ? 'border-red-500' : 'border-slate-300'} rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-slate-400 transition-colors text-base`}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phoneNumber}</p>}
                    </div>

                    {/* Patient Age */}
                    <div className="space-y-1 px-12">
                        <label className="block text-sm font-bold text-gray-900 ml-1">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Age
                        </label>
                        <input
                            type="number"
                            name="age"
                            required
                            value={formData.age}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 ${errors.age ? 'border-red-500' : 'border-slate-300'} rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-slate-400 transition-colors text-base`}
                        />
                        {errors.age && <p className="text-red-500 text-xs mt-1 ml-1">{errors.age}</p>}
                    </div>

                    {/* Patient Pregnancy Week */}
                    <div className="space-y-1 px-12">
                        <label className="block text-sm font-bold text-gray-900 ml-1">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Pregnancy Week
                        </label>
                        <input
                            type="text"
                            name="pregnancyWeek"
                            required
                            value={formData.pregnancyWeek}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border-slate-300 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-slate-400 transition-colors text-base"
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="bg-[#FFE5E5] border-2 border-[#FFD1D1] text-black px-8 py-2 rounded-xl font-bold text-lg hover:bg-[#FFD1D1] transition-colors shadow-sm"
                        >
                            Add Patients
                        </button>
                    </div>
                </form>
            </div>

            {showSuccess && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
                    onClick={handleCloseSuccess}
                >
                    <div
                        className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full relative"
                        style={{ animation: 'slideUp 0.4s ease-out' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseSuccess}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="mb-6 flex justify-center">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-30 blur-xl"></div>
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                            Patient Added!
                        </h3>
                        <p className="text-gray-600 text-base mb-8">
                            The patient has been successfully added to your records.
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleCloseSuccess}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Done
                            </button>
                            <button
                                onClick={() => {
                                    setShowSuccess(false)
                                    setFormData({
                                        fullName: '',
                                        phoneNumber: '',
                                        age: '',
                                        pregnancyWeek: ''
                                    })
                                }}
                                className="w-full px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Another Patient
                            </button>
                        </div>
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