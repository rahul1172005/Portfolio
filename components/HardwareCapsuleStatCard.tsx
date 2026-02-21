'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Inline cn to avoid any issues with external imports during troubleshooting
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface HardwareCapsuleStatCardProps {
    children: React.ReactNode
    variant?: 'white' | 'black' | 'lime' | 'glass'
    className?: string
    noPadding?: boolean
    onClick?: () => void
}

const HardwareCapsuleStatCard = ({
    children,
    variant = 'white',
    className,
    noPadding = false,
    onClick
}: HardwareCapsuleStatCardProps) => {
    const variantStyles = {
        white: 'bg-white text-black border-black/5',
        black: 'bg-black text-[#d9ff00] border-white/10',
        lime: 'bg-[#d9ff00] text-black border-black/5',
        glass: 'glass text-white border-white/10'
    }

    return (
        <motion.div
            whileHover={onClick ? { scale: 0.985 } : undefined}
            onClick={onClick}
            className={cn(
                'relative rounded-[32px] border transition-all duration-500 overflow-hidden group',
                variantStyles[variant],
                !noPadding && 'p-6 md:p-12',
                onClick && 'cursor-pointer',
                className
            )}
        >
            {/* Subtle Inner Glow / Reflection */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-[-100%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
            </div>

            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </motion.div>
    )
}

export default HardwareCapsuleStatCard
export { HardwareCapsuleStatCard }
