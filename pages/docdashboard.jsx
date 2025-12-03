import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';
import AddPatientModal from '../components/AddPatientModal';


const DocDashboard = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

    const handleLogout = () => {
        setIsProfileOpen(false);
        setShowLogoutConfirmation(true);

        // Redirect to signin page after 2 seconds
        setTimeout(() => {
            window.location.href = '/signin';
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Head>
                <title>Doctor Dashboard | Garbhsakhi</title>
            </Head>

            <AddPatientModal isOpen={isAddPatientOpen} onClose={() => setIsAddPatientOpen(false)} />

            {/* Header */}
            <header className="bg-white px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    {/* Logo Placeholder - replicating the heart/logo from image */}
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
                    <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Dashboard</a>
                    <Link href="/patientPreview" className="hover:text-blue-600 transition-colors">Patients</Link>
                    <a href="#" className="hover:text-blue-600 transition-colors">Appointments</a>
                    <Link href="/messages" className="hover:text-blue-600 transition-colors">Messages</Link>
                </nav>

                <div className="flex items-center gap-4 relative">
                    {/* Profile Icon */}
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-blue-300 transition-all focus:outline-none"
                    >
                        <Image src="/icons/doctor-avatar.png" alt="Profile" width={40} height={40} className="w-full h-full object-cover" />
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileOpen && (
                        <div className="absolute top-full right-0 mt-3 w-64 bg-blue-50/80 backdrop-blur-sm border-2 border-blue-200/50 rounded-3xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col gap-1">
                                <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-800 hover:bg-white/50 rounded-2xl transition-colors text-left group">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-base">Profile</span>
                                </Link>

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

            <main className="max-w-7xl mx-auto px-6 pt-8 pb-[25px] space-y-8">

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <StatCard title="Total Patients" value="120" />
                    <StatCard title="High-Risk Patients" value="10" />
                    <StatCard title="Appointments (Weeks)" value="20" />
                    <StatCard title="Unread Messages" value="34" />
                </div>

                {/* Patients Overview */}
                <section className="bg-white/50 rounded-xl p-1">
                    <h2 className="text-lg font-bold mb-4 px-2">Patients Overview</h2>
                    <div className="bg-blue-50/50 rounded-xl border border-blue-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-100/50 text-slate-700 font-semibold">
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Age</th>
                                        <th className="p-3">Pregnancy Week</th>
                                        <th className="p-3">Risk Level</th>
                                        <th className="p-3">Last Visit</th>
                                        <th className="p-3">Next Visit</th>
                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-blue-200">
                                    <PatientRow
                                        name="Riya Singh"
                                        age="26"
                                        week="24 Weeks"
                                        risk="Normal"
                                        riskColor="text-green-500"
                                        lastVisit="20 Nov"
                                        nextVisit="05 Oct"
                                    />
                                    <PatientRow
                                        name="Riddhi Yadav"
                                        age="27"
                                        week="32 Weeks"
                                        risk="High Risk"
                                        riskColor="text-red-500"
                                        lastVisit="18 Nov"
                                        nextVisit="15 Oct"
                                    />
                                    {/* Empty rows for visual spacing as per design */}
                                    <tr className="h-12 bg-white"><td colSpan="7"></td></tr>
                                    <tr className="h-12 bg-white"><td colSpan="7"></td></tr>
                                    <tr className="h-12 bg-white"><td colSpan="7"></td></tr>
                                    <tr className="h-12 bg-white"><td colSpan="7"></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Critical Alerts & Spotlight */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Critical Alerts */}
                    <section>
                        <h2 className="text-lg font-bold mb-4">Critical Alerts</h2>
                        <div className="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-full">
                            <AlertItem
                                name="Ayesha"
                                message="High Blood Pressure (150/100)"
                                time="10:22 AM"
                                bg="bg-red-50"
                            />
                            <AlertItem
                                name="Riya"
                                message="Low fetal movement reported"
                                time="09:40 AM"
                                bg="bg-blue-50"
                            />
                            <AlertItem
                                name="Meera"
                                message="High Sugar (190 mg/dL)"
                                time="Yesterday"
                                bg="bg-yellow-50"
                            />
                        </div>
                    </section>

                    {/* High-Alert Spotlight */}
                    <section>
                        <h2 className="text-lg font-bold mb-4 text-red-500">High-Alert Spotlight</h2>
                        <div className="space-y-4 border border-red-200 rounded-xl p-4 bg-white h-full">
                            <SpotlightCard
                                name="Ayesha"
                                week="32 weeks"
                                condition="(Gestational Diabetes)"
                                alert="Last alert: High Sugar"
                                nextVisit="18 Nov"
                            />
                            <SpotlightCard
                                name="Neha"
                                week="30 weeks"
                                condition="(High BP)"
                                alert="Last alert: 150/100"
                                nextVisit="20 Nov"
                            />
                        </div>
                    </section>

                </div>

                {/* Messages & Upcoming Appointments */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Messages */}
                    <section className="mt-[45px]">
                        <h2 className="text-lg font-bold mb-4">Messages</h2>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-3 h-full">
                            <MessageItem
                                name="Simran"
                                text="&quot;I feel dizzy since morning...&quot;"
                                count={2}
                            />
                            <MessageItem
                                name="Riya"
                                text="&quot;Uploaded my latest report.&quot;"
                                count={1}
                            />
                        </div>
                    </section>

                    {/* Upcoming Appointments */}
                    <section className="mt-[45px]">
                        <h2 className="text-lg font-bold mb-4">Upcoming Appointments</h2>
                        <div className="bg-blue-50/50 rounded-xl border border-blue-100 overflow-hidden h-full">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-blue-100/50 text-slate-700 font-semibold">
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Date</th>
                                        <th className="p-3">Time</th>
                                        <th className="p-3">Type</th>
                                        <th className="p-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-blue-100 bg-white">
                                    <AppointmentRow
                                        name="Riya Singh"
                                        date="05 Oct"
                                        time="10:30 am"
                                        type="Routine"
                                        status="Scheduled"
                                        statusColor="text-green-500"
                                    />
                                    <AppointmentRow
                                        name="Riddhi Yadav"
                                        date="15 Oct"
                                        time="11:30 am"
                                        type="Report"
                                        status="Follow-up"
                                        statusColor="text-red-500"
                                    />
                                    <tr className="h-8 bg-white"><td colSpan="5"></td></tr>
                                    <tr className="h-8 bg-white"><td colSpan="5"></td></tr>
                                    <tr className="h-8 bg-white"><td colSpan="5"></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>

            </main>

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

// Sub-components for cleaner code

const StatCard = ({ title, value }) => (
    <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6 text-center flex flex-col items-center justify-center shadow-sm">
        <h3 className="text-slate-600 font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold text-slate-800">{value}</p>
    </div>
);

const PatientRow = ({ name, age, week, risk, riskColor, lastVisit, nextVisit }) => (
    <tr className="bg-white hover:bg-slate-50 transition-colors">
        <td className="p-3 font-medium text-slate-700">{name}</td>
        <td className="p-3 text-slate-600">{age}</td>
        <td className="p-3 text-slate-600">{week}</td>
        <td className={`p-3 font-medium ${riskColor}`}>{risk}</td>
        <td className="p-3 text-slate-600">{lastVisit}</td>
        <td className="p-3 text-slate-600">{nextVisit}</td>
        <td className="p-3">
            <button className="px-4 py-1 rounded-full border border-slate-400 text-xs font-medium text-slate-600 hover:bg-slate-100">
                View
            </button>
        </td>
    </tr>
);

const AlertItem = ({ name, message, time, bg }) => (
    <div className={`${bg} p-4 rounded-lg flex items-center justify-between text-sm`}>
        <div>
            <span className="font-semibold text-slate-800">{name}</span> • <span className="text-slate-700">{message}</span>
        </div>
        <div className="text-slate-500 text-xs">{time}</div>
    </div>
);

const SpotlightCard = ({ name, week, condition, alert, nextVisit }) => (
    <div className="bg-red-50/30 border border-red-200 rounded-lg p-4 relative">
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-start gap-3">
                <div className="text-yellow-600 bg-yellow-100 p-1 rounded">
                    {/* Warning Icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <div>
                    <p className="text-red-500 font-medium text-sm">
                        {name} – {week} <span className="text-red-400">{condition}</span>
                    </p>
                    <p className="text-red-500 text-sm mt-1">
                        {alert} • <span className="text-slate-600">Next visit: {nextVisit}</span>
                    </p>
                </div>
            </div>
            <button className="px-3 py-1 rounded border border-slate-300 text-xs font-medium text-slate-600 bg-white hover:bg-slate-50">
                View
            </button>
        </div>
    </div>
);

const MessageItem = ({ name, text, count }) => (
    <div className="bg-blue-50/50 p-4 rounded-lg flex items-center justify-between">
        <div>
            <p className="font-bold text-slate-800 text-sm">{name}</p>
            <p className="text-slate-600 text-xs italic">{text}</p>
        </div>
        <div className="bg-green-100 text-green-700 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-green-200">
            {count}
        </div>
    </div>
);

const AppointmentRow = ({ name, date, time, type, status, statusColor }) => (
    <tr className="hover:bg-slate-50 transition-colors">
        <td className="p-3 text-sm font-medium text-slate-700">{name}</td>
        <td className="p-3 text-sm text-slate-600">{date}</td>
        <td className="p-3 text-sm text-slate-600">{time}</td>
        <td className="p-3 text-sm text-slate-600">{type}</td>
        <td className={`p-3 text-sm font-medium ${statusColor}`}>{status}</td>
    </tr>
);

export default DocDashboard;
