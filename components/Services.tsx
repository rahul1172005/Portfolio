'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
                    ].map((service, i) => {
                        const isDark = service.title === 'Development' || service.title === 'AI Integration';
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 0.98 }}
                                className={`${isDark ? 'bg-black text-[#d9ff00]' : 'bg-[#d9ff00] text-black'} p-8 md:p-12 rounded-[32px] h-64 md:h-80 flex flex-col justify-between border border-black/5 relative overflow-hidden`}
                            >
                                <div className="space-y-4 relative z-10">
                                    <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                                        {service.title}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[#d9ff00] animate-pulse' : 'bg-black'}`} />
                                        <p className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] ${isDark ? 'text-[#d9ff00]/60' : 'opacity-60'}`}>
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-end relative z-10">
                                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border ${isDark ? 'border-[#d9ff00]/20' : 'border-black/10'} flex items-center justify-center`}>
                                        <ArrowRight className={`${isDark ? 'text-[#d9ff00]' : 'text-black'} w-6 h-6 md:w-8 md:h-8`} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
