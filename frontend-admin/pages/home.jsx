import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Simple Icons Components (Inline to avoid dependencies)
const ArrowRightIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export default function Home() {
    const stats = [
        { title: 'Doctors', value: 25 },
        { title: 'Patients', value: 110 },
        { title: 'Active Patients', value: 100 },
        { title: 'Messages', value: 34 },
    ];

    const messages = [
        { sender: 'Simran', content: '“I feel dizzy since morning...”', count: 2 },
        { sender: 'Riya', content: '“Uploaded my latest report.”', count: 1 },
    ];

    const activities = [
        { date: '25 Oct', text: 'Added 2 patients under doctor “dr_username”' },
        { date: '15 Oct', text: 'Added doctor “dr_username”' },
    ];

    const doctors = [
        { name: 'Dr. Ananya Sharma', handle: '@dr_ananyaS', role: 'OB-GYN', hospital: 'Apollo Hospitals', sub: 'Premium Subscription', status: 'Active', patients: 6 },
        { name: 'Dr. Ananya Sharma', handle: '@dr_ananyaS', role: 'OB-GYN', hospital: 'Apollo Hospitals', sub: 'Premium Subscription', status: 'Active', patients: 6 },
        { name: 'Dr. Ananya Sharma', handle: '@dr_ananyaS', role: 'OB-GYN', hospital: 'Apollo Hospitals', sub: 'Premium Subscription', status: 'Active', patients: 6 },
        { name: 'Dr. Ananya Sharma', handle: '@dr_ananyaS', role: 'OB-GYN', hospital: 'Apollo Hospitals', sub: 'Premium Subscription', status: 'Active', patients: 6 },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
            <Head>
                <title>Garbhsakhi - Admin Panel</title>
            </Head>

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
                {/* Logo Section */}
                <div className="h-16 flex items-center px-6 border-b border-slate-200"> {/* Match header border for continuous look */}
                    <Image src="/logo.png" alt="Garbhsakhi Logo" width={150} height={40} className="object-contain" />
                </div>

                <nav className="flex flex-col gap-4 p-6 mt-4">
                    <Link href="/home">
                        <button className="w-full text-left px-6 py-3 rounded-full border border-blue-200 text-blue-600 bg-white shadow-sm font-medium">
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
                        <div className="h-6 w-px bg-slate-300 mx-4" /> {/* Vertical Separator */}
                        <h1 className="text-xl text-slate-600 font-normal">Admin Panel</h1>
                    </div>
                    <button className="px-6 py-2 bg-slate-100 text-slate-700 rounded-md font-medium hover:bg-slate-200 transition">
                        Logout
                    </button>
                </header>

                <main className="p-8">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-6">Dashboard</h2>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-6 mb-10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-blue-50/50 border border-blue-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                <span className="text-slate-600 text-lg mb-2">{stat.title}</span>
                                <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Middle Section: Messages & Activities */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        {/* Messages */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Messages</h3>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 min-h-[300px]">
                                <div className="space-y-4">
                                    {messages.map((msg, idx) => (
                                        <div key={idx} className="bg-blue-50 p-4 rounded-xl flex justify-between items-center transition hover:bg-blue-100/50">
                                            <div>
                                                <div className="font-bold text-slate-800 text-sm">{msg.sender}</div>
                                                <div className="text-slate-500 text-xs italic">{msg.content}</div>
                                            </div>
                                            <div className="flex items-center justify-center w-6 h-6 bg-green-200/60 text-green-700 text-xs font-bold rounded-full">
                                                {msg.count}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activities</h3>
                            <div className="bg-blue-50/30 border border-blue-100 rounded-xl overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-blue-100/50 text-slate-700">
                                        <tr>
                                            <th className="px-4 py-3 font-semibold">Date</th>
                                            <th className="px-4 py-3 font-semibold">Activity</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-blue-100">
                                        {activities.map((activity, idx) => (
                                            <tr key={idx} className="bg-white">
                                                <td className="px-4 py-3 text-slate-600">{activity.date}</td>
                                                <td className="px-4 py-3 text-slate-600">{activity.text}</td>
                                            </tr>
                                        ))}
                                        {/* Empty rows for visual matching */}
                                        {[1, 2, 3].map((_, i) => (
                                            <tr key={`empty - ${i} `} className="bg-white">
                                                <td className="px-4 py-4">&nbsp;</td>
                                                <td className="px-4 py-4">&nbsp;</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Doctor Details */}
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Doctor Details</h3>
                        <div className="space-y-4">
                            {doctors.map((doc, idx) => (
                                <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4 min-w-[200px]">
                                        <div className="h-10 w-10 rounded-full bg-slate-200" /> {/* Avatar Placeholder */}
                                        <div>
                                            <div className="font-bold text-slate-900">{doc.name}</div>
                                            <div className="text-slate-500 text-xs">{doc.handle}</div>
                                        </div>
                                    </div>

                                    <div className="border-l-2 border-slate-300 pl-4 h-8 flex flex-col justify-center min-w-[120px]">
                                        <div className="font-bold text-slate-800 text-sm">{doc.role}</div>
                                        <div className="text-slate-500 text-xs">{doc.hospital}</div>
                                    </div>

                                    <div className="border-l-2 border-slate-300 pl-4 h-8 flex items-center min-w-[160px]">
                                        <span className="text-slate-800 text-sm font-medium">{doc.sub}</span>
                                    </div>

                                    <div className="border-l-2 border-slate-300 pl-4 h-8 flex items-center min-w-[100px]">
                                        <span className="h-2 w-2 rounded-full bg-lime-500 mr-2"></span>
                                        <span className="text-slate-700 text-sm">{doc.status}</span>
                                    </div>

                                    <div className="bg-blue-100/50 px-3 py-1 rounded-md text-slate-700 text-sm font-medium">
                                        <span className="text-green-700 font-bold mr-1">{doc.patients}</span> Patients
                                    </div>

                                    <button className="p-2 hover:bg-slate-50 rounded-full transition">
                                        <ArrowRightIcon className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="text-right mt-4">
                            <button className="text-slate-800 font-medium hover:underline text-sm">View all doctors</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
