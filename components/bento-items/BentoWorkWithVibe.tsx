'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoWorkWithVibe() {
    return (
        <HardwareCapsuleStatCard
            variant="black"
            className={cn(bentoBase, 'overflow-hidden bg-black relative')}
            noPadding
        >
            {/* Background Image — FULL COVERAGE with Subtle Float */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/bento5.jpg"
                    alt="Work With Vibe"
                    fill
                    className="object-cover object-[40%_37%] animate-float-y"
                    sizes="(max-width: 768px) 100vw, 56vw"
                    priority // Re-enabled for smoother scroll-up experience
                />
            </div>
        </HardwareCapsuleStatCard>
    )
}
