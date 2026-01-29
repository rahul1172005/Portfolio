'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoNextCohort() {
    return (
        <HardwareCapsuleStatCard
            variant="black"
            className={cn(bentoBase, 'relative overflow-hidden')}
            noPadding
        >
            {/* Full Background Image with Static X + Y Offset */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bento8 (2).png"   // must be in public/
                    alt="Apply Now Background"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    style={{
                        transform: 'translate(0px, 0px) scale(1.0)', // ✅ X, Y, Zoom
                        willChange: 'transform'
                    }}
                />
            </div>

            {/* APPLY NOW CTA */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-4xl font-black uppercase tracking-tight text-white">
                    APPLY NOW
                </h3>
            </div>
        </HardwareCapsuleStatCard>
    )
}
