'use client'

import React, { useState } from 'react'

export default function DemoModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    email: '',
    phone: '',
    notes: '',
  })

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/public/book-demo`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            doctor_name: formData.doctorName,
            clinic_name: formData.clinicName,
            email: formData.email,
            phone: formData.phone,
            preferred_date: selectedDate,
            preferred_time: selectedTime,
            notes: formData.notes,
          }),
        }
      )

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')

      setShowSuccess(true)
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again.')
    }
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-b from-[#FFF0F0] to-[#E8D4F8] p-5 md:p-6 max-w-xl w-full relative"
        style={{ borderRadius: '30px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          ×
        </button>

        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-1">
            Schedule a Live Demo
          </h2>
          <p className="text-xs text-gray-700">
            Book a 1:1 walkthrough of GarbhSakhi.
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Doctor Name"
            required
            value={formData.doctorName}
            onChange={(e) =>
              setFormData({ ...formData, doctorName: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/60 border-2 rounded-3xl"
          />

          <input
            type="text"
            placeholder="Clinic/Hospital Name"
            required
            value={formData.clinicName}
            onChange={(e) =>
              setFormData({ ...formData, clinicName: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/60 border-2 rounded-3xl"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/60 border-2 rounded-3xl"
          />

          <input
            type="tel"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/60 border-2 rounded-3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="date"
              required
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 bg-white/60 border-2 rounded-3xl"
            />

            <input
              type="time"
              required
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-2 bg-white/60 border-2 rounded-3xl"
            />
          </div>

          <textarea
            placeholder="Additional Notes..."
            rows="2"
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/60 border-2 rounded-3xl resize-none"
          />

          <div className="flex justify-center pt-1">
            <button
              type="submit"
              className="bg-[#D66F6F] text-white px-10 py-2.5 rounded-3xl font-bold"
            >
              Confirm Demo
            </button>
          </div>
        </form>
      </div>

      {showSuccess && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60]"
          onClick={handleCloseSuccess}
        >
          <div className="bg-white p-8 rounded-3xl text-center max-w-sm">
            <h3 className="text-2xl font-bold">Demo Confirmed!</h3>
            <p className="text-sm text-gray-600">
              We'll contact you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}


//             <style jsx>{`
//                 @keyframes slideUp {
//                     from {
//                         transform: translateY(20px);
//                         opacity: 0;
//                     }
//                     to {
//                         transform: translateY(0);
//                         opacity: 1;
//                     }
//                 }
//             `}</style>
//         </div>
//     )
// }