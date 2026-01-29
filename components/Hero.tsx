'use client'

import React from 'react'
import Image from 'next/image'

export function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen w-full overflow-hidden bg-white"
        >

            {/* ================= IMAGE7 - MAIN HERO FOCAL ================= */}
            <div
                className="
    absolute left-1/2 top-[48%]
    -translate-x-1/2 -translate-y-1/2
    z-40
    w-[85vw] md:w-[650px] xl:w-[850px]
  "
            >
                <Image
                    src="/person.png"
                    alt="Center Visual"
                    width={1600}
                    height={1600}
                    className="
                        w-full h-auto object-contain
                        scale-[0.85]
                        translate-x-[-10px] md:translate-x-[-25px]
                        translate-y-[40px] md:translate-y-[80px]
                    "
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                />
            </div>


            {/* ================= RAHUL - MID LAYER ================= */}
            <div
                className="
    absolute
    left-1/2
    top-[50%] md:top-[42%]
    -translate-x-1/2 -translate-y-1/2
    z-30
    w-[85vw] md:w-[740px] xl:w-[980px]
  "
            >
                <Image
                    src="/RAHUL.png"
                    alt="Rahul"
                    width={1800}
                    height={2400}
                    className="
                        w-full h-auto object-contain
                        scale-105
                        translate-x-[-6px]
                        -translate-y-[50px] md:-translate-y-[80px]
                    "
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                />
            </div>


            {/* ================= CRISP PURE WHITE INNER STROKE ================= */}
            <div className="pointer-events-none absolute inset-0 z-[60] rounded-[32px] md:rounded-[48px] shadow-[inset_0_0_0_16px_rgba(255,255,255,1)] md:shadow-[inset_0_0_0_32px_rgba(255,255,255,1)]" />

            {/* ================= STRONG INNER GLOW ================= */}
            <div className="pointer-events-none absolute inset-0 z-[59] rounded-[32px] md:rounded-[48px] shadow-[inset_0_0_0_24px_rgba(255,255,255,1)] md:shadow-[inset_0_0_0_48px_rgba(255,255,255,1)] blur-[12px] md:blur-[24px]" />

            {/* ================= HEAVY DIFFUSE GLOW ================= */}
            <div className="pointer-events-none absolute inset-0 z-[58] rounded-[32px] md:rounded-[48px] shadow-[inset_0_0_0_32px_rgba(255,255,255,1)] md:shadow-[inset_0_0_0_64px_rgba(255,255,255,1)] blur-[24px] md:blur-[44px]" />

            {/* ================= OUTER HALO GLOW ================= */}
            <div className="pointer-events-none absolute inset-[-12px] md:inset-[-24px] z-[57] rounded-[48px] md:rounded-[64px] shadow-[0_0_80px_rgba(255,255,255,0.85)] md:shadow-[0_0_180px_rgba(255,255,255,0.85)] blur-[30px] md:blur-[60px]" />

            {/* ================= DEEP WHITE FEATHER ================= */}
            <div className="pointer-events-none absolute inset-0 z-[56] rounded-[32px] md:rounded-[48px] shadow-[inset_0_0_200px_rgba(255,255,255,0.98)] md:shadow-[inset_0_0_520px_rgba(255,255,255,0.98)]" />

        </section>
    )
}
