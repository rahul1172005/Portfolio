'use client'

import React from 'react'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoLocation() {
    return (
        <HardwareCapsuleStatCard
            variant="white"
            className={cn(
                bentoBase,
                'relative overflow-hidden h-[120px] md:h-full bg-[#CCFF00] flex items-center justify-center'
            )}
            noPadding
        >
            <div className="flex items-center justify-center w-full h-full">
                <span className="text-black text-8xl md:text-[10rem] font-black leading-none select-none">
                    ?
                </span>
            </div>
        </HardwareCapsuleStatCard>
    )
}