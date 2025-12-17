import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AddPatientModal from '../../components/patients/AddPatientModal';

const DocDashboard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/signin';
    return;
  }

  const loadDashboard = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/doctor/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error('Failed to load dashboard');
      }

      const data = await res.json();
      setDashboardData(data);
    } catch (err) {
      console.error(err);
      window.location.href = '/signin';
    } finally {
      setLoading(false);
    }
  };

  loadDashboard();
}, []);


  const handleLogout = () => {
    setIsProfileOpen(false);
    setShowLogoutConfirmation(true);

    setTimeout(() => {
      localStorage.removeItem('token');
      window.location.href = '/signin';
    }, 2000);
  };

  if (loading) {
    return <div className="p-8">Loading dashboard...</div>;
  }

  if (!dashboardData) {
    return <div className="p-8">Failed to load dashboard</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Head>
        <title>Doctor Dashboard | Garbhsakhi</title>
      </Head>

      <AddPatientModal
        isOpen={isAddPatientOpen}
        onClose={() => setIsAddPatientOpen(false)}
      />


      {/* Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
        <Image src="/icons/logo.png" alt="Garbhsakhi Logo" width={150} height={40} />

        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <span className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
            Dashboard
          </span>
          <Link href="/patients" className="hover:text-blue-600">Patients</Link>
          <Link href="/messages" className="hover:text-blue-600">Messages</Link>
        </nav>

        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200"
          >
            <Image src="/icons/doctor-avatar.png" alt="Profile" width={40} height={40} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-blue-50/80 rounded-3xl shadow-xl p-3 z-50">
              <Link href="/profile" className="block px-4 py-3 font-bold">Profile</Link>
              <button
                onClick={() => {
                  setIsAddPatientOpen(true);
                  setIsProfileOpen(false);
                }}
                className="block px-4 py-3 font-bold"
              >
                Add Patient
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-3 font-bold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 pb-[25px] space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Total Patients" value={dashboardData.stats.totalPatients} />
          <StatCard title="High-Risk Patients" value={dashboardData.stats.highRisk} />
          <StatCard title="Appointments (Weeks)" value={dashboardData.stats.appointments} />
          <StatCard title="Unread Messages" value={dashboardData.stats.unreadMessages} />
        </div>

        {/* Patients */}
        <section className="bg-white/50 rounded-xl p-1">
          <h2 className="text-lg font-bold mb-4 px-2">Patients Overview</h2>
          <div className="overflow-x-auto bg-blue-50/50 rounded-xl border">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-100/50">
                  <th className="p-3">Name</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Pregnancy Week</th>
                  <th className="p-3">Risk Level</th>
                  <th className="p-3">Last Visit</th>
                  <th className="p-3">Next Visit</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.patients.map(p => (
                  <PatientRow
                    key={p.id}
                    name={p.name}
                    age={p.age}
                    week={`${p.pregnancy_week} Weeks`}
                    risk={p.risk === 'high' ? 'High Risk' : 'Normal'}
                    riskColor={p.risk === 'high' ? 'text-red-500' : 'text-green-500'}
                    lastVisit={p.last_visit}
                    nextVisit={p.next_visit}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Alerts & Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="text-lg font-bold mb-4">Critical Alerts</h2>
            <div className="space-y-3 bg-white p-4 rounded-xl">
              {dashboardData.alerts.map(a => (
                <AlertItem
                  key={a.id}
                  name={a.patient_name}
                  message={a.message}
                  time={a.created_at}
                  bg={a.severity === 'high' ? 'bg-red-50' : 'bg-yellow-50'}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 text-red-500">High-Alert Spotlight</h2>
            <div className="space-y-4 bg-white p-4 rounded-xl">
              {dashboardData.alerts
                .filter(a => a.severity === 'high')
                .map(a => (
                  <SpotlightCard
                    key={a.id}
                    name={a.patient_name}
                    week={`${a.pregnancy_week} weeks`}
                    condition={a.condition}
                    alert={a.message}
                    nextVisit={a.next_visit}
                  />
                ))}
            </div>
          </section>
        </div>

        {/* Messages & Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="text-lg font-bold mb-4">Messages</h2>
            <div className="space-y-3 bg-white p-4 rounded-xl">
              {dashboardData.messages.map(m => (
                <MessageItem
                  key={m.id}
                  name={m.patient_name}
                  text={`"${m.text}"`}
                  count={m.unread_count}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Upcoming Appointments</h2>
            <table className="w-full bg-white rounded-xl">
              <tbody>
                {dashboardData.appointments.map(a => (
                  <AppointmentRow
                    key={a.id}
                    name={a.patient_name}
                    date={a.date}
                    time={a.time}
                    type={a.type}
                    status={a.status}
                    statusColor={a.status === 'Scheduled' ? 'text-green-500' : 'text-red-500'}
                  />
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
};

/* ---------- Sub Components (UNCHANGED) ---------- */

const StatCard = ({ title, value }) => (
  <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6 text-center">
    <h3 className="text-slate-600 mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

const PatientRow = ({ name, age, week, risk, riskColor, lastVisit, nextVisit }) => (
  <tr>
    <td className="p-3">{name}</td>
    <td className="p-3">{age}</td>
    <td className="p-3">{week}</td>
    <td className={`p-3 ${riskColor}`}>{risk}</td>
    <td className="p-3">{lastVisit}</td>
    <td className="p-3">{nextVisit}</td>
    <td className="p-3"><button>View</button></td>
  </tr>
);

const AlertItem = ({ name, message, time, bg }) => (
  <div className={`${bg} p-4 rounded-lg flex justify-between`}>
    <span><b>{name}</b> • {message}</span>
    <span>{time}</span>
  </div>
);

const SpotlightCard = ({ name, week, condition, alert, nextVisit }) => (
  <div className="border border-red-200 p-4 rounded-lg">
    <p className="text-red-500 font-medium">{name} – {week} {condition}</p>
    <p>{alert} • Next visit: {nextVisit}</p>
  </div>
);

const MessageItem = ({ name, text, count }) => (
  <div className="flex justify-between bg-blue-50/50 p-4 rounded-lg">
    <div>
      <p className="font-bold">{name}</p>
      <p className="text-xs italic">{text}</p>
    </div>
    <div className="w-6 h-6 bg-green-100 rounded-full text-center">{count}</div>
  </div>
);

const AppointmentRow = ({ name, date, time, type, status, statusColor }) => (
  <tr>
    <td className="p-3">{name}</td>
    <td className="p-3">{date}</td>
    <td className="p-3">{time}</td>
    <td className="p-3">{type}</td>
    <td className={`p-3 ${statusColor}`}>{status}</td>
  </tr>
);

export default DocDashboard;
