'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'

export const Services = () => {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto mt-32 md:mt-40">
            <div id="services" className="space-y-12">

                <div className="flex justify-center items-baseline border-b border-black/5 pb-10">
                    <h3 className="text-5xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-black text-center leading-none">
                        Services
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                    {[
                        { title: 'Development', desc: 'Full Stack Architecture' },
                        { title: 'UI/UX Design', desc: 'Premium Interfaces' },
                        { title: 'SaaS Systems', desc: 'Enterprise Solutions' },
                        { title: 'AI Integration', desc: 'Neural Networks' },
                    ].map((service, i) => (
                        <HardwareCapsuleStatCard
                            key={i}
                            variant="black"
                            noPadding
                            className="
                              h-48 sm:h-64 
                              overflow-hidden 
                              text-white
                              bg-gradient-to-br 
                              from-[#050505] 
                              via-[#0d0d0f] 
                              to-[#141417]
                            "
                        >
                            <div className="relative w-full h-full">

                                {/* CONTENT */}
                                <div className="relative z-10 flex justify-between items-center w-full h-full p-4 md:p-6">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
                                            {service.title}
                                        </h4>
                                        <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/60">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Arrow — Dark Glass */}
                                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center min-w-[48px] min-h-[48px] md:min-w-[64px] md:min-h-[64px]">
                                        <ArrowRight className="text-white w-6 h-6 md:w-10 md:h-10" />
                                    </div>
                                </div>

                                {/* SUBTLE INNER GLOW */}
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                            </div>
                        </HardwareCapsuleStatCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
