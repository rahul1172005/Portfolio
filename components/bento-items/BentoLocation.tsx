'use client'

import React from 'react'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoLocation() {
    return (
        <HardwareCapsuleStatCard
            variant="white"
            className={cn(bentoBase, 'relative overflow-hidden h-[120px] md:h-full')}
            noPadding
        >
            {/* ================= GIF BACKGROUND (B&W) ================= */}
            <img
                src="/video2.gif"
                alt="Location Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                    filter: 'grayscale(100%) contrast(1.05)',
                    transform: 'translate(10px, -6px) scale(1.2)', // ✅ X, Y, SCALE
                    willChange: 'transform, filter'
                }}
            />
        </HardwareCapsuleStatCard>
    )
}
