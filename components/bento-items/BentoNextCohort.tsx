'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoNextCohort() {
    const handleClick = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <HardwareCapsuleStatCard
            variant="black"
            className={cn(bentoBase, 'relative overflow-hidden h-[80px] md:h-full')}
            noPadding
            onClick={handleClick}
        >
            {/* Background GIF */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/gif001.gif"
                    alt="Apply Now Background"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center grayscale brightness-75 contrast-125"
                    style={{
                        transform: 'translate(0px, 0px) scale(1.0)',
                        willChange: 'transform'
                    }}
                />
            </div>

            {/* APPLY NOW CTA */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    APPLY NOW
                </h3>
            </div>
        </HardwareCapsuleStatCard>
    )
}
