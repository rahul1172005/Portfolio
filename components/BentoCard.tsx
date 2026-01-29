'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoCardProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}   // ✅ Reduced from 20
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={cn(
                'relative rounded-[40px] overflow-hidden bg-black/70 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_32px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_48px_rgba(0,0,0,0.9)] hover:-translate-y-0.5 text-white',
                className
            )}
        >
            {/* iOS Glass Reflection Layer */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent z-0" />

            {/* Inner edge glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10 z-0" />

            {/* Subtle grain for realism */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay z-0"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')",
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full p-4 md:p-5"> {/* ✅ Reduced from p-6 */}
                {children}
            </div>
        </motion.div>
    )
}
