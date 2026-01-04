import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Subscriptions() {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 font-sans text-slate-800">
            <Head>
                <title>Garbhsakhi - Subscription Management</title>
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
                    <Link href="/botConfig">
                        <button className="w-full text-left px-6 py-3 rounded-full bg-blue-50 text-slate-600 font-medium hover:bg-blue-100 transition">
                            Bot Configuration
                        </button>
                    </Link>
                    <button className="w-full text-left px-6 py-3 rounded-full border border-blue-200 text-blue-600 bg-white shadow-sm font-medium">
                        Subscriptions
                    </button>
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

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 h-full max-h-[calc(100vh-8rem)]">
                        <h2 className="text-3xl font-bold text-black mb-8">Subscription Management</h2>

                        {/* Plan Cards */}
                        <div className="grid grid-cols-3 gap-8 mb-10">
                            <div className="bg-white border border-blue-200 rounded-xl p-8 flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-50 transition">
                                <span className="text-4xl font-normal text-black">Basic</span>
                            </div>
                            <div className="bg-white border border-blue-200 rounded-xl p-8 flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-50 transition">
                                <span className="text-4xl font-normal text-black">Pro</span>
                            </div>
                            <div className="bg-white border border-blue-200 rounded-xl p-8 flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-50 transition">
                                <span className="text-4xl font-normal text-black">Hospital</span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-blue-50/30 border border-blue-200 rounded-xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-blue-100/50 text-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Doctor</th>
                                        <th className="px-6 py-4 font-bold">Plan</th>
                                        <th className="px-6 py-4 font-bold">Expiry</th>
                                        <th className="px-6 py-4 font-bold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-blue-100">
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 text-slate-700 font-medium">Ananya Sharma</td>
                                        <td className="px-6 py-4 text-slate-700">Basic</td>
                                        <td className="px-6 py-4 text-slate-700">20/12/2026</td>
                                        <td className="px-6 py-4">
                                            <button className="px-4 py-1 rounded-full border border-slate-400 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Empty rows for layout */}
                                    {[1, 2].map(i => (
                                        <tr key={i} className="bg-white h-[57px]">
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
