import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AddDoc() {
    const [status, setStatus] = useState(true);

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 font-sans text-slate-800">
            <Head>
                <title>Garbhsakhi - Add Doctor</title>
            </Head>

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
                {/* Logo Section */}
                <div className="h-16 flex items-center px-6 border-b border-slate-200">
                    <Image src="/logo.png" alt="Garbhsakhi Logo" width={150} height={40} className="object-contain" />
                </div>

                <nav className="flex flex-col gap-4 p-6 mt-4">
                    <Link href="/home">
                        <button className="w-full text-left px-6 py-3 rounded-full bg-blue-50 text-slate-600 font-medium hover:bg-blue-100 transition">
                            Home
                        </button>
                    </Link>
                    <button className="w-full text-left px-6 py-3 rounded-full border border-blue-200 text-blue-600 bg-white shadow-sm font-medium">
                        Add Doctor
                    </button>
                    <Link href="/patientsOverview">
                        <button className="w-full text-left px-6 py-3 rounded-full bg-blue-50 text-slate-600 font-medium hover:bg-blue-100 transition">
                            Patient Overview
                        </button>
                    </Link>
                    <Link href="/botConfig">
                        <button className="w-full text-left px-6 py-3 rounded-full bg-blue-50 text-slate-600 font-medium hover:bg-blue-100 transition">
                            Bot Configuration
                        </button>
                    </Link>
                    <Link href="/subscriptions">
                        <button className="w-full text-left px-6 py-3 rounded-full bg-blue-50 text-slate-600 font-medium hover:bg-blue-100 transition">
                            Subscriptions
                        </button>
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-64 flex flex-col">
                {/* Top Navbar Header */}
                <header className="h-16 bg-white border-b border-slate-200 px-8 flex justify-between items-center sticky top-0 z-10">
                    <div className="flex items-center">
                        <div className="h-6 w-px bg-slate-300 mx-4" />
                        <h1 className="text-xl text-slate-600 font-normal">Admin Panel</h1>
                    </div>
                    <button className="px-6 py-2 bg-slate-100 text-slate-700 rounded-md font-medium hover:bg-slate-200 transition">
                        Logout
                    </button>
                </header>

                <main className="p-8">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
                        <h2 className="text-3xl font-bold text-black mb-8">Add Doctor</h2>

                        <div className="grid grid-cols-3 gap-8 mb-6">
                            <input
                                type="text"
                                placeholder="Doctor Name"
                                className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-3 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            <input
                                type="text"
                                placeholder="Phone No."
                                className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-3 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            <input
                                type="text"
                                placeholder="Clinic/Hospital Name"
                                className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-3 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-8 mb-8">
                            <input
                                type="text"
                                placeholder="Specialization"
                                className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-3 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            <input
                                type="text"
                                placeholder="Patients"
                                className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-3 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            <input
                                type="text"
                                placeholder="Subscription"
                                className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-3 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div className="flex justify-end items-center gap-6 mt-8">
                            <div className="flex items-center gap-3">
                                {/* Toggle Switch */}
                                <button
                                    onClick={() => setStatus(!status)}
                                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${status ? 'bg-lime-500' : 'bg-slate-300'}`}
                                >
                                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${status ? 'translate-x-6' : 'translate-x-0'}`} />
                                </button>
                                <span className="text-xl font-medium text-black">Status</span>
                            </div>

                            <button className="bg-blue-100/80 hover:bg-blue-200 text-slate-800 text-lg px-8 py-2 rounded-xl border border-blue-200 transition">
                                Save
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
