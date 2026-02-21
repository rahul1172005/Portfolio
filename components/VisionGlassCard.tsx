'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface VisionGlassCardProps {
    children: React.ReactNode
    className?: string
}

export const VisionGlassCard = ({ children, className }: VisionGlassCardProps) => {
    return (
        <motion.div
            className={cn(
                "glass rounded-[32px] p-8 border border-white/10 relative overflow-hidden",
                className
            )}
        >
            <div className="relative z-10">
                {children}
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </motion.div>
    )
}

export default VisionGlassCard
