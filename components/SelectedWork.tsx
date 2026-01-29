'use client'

import React from 'react'
import Image from 'next/image'
import { Globe, Smartphone, Layers, Sparkles } from 'lucide-react'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'

export const SelectedWork = () => {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div id="work" className="space-y-12">
                <div className="flex justify-center items-baseline border-b border-black/5 pb-10">
                    <h3 className="text-5xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-black text-center leading-none">
                        My Work
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                    {[
                        {
                            title: 'Zapsters',
                            type: 'Company',
                            icon: Globe,
                            variant: 'white' as const,
                            image: '/card0.jpeg',
                            transform: 'translate(-12px, -8px) scale(1.08)',
                        },
                        {
                            title: 'Pawshome',
                            type: 'Business',
                            icon: Smartphone,
                            variant: 'white' as const,
                            image: '/card1.jpeg',
                            transform: 'translate(6px, -10px) scale(1.06)',
                        },
                        {
                            title: 'Taste Of Trios',
                            type: 'Business',
                            icon: Layers,
                            variant: 'white' as const,
                            image: '/card2.jpeg',
                            transform: 'translate(-8px, -10px) scale(1.07)',
                        },
                        {
                            title: 'SVBM',
                            type: 'Business',
                            icon: Sparkles,
                            variant: 'white' as const,
                            image: '/card3.jpeg',
                            transform: 'translate(10px, -6px) scale(1.05)',
                        },
                        {
                            title: 'Gym',
                            type: 'Business',
                            icon: Globe,
                            variant: 'white' as const,
                            image: '/card4.jpeg',
                            transform: 'translate(-6px, -12px) scale(1.08)',
                        },
                        {
                            title: 'RAD',
                            type: 'Data Analytics Tool',
                            icon: Smartphone,
                            variant: 'white' as const,
                            image: '/card5.jpeg',
                            transform: 'translate(8px, -10px) scale(1.06)',
                        },
                    ].map((project, i) => (
                        <div key={i} className="aspect-square">
                            <HardwareCapsuleStatCard
                                variant="black"
                                noPadding
                                className="h-full w-full relative overflow-hidden"
                            >
                                {/* Blurred Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority={i < 2} // Priority first 2 images for speed
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover object-center blur-[2px] scale-110 transition-all duration-500 group-hover:blur-none group-hover:scale-100"
                                        style={{
                                            transform: project.transform,
                                            willChange: 'transform',
                                        }}
                                    />
                                </div>

                                {/* Dark Glass Overlay */}
                                <div className="absolute inset-0 bg-black/45 z-[1]" />

                                {/* Foreground Content — CENTERED TEXT ONLY */}
                                <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-3 md:p-5">
                                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none text-white">
                                        {project.title}
                                    </h4>
                                    <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mt-2 text-white/70">
                                        {project.type}
                                    </p>
                                </div>
                            </HardwareCapsuleStatCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
