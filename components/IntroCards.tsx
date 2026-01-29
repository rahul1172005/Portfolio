'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'

export const IntroCards = () => {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-32 md:mb-60">
            <div className="grid md:grid-cols-4 gap-5 h-auto md:h-[400px]">
                <div className="md:col-span-3">
                    <HardwareCapsuleStatCard variant="lime" className="h-full">
                        <div className="flex flex-col justify-between h-full">
                            <h2 className="text-4xl md:text-8xl font-black leading-[0.85] tracking-tighter text-black uppercase">
                                Designing systems.<br />
                                Engineering future.
                            </h2>
                            <div className="flex justify-between items-end mt-12 md:mt-0">
                                <p className="text-black font-black text-sm uppercase tracking-widest">
                                    Zapsters Core // 2026
                                </p>
                                <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center">
                                    <ArrowRight className="text-black" size={32} />
                                </div>
                            </div>
                        </div>
                    </HardwareCapsuleStatCard>
                </div>

                <div className="md:col-span-1 h-[400px] md:h-full">
                    <HardwareCapsuleStatCard
                        variant="black"
                        className="h-full relative overflow-hidden"
                        noPadding
                    >
                        {/* Full Background Image with Static X + Y Offset */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/personS.png"   // or .jpg — must be in public/
                                alt="Person Visual"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 25vw"
                                className="object-cover object-center"
                                style={{
                                    transform: 'translate(10px, 40px) scale(2.0)', // ✅ Inline X, Y, Zoom
                                    willChange: 'transform'
                                }}
                            />
                        </div>
                    </HardwareCapsuleStatCard>
                </div>

            </div>
        </div>
    )
}
