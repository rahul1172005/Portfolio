'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'

export const Services = () => {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto mt-32 md:mt-40">
            <div id="services" className="space-y-12">

                <div className="flex justify-center items-baseline border-b border-black/5 pb-10">
                    <h3 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-black text-center leading-none">
                        Services
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {[
                        { title: 'Development', desc: 'Full Stack Architecture' },
                        { title: 'UI/UX Design', desc: 'Premium Interfaces' },
                        { title: 'SaaS Systems', desc: 'Enterprise Solutions' },
                        { title: 'AI Integration', desc: 'Neural Networks' },
                    ].map((service, i) => (
                        <HardwareCapsuleStatCard
                            key={i}
                            variant="white"
                            className="
    h-64
    bg-gradient-to-br from-[#0B0B0F] via-[#121216] to-[#1A1A1F]
    text-white
    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
  "
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="space-y-2">
                                    <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
                                        {service.title}
                                    </h4>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/60">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Arrow — Subtle Glass */}
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center min-w-[64px] min-h-[64px]">
                                    <ArrowRight size={32} className="text-white md:w-10 md:h-10" />
                                </div>
                            </div>
                        </HardwareCapsuleStatCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
