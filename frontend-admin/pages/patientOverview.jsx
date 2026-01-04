import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function PatientsOverview() {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 font-sans text-slate-800">
            <Head>
                <title>Garbhsakhi - Patient Overview</title>
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
                    <button className="w-full text-left px-6 py-3 rounded-full border border-blue-200 text-blue-600 bg-white shadow-sm font-medium">
                        Patient Overview
                    </button>
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
                    {/* Search Bar */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-full max-w-xl">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-white border border-blue-200 rounded-full py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
                            />
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="w-full max-w-6xl mx-auto">
                        {/* Header Row */}
                        <div className="bg-blue-100/50 border border-blue-200 rounded-xl px-6 py-4 grid grid-cols-7 gap-4 text-sm font-bold text-slate-800 mb-6">
                            <div className="">Name</div>
                            <div className="">Age</div>
                            <div className="">Pregnancy Week</div>
                            <div className="">Risk Level</div>
                            <div className="">Last Visit</div>
                            <div className="">Next Visit</div>
                            <div className="">Action</div>
                        </div>

                        {/* Empty Rows / Placeholders */}
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="h-px bg-blue-200 w-full"></div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
