'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoTechStack() {
    return (
        <HardwareCapsuleStatCard
            variant="white"
            className={cn(bentoBase, 'bg-gray-200 overflow-hidden relative h-[240px] md:h-full')}
            noPadding
        >
            {/* Logo Image with scale and translation positioning */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Image
                    src="/logooooo.png"
                    alt="Logo Visual"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2"
                    style={{
                        transform: 'translate(0px, 0px) scale(1.3)', // Customizable scale and translation axis attributes
                        willChange: 'transform'
                    }}
                />
            </div>
        </HardwareCapsuleStatCard>
    )
}
