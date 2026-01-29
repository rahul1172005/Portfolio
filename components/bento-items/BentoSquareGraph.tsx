'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoSquareGraph() {
    return (
        <HardwareCapsuleStatCard
            variant="black"
            className={cn(bentoBase, "overflow-hidden h-[120px] md:h-full")}
            noPadding
        >
            <div className="absolute inset-0 w-full h-full z-10 -m-px">
                <Image
                    src="/bento2.png"
                    alt="Graph Visual"
                    fill
                    className="object-cover object-[15%_center] md:object-[0%_center] scale-110 md:scale-150 origin-left"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
        </HardwareCapsuleStatCard>
    )
}
