'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export const EditorialQuote = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreen()
        window.addEventListener('resize', checkScreen)

        return () => window.removeEventListener('resize', checkScreen)
    }, [])

    // 🖥 Desktop Transform
    const desktopTransform = {
        scale: 1.8,
        translateX: 0,
        translateY: -28,
    }

    // 📱 Mobile Transform
    const mobileTransform = {
        scale: 1.3,
        translateX: 0,
        translateY: -120,
    }

    const activeTransform = isMobile ? mobileTransform : desktopTransform

    return (
        <div className="relative px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-48 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 overflow-hidden">

            {/* 🔥 MOBILE BACKGROUND IMAGE */}
            {isMobile && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/quotes1.png"
                        alt="Quote Background"
                        fill
                        className="object-cover opacity-0"
                        sizes="100vw"
                        style={{
                            transform: `translate(${activeTransform.translateX}px, ${activeTransform.translateY}px) scale(${activeTransform.scale})`,
                            transformOrigin: 'center',
                        }}
                    />
                </div>
            )}

            {/* 🖥 Desktop Image Box */}
            {!isMobile && (
                <div className="relative w-full md:w-1/2 flex flex-col gap-6 order-1">

                    <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-[#ffffff]">
                        <Image
                            src="/quotes1.png"
                            alt="Quote Visual"
                            fill
                            className="object-cover"
                            sizes="600px"
                            style={{
                                transform: `translate(${desktopTransform.translateX}px, ${desktopTransform.translateY}px) scale(${desktopTransform.scale})`,
                                transformOrigin: 'center',
                            }}
                        />
                    </div>

                </div>
            )}

            {/* ✨ Text Content */}
            <div className={`relative ${isMobile ? 'z-10 w-full text-center' : 'w-full md:w-1/2 text-left'}`}>

                <div className="space-y-6">

                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-black">
                        WISE MEN SPEAK LESS, <br />
                        <span>YET EVERY WORD</span> <br />
                        CUTS THROUGH <br />
                        THE NOISE.
                    </h3>

                    <div className="pt-8">
                        <div className={`flex items-baseline gap-4 mb-8 ${isMobile ? 'justify-center' : 'justify-start'}`}>
                            <span className="text-2xl md:text-4xl font-black uppercase text-black tracking-tighter">
                                — RAHUL R
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-black/60">
                            <div className="space-y-2">
                                <div className="text-black">Mission Statement</div>
                                <p className="leading-relaxed opacity-70">
                                    ENGINEERING SOLUTIONS THAT SCALE WITH INTENT AND PRECISION.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-black">Core Objective</div>
                                <p className="leading-relaxed opacity-70">
                                    REDUCING COMPLEXITY INTO SEAMLESS ANALOG EXPERIENCES.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}