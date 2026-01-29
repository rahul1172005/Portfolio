'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoLogo() {
    return (
        <HardwareCapsuleStatCard
            variant="white"
            className={cn(bentoBase, 'relative overflow-hidden h-[120px] md:h-full')}
            noPadding
        >
            {/* Full Background Image with Static X + Y Offset */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bento6.jpg"
                    alt="Bento Logo Background"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    style={{
                        transform: 'translate(-4px, 10px) scale(1.05)', // ✅ X, Y, Zoom
                        willChange: 'transform'
                    }}
                />
            </div>
        </HardwareCapsuleStatCard>
    )
}
