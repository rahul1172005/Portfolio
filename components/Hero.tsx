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
                    className="w-full h-auto object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                    style={{
                        transform: 'translate(-25px, 90px) scale(.85)', // ✅ Inline X, Y, Zoom
                        willChange: 'transform'
                    }}
                />
            </div>


            {/* ================= RAHUL - MID LAYER ================= */}
            <div
                className="
    absolute 
    left-1/2 
    top-[33%] 
    -translate-x-1/2 
    z-30 
    w-[90vw] md:w-[740px] xl:w-[980px]
  "
            >
                <Image
                    src="/RAHUL.png"
                    alt="Rahul"
                    width={1800}
                    height={2400}
                    className="w-full h-auto object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                    style={{
                        transform: 'translate(-6px, -700px) scale(1.05)', // ✅ Inline X, Y, Zoom
                        willChange: 'transform'
                    }}
                />
            </div>


            {/* ================= CRISP PURE WHITE INNER STROKE ================= */}
            <div className="pointer-events-none absolute inset-0 z-[60] rounded-[48px] shadow-[inset_0_0_0_32px_rgba(255,255,255,1)]" />

            {/* ================= STRONG INNER GLOW ================= */}
            <div className="pointer-events-none absolute inset-0 z-[59] rounded-[48px] shadow-[inset_0_0_0_48px_rgba(255,255,255,1)] blur-[24px]" />

            {/* ================= HEAVY DIFFUSE GLOW ================= */}
            <div className="pointer-events-none absolute inset-0 z-[58] rounded-[48px] shadow-[inset_0_0_0_64px_rgba(255,255,255,1)] blur-[44px]" />

            {/* ================= OUTER HALO GLOW ================= */}
            <div className="pointer-events-none absolute inset-[-24px] z-[57] rounded-[64px] shadow-[0_0_180px_rgba(255,255,255,0.85)] blur-[60px]" />

            {/* ================= DEEP WHITE FEATHER ================= */}
            <div className="pointer-events-none absolute inset-0 z-[56] rounded-[48px] shadow-[inset_0_0_520px_rgba(255,255,255,0.98)]" />

        </section>
    )
}
