'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface VentureData {
    id: number
    name: string
    tagline?: string
    description: string
    offerings: string[]
    href: string
    accentColor: string
    glowClass: string
    isLight: boolean
    cardBg: string
    textColorClass: string
    descColorClass: string
    taglineColorClass: string
    offeringsLabelColorClass: string
    offeringTagClass: string
    ctaColorClass: string
    ctaDisabledColorClass: string
}

const ventures: VentureData[] = [
    {
        id: 1,
        name: 'QUANTUM',
        description: 'Pioneering next-generation intelligence, advanced research, and high-impact training to shape the future of technology.',
        offerings: ['AI Solutions', 'Internships', 'Research', 'Training'],
        href: 'https://www.ouantum.com',
        accentColor: 'transparent',
        glowClass: 'border-transparent',
        isLight: false,
        cardBg: 'bg-black border-neutral-900',
        textColorClass: 'text-[#CCFF00]',
        descColorClass: 'text-[#CCFF00]/80',
        taglineColorClass: 'text-[#CCFF00]',
        offeringsLabelColorClass: 'text-[#CCFF00]/40',
        offeringTagClass: 'bg-[#CCFF00]/10 border-[#CCFF00]/20 text-[#CCFF00]',
        ctaColorClass: 'text-[#CCFF00]',
        ctaDisabledColorClass: 'text-[#CCFF00]/40'
    },
    {
        id: 2,
        name: 'ZAPSTERS',
        description: 'Building world-class digital products and providing industry-grade courses and internships to empower the next wave of tech builders.',
        offerings: ['Websites', 'Courses', 'Internships', 'Products'],
        href: 'https://zapsters.in',
        accentColor: '#CCFF00', // neon lime
        glowClass: 'border-black/10',
        isLight: true,
        cardBg: 'bg-[#CCFF00] border-black/5',
        textColorClass: 'text-black',
        descColorClass: 'text-black/75',
        taglineColorClass: 'text-black',
        offeringsLabelColorClass: 'text-black/40',
        offeringTagClass: 'bg-black/5 border-black/10 text-black/80',
        ctaColorClass: 'text-black',
        ctaDisabledColorClass: 'text-black/40'
    }
]

export const SelectedWork = () => {
    return (
        <section id="ventures" className="py-24 md:py-40 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Title */}
                <div className="flex flex-col items-center mb-20 md:mb-28 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter uppercase text-black leading-[0.8]"
                    >
                        VENTURES
                    </motion.h3>
                </div>

                {/* Ventures Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {ventures.map((venture, index) => {
                        const isLinkValid = venture.href && venture.href !== '#'

                        return (
                            <motion.div
                                key={venture.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="w-full"
                            >
                                <div
                                    className={`relative w-full overflow-hidden rounded-[40px] ${venture.cardBg} border shadow-md ${venture.glowClass} group transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
                                    style={{ height: '520px' }}
                                >


                                    {/* Ambient Glow Aura */}
                                    {venture.accentColor && venture.accentColor !== 'transparent' && (
                                        <div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                                            style={{
                                                background: `radial-gradient(circle, ${venture.accentColor} 0%, transparent 70%)`
                                            }}
                                        />
                                    )}

                                    {/* Card Content */}
                                    <div className={`absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10 ${venture.textColorClass}`}>
                                        {/* Top Header */}
                                        <div>
                                            {venture.tagline && (
                                                <span
                                                    className={`text-[10px] font-black uppercase tracking-[0.25em] ${venture.taglineColorClass}`}
                                                >
                                                    {venture.tagline}
                                                </span>
                                            )}
                                            <h4 className={`text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none ${venture.tagline ? 'mt-2' : 'mt-0'}`}>
                                                {venture.name}
                                            </h4>
                                            <p className={`${venture.descColorClass} text-sm font-bold leading-relaxed max-w-sm mt-4 uppercase tracking-wider`}>
                                                {venture.description}
                                            </p>
                                        </div>

                                        {/* Bottom Footer Details */}
                                        <div className="space-y-6">
                                            {/* Offerings Tag List */}
                                            <div>
                                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${venture.offeringsLabelColorClass} block mb-3`}>
                                                    Key Offerings
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    {venture.offerings.map((offering) => (
                                                        <span
                                                            key={offering}
                                                            className={`text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border ${venture.offeringTagClass}`}
                                                            style={{
                                                                cursor: 'default'
                                                            }}
                                                        >
                                                            {offering}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Action */}
                                            <div className="pt-2">
                                                {isLinkValid ? (
                                                    <a
                                                        href={venture.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] no-underline ${venture.ctaColorClass}`}
                                                    >
                                                        <span>Visit Website</span>
                                                        <ArrowUpRight size={14} strokeWidth={3.5} />
                                                    </a>
                                                ) : (
                                                    <div className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${venture.ctaDisabledColorClass}`}>
                                                        <span>Ecosystem Launching Soon</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}