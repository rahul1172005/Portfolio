import React from 'react'
import { motion } from 'framer-motion'
export const ImpactStats = () => {
    return (
        <section id="impact" className="px-6 md:px-12 max-w-7xl mx-auto mt-32 md:mt-60 mb-32 select-none">
            {/* LARGE TITLE - PURE BLACK */}
            <div className="flex flex-col items-center mb-24 text-center">
                <div className="space-y-4">
                    <h3 className="text-3xl md:text-[6rem] lg:text-[8rem] font-black tracking-tighter uppercase text-black leading-[0.8]">
                        Impact <br className="md:hidden" /> STATS
                    </h3>
                </div>
            </div>

            {/* BENTO GRID - BRAND GREEN THEME */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:grid-rows-2">

                {/* 1. VENTURES (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d9ff00] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Ventures</span>
                    <div className="mt-4">
                        <h4 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">02</h4>
                        <span className="text-[10px] md:text-[12px] font-black uppercase tracking-wider block mt-1.5 opacity-60">Active</span>
                    </div>
                </motion.div>

                {/* 2. TEAM (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d9ff00] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Team</span>
                    <div className="mt-4">
                        <h4 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">50+</h4>
                        <span className="text-[10px] md:text-[12px] font-black uppercase tracking-wider block mt-1.5 opacity-60">Builders</span>
                    </div>
                </motion.div>

                {/* 3. FOUNDER STATEMENT (2x2) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-2 row-span-2 bg-black text-[#d9ff00] p-8 md:p-12 flex flex-col justify-between rounded-[32px] relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.95] uppercase">
                            Turning<br />
                            Ambition<br />
                            Into<br />
                            Ecosystems
                        </h4>
                    </div>

                    <div className="relative z-10 mt-8">
                        <p className="text-white/70 text-[10px] md:text-xs font-black uppercase tracking-widest leading-relaxed max-w-sm">
                            Building ventures, products, communities, and opportunities for the next generation.
                        </p>
                    </div>
                </motion.div>

                {/* 4. FOCUS (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d9ff00] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Focus</span>
                    <div className="mt-4">
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-none">AI &</h4>
                        <span className="text-[10px] md:text-[12px] font-black uppercase tracking-wider block mt-1.5 opacity-60">Innovation</span>
                    </div>
                </motion.div>

                {/* 5. MISSION (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d1cec4] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Mission</span>
                    <div className="mt-4">
                        <h4 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-none uppercase">Building</h4>
                        <span className="text-[10px] md:text-[12px] font-black uppercase tracking-wider block mt-1.5 opacity-60">What's Next</span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
