"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../app/globals.css';

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle error response
        setErrors({ form: data.message || 'Sign in failed' });
        setLoading(false);
        return;
      }

      // Success - navigate to dashboard
      console.log('User signed in:', data);
      router.push('/docdashboard');
    } catch (error) {
      console.error('Signin error:', error);
      setErrors({ form: 'An error occurred. Please try again.' });
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    router.push('/docdashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE3E3] to-[#D4E7FF] px-4 py-6 md:p-10">

      <div className="absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2 z-10">
        <Image src="/icons/logo.png" alt="Logo" width={200} height={60} className="h-14 md:h-16 object-contain" />
      </div>

      <div className="w-full max-w-[600px] mt-24 bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-8 md:px-10 md:py-12 border border-white/50">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#8B1D1D]">Welcome Back!</h1>
          <p className="text-gray-700 text-sm">
            Don't have an account?{' '}
            <Link href="/signup" className="text-[#D66F6F] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="email" className="block text-[#8B1D1D] font-bold text-xs ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border rounded-xl focus:ring-[#8B1D1D]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#8B1D1D] font-bold text-xs ml-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm bg-[#F5F7FA]/80 border rounded-xl focus:ring-[#8B1D1D] ${errors.password ? 'border-red-500' : 'border-gray-400'
                }`}
              required
            />
            {errors.password && <p className="text-red-500 text-[10px]">{errors.password}</p>}

            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-[11px] text-gray-600 hover:text-[#8B1D1D]">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Form Error */}
          {errors.form && <p className="text-red-500 text-sm text-center mt-2">{errors.form}</p>}

          <div className="flex justify-center pt-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#8B1D1D] text-white px-10 py-2.5 rounded-full font-bold text-base hover:bg-[#6d1616] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[180px] disabled:opacity-70"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-px bg-gray-400/50 flex-1 max-w-[80px]"></div>
            <span className="text-gray-600 text-xs">Or</span>
            <div className="h-px bg-gray-400/50 flex-1 max-w-[80px]"></div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 bg-white/90 px-6 py-2.5 rounded-full border border-gray-300/80 hover:border-[#D66F6F] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto min-w-[220px]"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8055 10.2292C19.8055 9.55156 19.7501 8.86719 19.6323 8.19531H10.2002V12.0492H15.6014C15.3773 13.2911 14.6571 14.3898 13.6114 15.0875V17.5867H16.8251C18.7179 15.8449 19.8055 13.2722 19.8055 10.2292Z" fill="#4285F4" />
                <path d="M10.2002 20.0008C12.9527 20.0008 15.2726 19.1053 16.8321 17.5867L13.6184 15.0875C12.7367 15.6972 11.5948 16.0428 10.2072 16.0428C7.54343 16.0428 5.28174 14.2803 4.50343 11.9167H1.18555V14.4922C2.78174 17.6594 6.31424 20.0008 10.2002 20.0008Z" fill="#34A853" />
                <path d="M4.49652 11.9167C4.07652 10.6747 4.07652 9.33281 4.49652 8.09082V5.51531H1.18555C-0.204102 8.25531 -0.204102 11.7522 1.18555 14.4922L4.49652 11.9167Z" fill="#FBBC04" />
                <path d="M10.2002 3.95781C11.6671 3.93594 13.0825 4.47344 14.1421 5.46875L17.0086 2.60219C15.1857 0.904687 12.7367 -0.0210937 10.2002 0.000781252C6.31424 0.000781252 2.78174 2.34219 1.18555 5.51531L4.49652 8.09082C5.26793 5.72031 7.53652 3.95781 10.2002 3.95781Z" fill="#EA4335" />
              </svg>
              <span className="text-gray-600 font-medium text-xs sm:text-sm">Sign In with Google</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignIn;
