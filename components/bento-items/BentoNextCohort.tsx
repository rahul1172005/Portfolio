'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoNextCohort() {
    const handleClick = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <HardwareCapsuleStatCard
            variant="black"
            className={cn(
                bentoBase,
                'relative overflow-hidden h-[80px] md:h-full cursor-pointer'
            )}
            noPadding
            onClick={handleClick}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/lastcard.jpg"
                    alt="Apply Now Background"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                />
            </div>

            {/* Optional dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* APPLY NOW CTA */}
            <div className="relative z-20 flex items-center justify-center h-full">
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
                    APPLY NOW
                </h3>
            </div>
        </HardwareCapsuleStatCard>
    )
}