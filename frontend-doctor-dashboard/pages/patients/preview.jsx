import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import '../app/globals.css';
import AddPatientModal from '../../components/patients/AddPatientModal';


const PatientPreview = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
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

    // Sample patient data
    const patients = [
        {
            id: 1,
            name: 'Riya Singh',
            age: 26,
            pregnancyWeek: '24 Weeks',
            riskLevel: 'Normal',
            lastVisit: '20 Nov',
            nextVisit: '05 Oct'
        },
        {
            id: 2,
            name: 'Riddhi Yadav',
            age: 27,
            pregnancyWeek: '32 Weeks',
            riskLevel: 'High Risk',
            lastVisit: '18 Nov',
            nextVisit: '15 Oct'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F5F7FA]">
            <AddPatientModal isOpen={isAddPatientOpen} onClose={() => setIsAddPatientOpen(false)} />

            {/* Navbar */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-[70px]">
                        {/* Logo */}
                        <Link href="/">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <Image
                                    src="/icons/logo.png"
                                    alt="Garbhsakhi Logo"
                                    width={150}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/dashboard
">
                                <span className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                                    Dashboard
                                </span>
                            </Link>
                            <Link href="/patientPreview">
                                <span className="text-blue-600 font-semibold cursor-pointer border-b-2 border-blue-600 pb-1">
                                    Patients
                                </span>
                            </Link>
                            <span className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                                Appointments
                            </span>
                            <Link href="/messages">
                                <span className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                                    Messages
                                </span>
                            </Link>
                        </div>

                        {/* Profile Icon */}
                        <div className="flex items-center gap-4 relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-blue-300 transition-all cursor-pointer focus:outline-none"
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
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8">
                {/* Search Bar and Filter */}
                <div className="flex items-center justify-center gap-4 mb-8 relative">
                    {/* Search Input */}
                    <div className="w-full max-w-[600px] relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-[17px] border border-blue-200 bg-white focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700"
                        />
                    </div>

                    {/* Filter Button */}
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="w-[60px] h-12 rounded-[17px] bg-blue-100 border border-blue-200 flex items-center justify-center hover:bg-blue-200 hover:ring-2 hover:ring-blue-300 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </button>

                        {/* Filter Dropdown */}
                        {isFilterOpen && (
                            <div className="absolute top-full right-0 mt-3 bg-white/60 backdrop-blur-xl z-50 shadow-2xl rounded-[2rem] border-2 border-blue-200 animate-in fade-in slide-in-from-top-3 duration-300 w-64">
                                <div className="flex flex-col items-center gap-2 py-4 px-6">
                                    <button
                                        className="w-[85%] flex items-center justify-between bg-white/50 backdrop-blur-md py-3 px-5 rounded-3xl text-gray-800 hover:bg-white/70 hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-top-2"
                                        style={{ animationDelay: '50ms' }}
                                    >
                                        <span>Risk Level</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        className="w-[85%] flex items-center justify-between bg-white/50 backdrop-blur-md py-3 px-5 rounded-3xl text-gray-800 hover:bg-white/70 hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-top-2"
                                        style={{ animationDelay: '100ms' }}
                                    >
                                        <span>Next Visit</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        className="w-[85%] flex items-center justify-between bg-white/50 backdrop-blur-md py-3 px-5 rounded-3xl text-gray-800 hover:bg-white/70 hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-top-2"
                                        style={{ animationDelay: '150ms' }}
                                    >
                                        <span>Last Week</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        className="w-[85%] flex items-center justify-between bg-white/50 backdrop-blur-md py-3 px-5 rounded-3xl text-gray-800 hover:bg-white/70 hover:scale-105 transition-all duration-200 font-semibold text-sm shadow-md border border-white/40 animate-in fade-in slide-in-from-top-2"
                                        style={{ animationDelay: '200ms' }}
                                    >
                                        <span>Pregnancy Week</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Patients Overview Title */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Patients Overview</h1>

                {/* Patients Table */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                    {/* Table Header */}
                    <div className="bg-[#E8EDF5] px-6 py-4">
                        <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-gray-700">
                            <div>Name</div>
                            <div>Age</div>
                            <div>Pregnancy Week</div>
                            <div>Risk Level</div>
                            <div>Last Visit</div>
                            <div>Next Visit</div>
                            <div>Action</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-100">
                        {patients.map((patient) => (
                            <div key={patient.id} className="px-6 py-4 hover:bg-blue-50/30 transition-colors">
                                <div className="grid grid-cols-7 gap-4 items-center text-sm">
                                    <div className="font-medium text-gray-800">{patient.name}</div>
                                    <div className="text-gray-600">{patient.age}</div>
                                    <div className="text-gray-600">{patient.pregnancyWeek}</div>
                                    <div>
                                        <span className={`font-medium ${patient.riskLevel === 'Normal'
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                            }`}>
                                            {patient.riskLevel}
                                        </span>
                                    </div>
                                    <div className="text-gray-600">{patient.lastVisit}</div>
                                    <div className="text-gray-600">{patient.nextVisit}</div>
                                    <div>
                                        <button className="px-5 py-1.5 rounded-full border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 transition-all text-sm font-semibold">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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

export default PatientPreview;
