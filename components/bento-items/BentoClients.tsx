'use client'

import React from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoClients() {
    return (
        <HardwareCapsuleStatCard
            variant="white"
            className={cn(bentoBase, "overflow-hidden relative h-[120px] md:h-full")}
            noPadding
        >
            {/* ================= VIDEO BACKGROUND (LAST LAYER) ================= */}
            <video
                src="/video4.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                    filter: 'grayscale(90%) contrast(1.15)',
                    willChange: 'filter'
                }}
            />

            {/* ================= PNG ACCENT (ABOVE VIDEO) ================= */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
                <Image
                    src="/bento4.png"
                    alt="Clients Background"
                    width={650}
                    height={650}
                    className="absolute right-[-10%] md:right-[-20%] top-1/2 -translate-y-1/2 w-[50%] md:w-[65%] h-auto object-contain"
                    sizes="(max-width: 788px) 50vw, 33vw"
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex justify-between items-start w-full relative gap-6 p-5 md:p-12 z-20">
                {/* TEXT BLOCK */}
                <div className="flex flex-col gap-2 relative max-w-[70%]">
                    <h3 className="text-2xl md:text-6xl font-black text-black leading-none tracking-tight uppercase">
                        10+<br />
                        CLIENTS
                    </h3>
                    <p className="text-xs sm:text-sm md:text-xl font-bold text-black/80 uppercase tracking-widest">
                        Successfully Delivered Projects
                    </p>
                </div>
            </div>

        </HardwareCapsuleStatCard>
    )
}
