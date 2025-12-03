import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';
import AddPatientModal from '../components/AddPatientModal';

const Profile = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        role: '',
        status: '',
        clinicName: '',
        clinicAddress: '',
        city: '',
        pincode: '',
        consultationTimings: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Check profile image
        if (!profileImage) {
            newErrors.profileImage = 'Profile image is required';
        }

        // Check all required fields
        Object.keys(formData).forEach(key => {
            if (key !== 'gender' && !formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });

        // Phone number validation
        const phoneRegex = /^\d{10}$/;
        if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be exactly 10 digits.';
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (formData.password && !passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
        }

        // Confirm Password validation
        if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSaveProfile = () => {
        if (validateForm()) {
            // Here you would typically save the data to your backend
            // For now, we'll just show the confirmation popup
            setShowConfirmation(true);

            // Auto-hide after 3 seconds
            setTimeout(() => {
                setShowConfirmation(false);
            }, 3000);
        }
    };

    const handleLogout = () => {
        setIsProfileOpen(false);
        setShowLogoutConfirmation(true);

        // Redirect to signin page after 2 seconds
        setTimeout(() => {
            window.location.href = '/signin';
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#EBF3FF] font-sans text-slate-800">
            <Head>
                <title>Profile | Garbhsakhi</title>
            </Head>

            <AddPatientModal isOpen={isAddPatientOpen} onClose={() => setIsAddPatientOpen(false)} />

            {/* Header */}
            <header className="bg-white px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <Image
                            src="/icons/logo.png"
                            alt="Garbhsakhi Logo"
                            width={150}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
                    <Link href="/docdashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
                    <Link href="/patientPreview" className="hover:text-blue-600 transition-colors">Patients</Link>
                    <a href="#" className="hover:text-blue-600 transition-colors">Appointments</a>
                    <Link href="/messages" className="hover:text-blue-600 transition-colors">Messages</Link>
                </nav>

                <div className="flex items-center gap-4 relative">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-blue-300 transition-all focus:outline-none"
                    >
                        <Image src="/icons/doctor-avatar.png" alt="Profile" width={40} height={40} className="w-full h-full object-cover" />
                    </button>

                    {isProfileOpen && (
                        <div className="absolute top-full right-0 mt-3 w-64 bg-blue-50/80 backdrop-blur-sm border-2 border-blue-200/50 rounded-3xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col gap-1">
                                <button className="flex items-center gap-3 px-4 py-3 text-slate-800 hover:bg-white/50 rounded-2xl transition-colors text-left group">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-base">Profile</span>
                                </button>

                                <button
                                    onClick={() => {
                                        setIsAddPatientOpen(true);
                                        setIsProfileOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-4 py-3 text-slate-800 hover:bg-white/50 rounded-2xl transition-colors text-left group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center relative group-hover:scale-105 transition-transform shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-slate-900">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full text-white flex items-center justify-center text-[10px] font-bold border border-white">
                                            +
                                        </div>
                                    </div>
                                    <span className="font-bold text-base">Add Patients</span>
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 px-4 py-3 text-slate-800 hover:bg-white/50 rounded-2xl transition-colors text-left group"
                                >
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-slate-900">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-base">Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Left Column - Upload Image */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200 shadow-sm">
                            <label htmlFor="profile-upload" className="cursor-pointer w-full">
                                <div className="aspect-square w-full max-w-[180px] mx-auto rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors overflow-hidden">
                                    {profileImage ? (
                                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-center text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm font-medium">Upload</p>
                                            <p className="text-sm font-medium">Image</p>
                                        </div>
                                    )}
                                </div>
                                <input
                                    id="profile-upload"
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                            <p className="text-center text-sm text-slate-600 mt-4">
                                <span className="text-red-500">*</span>Upload Profile Photo
                            </p>
                            {errors.profileImage && <p className="text-red-500 text-xs mt-1 text-center">{errors.profileImage}</p>}
                            <p className="text-center text-xs text-slate-500 mt-1">
                                (.png, .jpg, .jpeg)
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Forms */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* Doctor Identity Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-xl font-bold text-center mb-6 text-slate-800">Doctor Identity</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.fullName ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>E mail
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.email ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Gender(Optional)
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border border-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all appearance-none text-slate-500"
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.phoneNumber ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Login & Role Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-xl font-bold text-center mb-6 text-slate-800">Login & Role</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.password ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.confirmPassword ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Role
                                    </label>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.role ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all appearance-none text-slate-500`}
                                    >
                                        <option value="">Select</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="admin">Admin</option>
                                        <option value="nurse">Nurse</option>
                                    </select>
                                    {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Status
                                    </label>
                                    <input
                                        type="text"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.status ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Clinic Details Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-xl font-bold text-center mb-6 text-slate-800">Clinic Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Clinic/Hospital Name
                                    </label>
                                    <input
                                        type="text"
                                        name="clinicName"
                                        value={formData.clinicName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.clinicName ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.clinicName && <p className="text-red-500 text-xs mt-1">{errors.clinicName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Clinic Address
                                    </label>
                                    <input
                                        type="text"
                                        name="clinicAddress"
                                        value={formData.clinicAddress}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.clinicAddress ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.clinicAddress && <p className="text-red-500 text-xs mt-1">{errors.clinicAddress}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.city ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Pincode
                                    </label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.pincode ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        <span className="text-red-500">*</span>Consultation Timings
                                    </label>
                                    <input
                                        type="text"
                                        name="consultationTimings"
                                        value={formData.consultationTimings}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Mon-Fri: 9:00 AM - 5:00 PM"
                                        className={`w-full px-4 py-2 rounded-xl bg-[#EBF3FF] border ${errors.consultationTimings ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                                    />
                                    {errors.consultationTimings && <p className="text-red-500 text-xs mt-1">{errors.consultationTimings}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={handleSaveProfile}
                                className="px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            >
                                Save Profile
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            {/* Confirmation Popup */}
            {showConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-4 animate-in zoom-in slide-in-from-bottom-4 duration-300 border-2 border-blue-100">
                        <div className="flex flex-col items-center text-center">
                            {/* Success Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg animate-in zoom-in duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Success Message */}
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Profile Saved Successfully!
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Your profile information has been updated and saved securely.
                            </p>

                            {/* Close Button */}
                            <button
                                onClick={() => setShowConfirmation(false)}
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Logout Confirmation Popup */}
            {showLogoutConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-4 animate-in zoom-in slide-in-from-bottom-4 duration-300 border-2 border-slate-200">
                        <div className="flex flex-col items-center text-center">
                            {/* Logout Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center mb-6 shadow-lg animate-in zoom-in duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Logout Message */}
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Logged Out Successfully!
                            </h3>
                            <p className="text-slate-600 mb-2">
                                You have been logged out of your account.
                            </p>
                            <p className="text-slate-500 text-sm">
                                Redirecting to sign in page...
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
