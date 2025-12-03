import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../app/globals.css';


const SignUp = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        hospitalName: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setErrors({});

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                // Handle error response
                setErrors({ form: data.message || 'Signup failed' });
                setLoading(false);
                return;
            }

            // Success - navigate to dashboard
            console.log('User created:', data);
            router.push('/docdashboard');
        } catch (error) {
            console.error('Signup error:', error);
            setErrors({ form: 'An error occurred. Please try again.' });
            setLoading(false);
        }
    };

    const handleGoogleSignUp = () => {
        // Handle Google sign up
        console.log('Google sign up clicked');
        router.push('/docdashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE3E3] to-[#D4E7FF] px-4 py-6 sm:p-6">

            {/* Logo */}
            <div className="absolute top-6 sm:top-10 left-1/2 transform -translate-x-1/2 z-10">
                <Image
                    src="/icons/logo.png"
                    alt="Garbhsakhi Logo"
                    width={200}
                    height={60}
                    className="w-auto h-12 sm:h-16 object-contain"
                />
            </div>

            {/* Sign Up Card */}
            <div className="w-full max-w-[600px] mt-20 sm:mt-24 bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-8 sm:px-8 sm:py-10 border border-white/50">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#8B1D1D] mb-1">Sign Up</h1>
                    <p className="text-gray-700 text-xs sm:text-sm">
                        Already have an account?{' '}
                        <Link href="/signin" className="text-[#D66F6F] font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name and Hospital Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div className="space-y-1">
                            <label htmlFor="name" className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-gray-700 bg-[#F5F7FA]/80 border border-gray-400 rounded-xl focus:outline-none focus:border-[#8B1D1D] focus:ring-1 focus:ring-[#8B1D1D] transition-all"
                                required
                            />
                        </div>

                        {/* Hospital Name Field */}
                        <div className="space-y-1">
                            <label htmlFor="hospitalName" className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Hospital Name
                            </label>
                            <input
                                type="text"
                                id="hospitalName"
                                name="hospitalName"
                                value={formData.hospitalName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-gray-700 bg-[#F5F7FA]/80 border border-gray-400 rounded-xl focus:outline-none focus:border-[#8B1D1D] focus:ring-1 focus:ring-[#8B1D1D] transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Email and Password Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Email Field */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                E mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-gray-700 bg-[#F5F7FA]/80 border border-gray-400 rounded-xl focus:outline-none focus:border-[#8B1D1D] focus:ring-1 focus:ring-[#8B1D1D] transition-all"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 text-sm text-gray-700 bg-[#F5F7FA]/80 border ${errors.password ? 'border-red-500' : 'border-gray-400'} rounded-xl focus:outline-none focus:border-[#8B1D1D] focus:ring-1 focus:ring-[#8B1D1D] transition-all`}
                                required
                            />
                            {errors.password && <p className="text-red-500 text-[10px] ml-1">{errors.password}</p>}
                            <div className="flex justify-end mt-0.5 ml-1">
                                <Link href="/forgot-password" className="text-[10px] text-gray-600 hover:text-[#8B1D1D] transition-colors">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Form Error */}
                    {errors.form && <p className="text-red-500 text-sm text-center mt-2">{errors.form}</p>}

                    {/* Sign Up Button */}
                    <div className="flex justify-center pt-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#8B1D1D] text-white px-10 py-2.5 rounded-full font-bold text-base hover:bg-[#6d1616] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[180px] disabled:opacity-70"
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-3 py-1">
                        <div className="h-px bg-gray-400/50 flex-1 max-w-[80px]"></div>
                        <span className="text-gray-600 text-xs">Or</span>
                        <div className="h-px bg-gray-400/50 flex-1 max-w-[80px]"></div>
                    </div>

                    {/* Google Sign Up Button */}
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleGoogleSignUp}
                            className="flex items-center justify-center gap-2 bg-white/90 px-6 py-2.5 rounded-full border border-gray-300/80 hover:border-[#D66F6F] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto min-w-[220px]"
                        >
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.8055 10.2292C19.8055 9.55156 19.7501 8.86719 19.6323 8.19531H10.2002V12.0492H15.6014C15.3773 13.2911 14.6571 14.3898 13.6114 15.0875V17.5867H16.8251C18.7179 15.8449 19.8055 13.2722 19.8055 10.2292Z" fill="#4285F4" />
                                <path d="M10.2002 20.0008C12.9527 20.0008 15.2726 19.1053 16.8321 17.5867L13.6184 15.0875C12.7367 15.6972 11.5948 16.0428 10.2072 16.0428C7.54343 16.0428 5.28174 14.2803 4.50343 11.9167H1.18555V14.4922C2.78174 17.6594 6.31424 20.0008 10.2002 20.0008Z" fill="#34A853" />
                                <path d="M4.49652 11.9167C4.07652 10.6747 4.07652 9.33281 4.49652 8.09082V5.51531H1.18555C-0.204102 8.25531 -0.204102 11.7522 1.18555 14.4922L4.49652 11.9167Z" fill="#FBBC04" />
                                <path d="M10.2002 3.95781C11.6671 3.93594 13.0825 4.47344 14.1421 5.46875L17.0086 2.60219C15.1857 0.904687 12.7367 -0.0210937 10.2002 0.000781252C6.31424 0.000781252 2.78174 2.34219 1.18555 5.51531L4.49652 8.09082C5.26793 5.72031 7.53652 3.95781 10.2002 3.95781Z" fill="#EA4335" />
                            </svg>
                            <span className="text-gray-600 font-medium text-xs sm:text-sm">Sign Up with Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
