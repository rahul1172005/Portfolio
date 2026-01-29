'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import HardwareCapsuleStatCard from '../HardwareCapsuleStatCard'
import { cn } from '@/lib/utils'
import { bentoBase } from './shared'

export function BentoWorkWithVibe() {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const isMobile = typeof window !== 'undefined' && 'ontouchstart' in window

    // 🔍 Check if ANY audio is currently playing on the page
    const isAnyAudioPlaying = () => {
        const audios = Array.from(document.querySelectorAll('audio'))
        for (const audio of audios) {
            if (!audio.paused && !audio.ended) {
                return true
            }
        }
        return false
    }

    const playAudio = () => {
        if (!audioRef.current) return

        // ❌ If some other music is playing, DO NOTHING
        if (isAnyAudioPlaying()) {
            console.log('Another audio is already playing. Skipping play.')
            return
        }

        audioRef.current.currentTime = 0
        audioRef.current.play().catch(() => {
            console.warn('Audio play blocked by browser')
        })
    }

    const pauseAudio = () => {
        if (!audioRef.current) return
        audioRef.current.pause()
    }

    // 🖥 Desktop
    const handleClick = () => {
        if (isMobile) return
        playAudio()
    }

    const handleDoubleClick = () => {
        if (isMobile) return
        pauseAudio()
    }

    // 📱 Mobile — TAP TOGGLE
    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault()
        e.stopPropagation()

        if (!audioRef.current) return

        if (audioRef.current.paused) {
            playAudio()
        } else {
            pauseAudio()
        }
    }

    return (
        <HardwareCapsuleStatCard
            variant="black"
            className={cn(bentoBase, 'overflow-hidden bg-black relative h-[120px] md:h-full')}
            noPadding
        >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/bento5.jpg"
                    alt="Work With Vibe"
                    fill
                    className="object-cover object-[40%_37%] animate-float-y"
                    sizes="(max-width: 768px) 100vw, 56vw"
                    priority
                />
            </div>

            {/* TAP / CLICK CAPTURE LAYER */}
            <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={handleClick}                 // 🖥 desktop
                onDoubleClick={handleDoubleClick}     // 🖥 desktop
                onTouchEnd={handleTouchEnd}           // 📱 mobile toggle
            />

            {/* HIDDEN AUDIO */}
            <audio
                ref={audioRef}
                src="/music1.mp3"
                preload="auto"
            />
        </HardwareCapsuleStatCard>
    )
}
