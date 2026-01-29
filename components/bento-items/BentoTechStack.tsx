'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoTechStack() {
    return (
        <HardwareCapsuleStatCard
            variant="white"
            className={cn(bentoBase, 'bg-gray-200 overflow-hidden relative h-[240px] md:h-full')}
            noPadding
        >
            {/* BENTO3 IMAGE - SILHOUETTE */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/bento3.png"
                    alt="Components"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* BENTO3(1) IMAGE - TECH ICONS OVERLAY */}
            <div className="absolute inset-0 w-full h-full z-10">
                <Image
                    src="/bento3-1.png"
                    alt="Tech Icons"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </HardwareCapsuleStatCard>
    )
}
