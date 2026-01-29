'use client'

import React, { useRef } from 'react'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'

export const ImpactStats = () => {
    const successAudioRef = useRef<HTMLAudioElement | null>(null)

    const isMobile = typeof window !== 'undefined' && 'ontouchstart' in window

    // 🔍 Check if ANY audio is currently playing on the page
    const isAnyAudioPlaying = () => {
        const audios = document.querySelectorAll('audio')
        for (const audio of audios) {
            if (!audio.paused && !audio.ended) {
                return true
            }
        }
        return false
    }

    const playSuccess = () => {
        if (!successAudioRef.current) return

        // ❌ If some other music is playing, DO NOTHING
        if (isAnyAudioPlaying()) {
            console.log('Another audio is already playing. Skipping SUCCESS play.')
            return
        }

        successAudioRef.current.currentTime = 0
        successAudioRef.current.play().catch(() => {
            console.warn('Audio play blocked by browser')
        })
    }

    const pauseSuccess = () => {
        if (!successAudioRef.current) return
        successAudioRef.current.pause()
    }

    // 🖥 Desktop
    const handleClick = () => {
        if (isMobile) return
        playSuccess()
    }

    const handleDoubleClick = () => {
        if (isMobile) return
        pauseSuccess()
    }

    // 📱 Mobile — TRUE TOGGLE
    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault()   // 🚫 prevent ghost click
        e.stopPropagation()

        if (!successAudioRef.current) return

        if (successAudioRef.current.paused) {
            playSuccess()
        } else {
            pauseSuccess()
        }
    }

    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto mt-32 md:mt-60">
            <div id="impact" className="space-y-12">

                <div className="flex justify-center items-baseline border-b border-black/5 pb-10">
                    <h3 className="text-5xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-black text-center leading-none">
                        Impact STATS
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-5 h-auto md:h-[600px]">

                    {/* PROJECTS */}
                    <HardwareCapsuleStatCard
                        impactHover
                        value="10+"
                        label="Projects"
                        variant="white"
                        style={{
                            backgroundImage: "url('/projects.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '150%',
                            backgroundPosition: '60% 40%',
                        }}
                        className="col-span-2 text-black"
                    />

                    {/* USERS */}
                    <HardwareCapsuleStatCard
                        impactHover
                        value="10K+"
                        label="Users"
                        variant="white"
                        style={{
                            backgroundImage: "url('/users.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '140%',
                            backgroundPosition: '50% 50%',
                        }}
                        className="text-black"
                    />

                    {/* SUCCESS — VIDEO + MOBILE SAFE TOGGLE */}
                    <HardwareCapsuleStatCard
                        variant="white"
                        noPadding
                        className="text-black relative overflow-hidden"
                    >
                        {/* VIDEO BACKGROUND — YELLOW FILTER */}
                        <video
                            src="/video3.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                filter: `
                                  sepia(100%)
                                  hue-rotate(10deg)
                                  saturate(3)
                                  contrast(1.1)
                                `,
                                willChange: 'filter'
                            }}
                        />

                        {/* TAP / CLICK CAPTURE LAYER */}
                        <div
                            className="absolute inset-0 z-20 cursor-pointer"
                            onClick={handleClick}                 // 🖥 desktop only
                            onDoubleClick={handleDoubleClick}     // 🖥 desktop only
                            onTouchEnd={handleTouchEnd}           // 📱 mobile toggle
                        />

                        {/* OPTIONAL CONTENT LAYER */}
                        <div className="relative z-10 flex flex-col h-full justify-center p-4 md:p-10" />

                        {/* HIDDEN AUDIO */}
                        <audio
                            ref={successAudioRef}
                            src="/success.mp3"
                            preload="auto"
                        />
                    </HardwareCapsuleStatCard>

                    {/* COUNTRIES */}
                    <HardwareCapsuleStatCard
                        impactHover
                        value="2"
                        label="Countries"
                        variant="white"
                        style={{
                            backgroundImage: "url('/countries.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '160%',
                            backgroundPosition: '45% 55%',
                        }}
                        className="text-black "
                    />

                    {/* RESPONSE */}
                    <HardwareCapsuleStatCard
                        impactHover
                        value="<24h"
                        label="Response"
                        variant="white"
                        style={{
                            backgroundImage: "url('/response.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '180%',
                            backgroundPosition: '50% 35%',
                        }}
                        className="text-black"
                    />

                    {/* RATING */}
                    <HardwareCapsuleStatCard
                        impactHover
                        value="5.0"
                        label="Rating"
                        variant="white"
                        style={{
                            backgroundImage: "url('/rating.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '150%',
                            backgroundPosition: '55% 45%',
                        }}
                        className="col-span-2 text-black"
                    />

                </div>
            </div>
        </div>
    )
}
