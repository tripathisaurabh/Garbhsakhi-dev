'use client'

import React from 'react'
import Image from 'next/image'

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/your_number_here" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-500 ease-out hover:pr-5 overflow-hidden h-[48px] w-[48px] hover:w-auto hover:shadow-xl"
        >
            <div className="relative w-6 h-6 flex-shrink-0 mx-3">
                <Image
                    src="/icons/whatsapp-icon.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                />
            </div>
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-out font-bold text-sm opacity-0 group-hover:opacity-100">
                Chat with us
            </span>
        </a>
    )
}

export default WhatsAppButton
