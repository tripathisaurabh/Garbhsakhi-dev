"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { login } from "@/services/auth";

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const data = await login(
      formData.identifier,
      formData.password
    );

    // ✅ SAVE BOTH
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("doctor", JSON.stringify(data.doctor));

    // ✅ THEN REDIRECT
    router.replace("/dashboard");
  } catch (err) {
    setError(err.message || "Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE3E3] to-[#D4E7FF] px-4">

      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <Image src="/icons/logo.png" alt="Logo" width={200} height={60} />
      </div>

      <div className="w-full max-w-md mt-32 bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/50">
        <h1 className="text-2xl font-bold text-center text-[#8B1D1D] mb-2">
          Doctor Sign In
        </h1>

        <p className="text-center text-sm text-gray-700 mb-6">
          New doctor?{" "}
          <Link href="/signup" className="text-[#D66F6F] font-semibold">
            Create an account 
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="identifier"
            placeholder="Email or Username"
            value={formData.identifier}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-xl border"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-xl border"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B1D1D] text-white py-2 rounded-full font-semibold"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
