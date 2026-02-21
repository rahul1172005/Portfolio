'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoCardProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export const BentoCard = ({ children, className, onClick }: BentoCardProps) => {
    return (
        <motion.div
            whileHover={onClick ? { scale: 0.99 } : undefined}
            onClick={onClick}
            className={cn(
                "glass rounded-3xl p-6 transition-all duration-500 hover:border-white/20",
                onClick && "cursor-pointer",
                className
            )}
        >
            {children}
        </motion.div>
    )
}

export default BentoCard
