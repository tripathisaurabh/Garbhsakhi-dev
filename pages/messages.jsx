import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';
import AddPatientModal from '../components/AddPatientModal';

const Messages = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [selectedChatId, setSelectedChatId] = useState(1);
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [messageInput, setMessageInput] = useState('');
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

    // Sample chat data
    const chats = [
        {
            id: 1,
            name: 'John Doe',
            lastMessage: 'Let\'s schedule it for next month.',
            time: '3:05 PM',
            unread: 0,
            online: true,
            messages: [
                { id: 1, sender: 'John Doe', text: 'Hey, there!', time: '3:00 PM', isUser: false },
                { id: 2, sender: 'You', text: 'Hello, John!', time: '3:00 PM', isUser: true },
                { id: 3, sender: 'John Doe', text: 'How are you doing today?', time: '3:01 PM', isUser: false },
                { id: 4, sender: 'You', text: 'I am doing well, thanks for asking!', time: '3:02 PM', isUser: true },
                { id: 5, sender: 'You', text: 'I wanted to discuss the test results.', time: '3:02 PM', isUser: true },
                { id: 6, sender: 'John Doe', text: 'Sure, I have them right here.', time: '3:03 PM', isUser: false },
                { id: 7, sender: 'John Doe', text: 'Everything looks normal, no need to worry.', time: '3:03 PM', isUser: false },
                { id: 8, sender: 'You', text: 'That is a relief to hear.', time: '3:04 PM', isUser: true },
                { id: 9, sender: 'You', text: 'When should I come in for the next checkup?', time: '3:04 PM', isUser: true },
                { id: 10, sender: 'John Doe', text: 'Let\'s schedule it for next month.', time: '3:05 PM', isUser: false }
            ]
        },
        {
            id: 2,
            name: 'Anthony',
            lastMessage: 'Can you please share the report?',
            time: '12:00 PM',
            unread: 2,
            online: false,
            messages: [
                { id: 1, sender: 'Anthony', text: 'Hi doctor, I have a question.', time: '11:55 AM', isUser: false },
                { id: 2, sender: 'Anthony', text: 'Can you please share the report?', time: '12:00 PM', isUser: false }
            ]
        },
        {
            id: 3,
            name: 'Catherine',
            lastMessage: 'I will be there in 10 mins.',
            time: '9:30 AM',
            unread: 0,
            online: true,
            messages: [
                { id: 1, sender: 'You', text: 'Are you coming for the appointment?', time: '9:25 AM', isUser: true },
                { id: 2, sender: 'Catherine', text: 'Yes, I will be there in 10 mins.', time: '9:30 AM', isUser: false }
            ]
        },
        {
            id: 4,
            name: 'Sarah Wilson',
            lastMessage: 'Thanks for the update.',
            time: 'Yesterday',
            unread: 0,
            online: false,
            messages: []
        },
        {
            id: 5,
            name: 'Michael Brown',
            lastMessage: 'Can we reschedule?',
            time: 'Yesterday',
            unread: 1,
            online: true,
            messages: []
        },
        {
            id: 6,
            name: 'Emily Davis',
            lastMessage: 'I have a question about the prescription.',
            time: '2 days ago',
            unread: 0,
            online: false,
            messages: []
        },
        {
            id: 7,
            name: 'Robert Johnson',
            lastMessage: 'See you next week.',
            time: '2 days ago',
            unread: 0,
            online: true,
            messages: []
        },
        {
            id: 8,
            name: 'Jessica Taylor',
            lastMessage: 'The pain has subsided.',
            time: '3 days ago',
            unread: 0,
            online: false,
            messages: []
        },
        {
            id: 9,
            name: 'David Anderson',
            lastMessage: 'Appointment confirmed.',
            time: '3 days ago',
            unread: 0,
            online: false,
            messages: []
        },
        {
            id: 10,
            name: 'Jennifer Thomas',
            lastMessage: 'Please call me back.',
            time: '4 days ago',
            unread: 3,
            online: true,
            messages: []
        }
    ];

    const selectedChat = chats.find(c => c.id === selectedChatId);

    return (
        <div className="min-h-screen bg-[#F5F7FA] h-screen overflow-hidden">
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
                            <Link href="/docdashboard">
                                <span className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                                    Dashboard
                                </span>
                            </Link>
                            <Link href="/patientPreview">
                                <span className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                                    Patients
                                </span>
                            </Link>
                            <span className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                                Appointments
                            </span>
                            <Link href="/messages">
                                <span className="text-blue-600 font-semibold cursor-pointer border-b-2 border-blue-600 pb-1">
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
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4">
                <div className="grid grid-cols-12 gap-4 h-[calc(100vh-110px)]">
                    {/* Left Sidebar - Chats List */}
                    <div className="col-span-4 p-4 flex flex-col border-r border-gray-200 relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] h-full min-h-0">
                        {/* Chats Header */}
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Chats</h2>

                        {/* Tabs */}
                        <div className="flex gap-2 mb-3">
                            {['All', 'Unread', 'Priority'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${activeTab === tab
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative mb-3">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 rounded-[2rem] border border-gray-200 bg-white focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-100 transition-all text-sm text-gray-700"
                            />
                        </div>

                        {/* Chat List */}
                        <div className="flex-1 overflow-y-auto space-y-1.5 custom-scrollbar">
                            {chats.map((chat) => (
                                <button
                                    key={chat.id}
                                    onClick={() => setSelectedChatId(chat.id)}
                                    className={`w-full flex items-center gap-2.5 p-3 rounded-[1.5rem] transition-all ${selectedChatId === chat.id
                                        ? 'bg-blue-50 border border-blue-200'
                                        : 'bg-white hover:bg-gray-50 border border-gray-200'
                                        }`}
                                >
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 font-semibold text-sm">
                                                {chat.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        {chat.online && (
                                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-sm text-gray-800">{chat.name}</h3>
                                            {chat.unread > 0 && (
                                                <span className="bg-blue-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                                    {chat.unread}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Chat Window */}
                    <div className="col-span-8 flex flex-col relative h-full overflow-hidden">
                        {selectedChat ? (
                            <>
                                {/* Chat Header */}
                                <div className="px-4 py-3 border-b border-gray-200 bg-white">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 font-semibold text-sm">
                                                {selectedChat.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-gray-800">{selectedChat.name}</h3>
                                            <p className="text-xs text-gray-500">
                                                {selectedChat.online ? 'Online Recently' : 'Offline'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 p-4 overflow-y-auto pb-24 custom-scrollbar">
                                    <div className="space-y-3">
                                        {selectedChat.messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className="flex items-start gap-2 max-w-[70%]">
                                                    {!message.isUser && (
                                                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-blue-600 font-semibold text-xs">
                                                                {message.sender.split(' ').map(n => n[0]).join('')}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div
                                                            className={`px-3 py-2 rounded-[1.5rem] ${message.isUser
                                                                ? 'bg-white border border-gray-200 shadow-sm'
                                                                : 'bg-blue-50 border border-blue-100'
                                                                }`}
                                                        >
                                                            {!message.isUser && (
                                                                <p className="font-semibold text-xs text-gray-800 mb-0.5">
                                                                    {message.sender}
                                                                </p>
                                                            )}
                                                            {message.isUser && (
                                                                <p className="font-semibold text-xs text-gray-800 mb-0.5">
                                                                    You
                                                                </p>
                                                            )}
                                                            <p className="text-sm text-gray-700">{message.text}</p>
                                                        </div>
                                                        <p className="text-xs text-gray-400 mt-0.5 px-2">{message.time}</p>
                                                    </div>
                                                    {message.isUser && (
                                                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-gray-600 font-semibold text-xs">Y</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="absolute bottom-4 left-4 right-4 z-10">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder="Type a message...."
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                            className="flex-1 px-4 py-3 rounded-[2rem] border border-gray-200 bg-white/70 backdrop-blur-md shadow-lg focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-100 transition-all text-sm text-gray-700"
                                        />
                                        <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex items-center justify-center text-gray-400">
                                <p className="text-base">Select a chat to start messaging</p>
                            </div>
                        )}
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

export default Messages;
