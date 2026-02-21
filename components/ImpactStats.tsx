import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// ── Simplified Bar Chart using Brand Colors
const BarChart = () => (
    <div className="flex items-end gap-[4px] h-16 md:h-24">
        {[20, 45, 30, 85, 40, 55, 35].map((h, i) => (
            <div
                key={i}
                className={`w-[8px] md:w-[12px] rounded-t-[2px] transition-all duration-500 ${i === 3 ? 'bg-black' : 'bg-black/10'}`}
                style={{ height: `${h}%` }}
            />
        ))}
    </div>
)

export const ImpactStats = () => {
    return (
        <section id="impact" className="px-6 md:px-12 max-w-7xl mx-auto mt-32 md:mt-60 mb-32 select-none">
            {/* LARGE TITLE - PURE BLACK */}
            <div className="flex flex-col items-center mb-24 text-center">
                <div
                    className="space-y-4"
                >

                    <h3 className="text-3xl md:text-[6rem] lg:text-[8rem] font-black tracking-tighter uppercase text-black leading-[0.8]">
                        Impact <br className="md:hidden" /> STATS
                    </h3>
                </div>
            </div>

            {/* BENTO GRID - BRAND GREEN THEME */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:grid-rows-2">

                {/* 1. PROJECTS (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d9ff00] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Projects</span>
                    <h4 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mt-4">10+</h4>
                </motion.div>

                {/* 2. SUCCESS RATE (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d9ff00] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Success Rate</span>
                    <div className="mt-4">
                        <h4 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">99.8%</h4>

                    </div>
                </motion.div>

                {/* 3. GLOBAL REACH (2x2) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-2 row-span-2 bg-black text-[#d9ff00] p-8 md:p-12 flex flex-col justify-between rounded-[32px] relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em]">Global Reach</span>
                        <h4 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none mt-6">10K</h4>
                        <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest block mt-2 opacity-50">Active Users Worldwide</span>
                    </div>

                    <div className="mt-8 flex items-end justify-between relative z-10">
                        <div className="space-y-4">

                        </div>
                        <BarChart />
                    </div>
                </motion.div>

                {/* 4. RESPONSE (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d9ff00] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <div className="flex justify-between items-start">
                        <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Response</span>
                        <ArrowUpRight size={20} className="text-black/30" />
                    </div>
                    <h4 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mt-4">24 HR</h4>
                </motion.div>

                {/* 5. RATING (1x1) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="col-span-1 row-span-1 bg-[#d1cec4] text-black p-6 md:p-8 flex flex-col justify-between rounded-[32px] border border-black/5"
                >
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest">Rating</span>
                    <div className="flex items-end justify-between mt-4">
                        <h4 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">5.0</h4>
                        <div className="flex gap-[3px] mb-2">
                            {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-[4px] h-[4px] bg-black" />)}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
