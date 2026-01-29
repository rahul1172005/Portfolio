'use client'

import React from 'react'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoTopSkills() {
    return (
        <HardwareCapsuleStatCard
            variant="lime"
            className={cn(bentoBase, "h-[120px] md:h-full")}
        >
            <div className="flex flex-col justify-center h-full relative">
                <h2 className="text-3xl sm:text-4xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter">
                    TOP<br />SKILLS
                </h2>
            </div>
        </HardwareCapsuleStatCard>
    )
}
