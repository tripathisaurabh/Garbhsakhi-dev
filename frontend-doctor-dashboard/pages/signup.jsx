import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import '../app/globals.css';

const SignUp = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        hospitalName: '',
        email: '',
        password: '',
        phone: '',
        username: '',
        specialization: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Password validation
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password =
                'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
        }

        // Phone validation (Indian 10-digit)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

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
            const API = process.env.NEXT_PUBLIC_BACKEND_URL;
            if (!API) throw new Error('Backend URL not configured');

            const res = await fetch(`${API}/doctor/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    password: formData.password,
                    hospitalName: formData.hospitalName.trim(),
                    phone: formData.phone,
                    username: formData.username.trim(),
                    specialization: formData.specialization.trim()
                })
            });

            const data = await res.json();

            if (!res.ok) {
                setErrors({ form: data.detail || 'Signup failed' });
                setLoading(false);
                return;
            }

            localStorage.setItem('token', data.access_token);
            router.push('/dashboard');
        } catch (err) {
            console.error('Signup error:', err);
            setErrors({ form: err.message || 'Something went wrong' });
            setLoading(false);
        }
    };

    const handleGoogleSignUp = () => {
        console.log('Google sign up clicked');
        router.push('/dashboard');
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

            {/* Card */}
            <div className="w-full max-w-[600px] mt-20 sm:mt-24 bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-8 sm:px-8 sm:py-10 border border-white/50">
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#8B1D1D] mb-1">
                        Sign Up
                    </h1>
                    <p className="text-gray-700 text-xs sm:text-sm">
                        Already have an account?{' '}
                        <Link
                            href="/signin"
                            className="text-[#D66F6F] font-semibold hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name + Hospital */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Name
                            </label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border border-gray-400 rounded-xl"
                            />
                        </div>

                        <div>
                            <label className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Hospital Name
                            </label>
                            <input
                                name="hospitalName"
                                value={formData.hospitalName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border border-gray-400 rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Email + Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border border-gray-400 rounded-xl"
                            />
                        </div>

                        <div>
                            <label className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className={`w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border ${errors.password ? 'border-red-500' : 'border-gray-400'
                                    } rounded-xl`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-[10px] ml-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Phone + Username + Specialization */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Phone No.
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="8763452643"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={`w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border ${errors.phone ? 'border-red-500' : 'border-gray-400'
                                    } rounded-xl`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-[10px] ml-1">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                User Name
                            </label>
                            <input
                                name="username"
                                placeholder="Dr_name"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border border-gray-400 rounded-xl"
                            />
                        </div>

                        <div>
                            <label className="block text-[#8B1D1D] font-bold text-xs ml-1">
                                Specialization
                            </label>
                            <input
                                name="specialization"
                                placeholder="Gynocologist"
                                value={formData.specialization}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border border-gray-400 rounded-xl"
                            />
                        </div>
                    </div>

                    {errors.form && (
                        <p className="text-red-500 text-sm text-center">
                            {errors.form}
                        </p>
                    )}

                    <div className="flex justify-center pt-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#8B1D1D] text-white px-10 py-2.5 rounded-full font-bold"
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
