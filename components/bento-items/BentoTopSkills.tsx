'use client'

import React from 'react'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'
import { ArrowRight } from 'lucide-react'

export function BentoTopSkills() {
    return (
        <HardwareCapsuleStatCard
            variant="white"
            noPadding
            className={cn(bentoBase, "h-[120px] md:h-full overflow-hidden")}
        >
            <div className="relative w-full h-full">

                {/* VIDEO BACKGROUND — TRUE EDGE TO EDGE */}
                <video
                    src="/video1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/25" />

                {/* CONTENT LAYER (WITH ITS OWN PADDING) */}
                <div className="relative z-10 flex flex-col justify-center h-full p-4 md:p-6">

                    {/* TITLE */}
                    <h2 className="text-2xl sm:text-4xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                        TOP<br />SKILLS
                    </h2>

                    {/* ROUND ARROW BUTTON */}
                    <div className="absolute bottom-3 right-3 md:bottom-9 md:right-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white flex items-center justify-center">
                            <ArrowRight className="text-white w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    </div>

                </div>
            </div>
        </HardwareCapsuleStatCard>
    )
}
