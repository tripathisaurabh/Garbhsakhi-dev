import React, { useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';

const AddPatients = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        age: '',
        pregnancyWeek: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log('Form submitted:', formData);
        setShowConfirmation(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-[#EBF3FF] flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-center text-black mb-10">Add Patients</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Patient Full Name */}
                    <div className="space-y-2">
                        <label className="block text-lg font-bold text-gray-900">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full h-14 px-6 rounded-[1.5rem] border-2 border-blue-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-0 transition-colors text-lg"
                        />
                    </div>

                    {/* Patient Phone Number */}
                    <div className="space-y-2">
                        <label className="block text-lg font-bold text-gray-900">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full h-14 px-6 rounded-[1.5rem] border-2 border-blue-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-0 transition-colors text-lg"
                        />
                    </div>

                    {/* Patient Age */}
                    <div className="space-y-2">
                        <label className="block text-lg font-bold text-gray-900">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Age
                        </label>
                        <input
                            type="number"
                            name="age"
                            required
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full h-14 px-6 rounded-[1.5rem] border-2 border-blue-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-0 transition-colors text-lg"
                        />
                    </div>

                    {/* Patient Pregnancy Week */}
                    <div className="space-y-2">
                        <label className="block text-lg font-bold text-gray-900">
                            <span className="text-red-600 mr-1">*</span>
                            Patient Pregnancy Week
                        </label>
                        <input
                            type="text"
                            name="pregnancyWeek"
                            required
                            value={formData.pregnancyWeek}
                            onChange={handleChange}
                            className="w-full h-14 px-6 rounded-[1.5rem] border-2 border-blue-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-0 transition-colors text-lg"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8">
                        <button
                            type="submit"
                            className="px-16 py-3 bg-[#FFE5E5] border-2 border-[#FFD1D1] rounded-[2rem] text-xl text-black hover:bg-[#FFD1D1] transition-colors shadow-sm"
                        >
                            Add Patients
                        </button>
                    </div>
                </form>
            </div>

            {/* Confirmation Popup */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full mx-4 shadow-2xl transform transition-all scale-100 border-2 border-blue-100">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
                            <p className="text-gray-600 mb-6">Patient has been added successfully.</p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setShowConfirmation(false)}
                                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Add Another
                                </button>
                                <Link href="/patientPreview">
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                                        View Patients
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddPatients;
