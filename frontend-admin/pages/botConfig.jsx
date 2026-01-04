import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BotConfig() {
    const [botEnabled, setBotEnabled] = useState(true);

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 font-sans text-slate-800">
            <Head>
                <title>Garbhsakhi - Bot Configuration</title>
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
                    <Link href="/addDoc">
                        <button className="w-full text-left px-6 py-3 rounded-full bg-blue-50 text-slate-600 font-medium hover:bg-blue-100 transition">
                            Add Doctor
                        </button>
                    </Link>
                    <Link href="/patientsOverview">
                        <button className="w-full text-left px-6 py-3 rounded-full bg-blue-50 text-slate-600 font-medium hover:bg-blue-100 transition">
                            Patient Overview
                        </button>
                    </Link>
                    <button className="w-full text-left px-6 py-3 rounded-full border border-blue-200 text-blue-600 bg-white shadow-sm font-medium">
                        Bot Configuration
                    </button>
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

                    <div className="bg-white rounded-3xl shadow-sm border border-blue-200 p-8">

                        <h2 className="text-3xl font-bold text-black mb-8">Bot Configuration</h2>

                        {/* Toggle Switch */}
                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={() => setBotEnabled(!botEnabled)}
                                className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 ${botEnabled ? 'bg-lime-500' : 'bg-slate-300'}`}
                            >
                                <div className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${botEnabled ? 'translate-x-7' : 'translate-x-0'}`} />
                            </button>
                            <span className="text-xl font-medium text-black">Enable Bot</span>
                        </div>

                        {/* Message Boxes */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="flex flex-col h-48">
                                <textarea
                                    className="flex-1 bg-blue-50/50 border border-blue-200 rounded-xl p-4 text-slate-700 placeholder:text-slate-500 text-lg font-normal focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                                    placeholder="Welcome Message:"
                                ></textarea>
                            </div>
                            <div className="flex flex-col h-48">
                                <textarea
                                    className="flex-1 bg-blue-50/50 border border-blue-200 rounded-xl p-4 text-slate-700 placeholder:text-slate-500 text-lg font-normal focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                                    placeholder="Daily Check-in Message:"
                                ></textarea>
                            </div>
                            <div className="flex flex-col h-48">
                                <textarea
                                    className="flex-1 bg-blue-50/50 border border-blue-200 rounded-xl p-4 text-slate-700 placeholder:text-slate-500 text-lg font-normal focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                                    placeholder="Weekly Summary Message:"
                                ></textarea>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end">
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
