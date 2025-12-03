'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function MotionWrapper({
    children,
    className = '',
    delay = 0,
    direction = 'up', // 'up', 'down', 'left', 'right', 'none'
    duration = 0.5,
    viewport = { once: true, margin: '-50px' }
}) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: 'easeOut',
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}
