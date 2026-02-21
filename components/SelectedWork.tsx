'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/* ─────────────────────────────────────────────────────────────
   Card Interface (Desktop + Mobile Transform Support)
───────────────────────────────────────────────────────────── */
interface CardData {
    id: number
    name: string
    category: string
    image: string
    href: string
    imageHeight: number

    // 🖥 Desktop
    scale?: number
    translateX?: number
    translateY?: number

    // 📱 Mobile
    mobileScale?: number
    mobileTranslateX?: number
    mobileTranslateY?: number
}

/* ─────────────────────────────────────────────────────────────
   LEFT COLUMN
───────────────────────────────────────────────────────────── */
const leftColumn: CardData[] = [
    {
        id: 1,
        name: 'ZAPSTERS',
        category: '/ platform',
        image: '/work1.jpg',
        href: 'https://zapsters.in',
        imageHeight: 360,
        scale: 1.55,
        translateY: 0,
        mobileScale: 2.5,
        mobileTranslateY: 0,
    },
    {
        id: 3,
        name: 'TASTE OF TRIOS',
        category: '/ business',
        image: '/card2.jpeg',
        href: '#',
        imageHeight: 220,
        scale: 2.0,
        translateY: 85,
        mobileScale: 1.3,
        mobileTranslateY: 20,
    },
    {
        id: 5,
        name: 'GYM',
        category: '/ business',
        image: '/card4.jpeg',
        href: '#',
        imageHeight: 300,
        scale: 1.5,
        mobileScale: 1.8,
    },
    {
        id: 7,
        name: 'AMOR MOTIS',
        category: '/ site',
        image: '/work8.jpg',
        href: 'https://ctf.cybercom.live/',
        imageHeight: 260,
        scale: 1.1,
        translateY: 10,
        mobileScale: 1.6,
        mobileTranslateY: 0,
    },
]

/* ─────────────────────────────────────────────────────────────
   RIGHT COLUMN
───────────────────────────────────────────────────────────── */
const rightColumn: CardData[] = [
    {
        id: 2,
        name: 'PAWSHOME',
        category: '/ business',
        image: '/card1.jpeg',
        href: '#',
        imageHeight: 440,
        scale: 1.6,
        mobileScale: 2.7,
    },
    {
        id: 4,
        name: 'SVBM',
        category: '/ business',
        image: '/card3.jpeg',
        href: '#',
        imageHeight: 190,
        scale: 2.2,
        translateY: 37,
        mobileScale: 1.4,
        mobileTranslateY: 10,
    },
    {
        id: 6,
        name: 'RAD',
        category: '/ saas',
        image: '/card5.jpeg',
        href: '#',
        imageHeight: 280,
        scale: 2.0,
        mobileScale: 1.3,
    },
    {
        id: 8,
        name: 'CYBERTRON',
        category: '/ site',
        image: '/work7.jpg',
        href: 'https://www.cybertronctf.online/',
        imageHeight: 320,
        scale: 1.3,
        translateY: 20,
        mobileScale: 1.8,
        mobileTranslateY: 5,
    },
]

/* ─────────────────────────────────────────────────────────────
   Project Card Component
───────────────────────────────────────────────────────────── */
const ProjectCard = ({ card }: { card: CardData }) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const isLinkValid = card.href && card.href !== '#'

    // Choose correct transform values
    const scale = isMobile
        ? card.mobileScale ?? card.scale ?? 1
        : card.scale ?? 1

    const translateX = isMobile
        ? card.mobileTranslateX ?? card.translateX ?? 0
        : card.translateX ?? 0

    const translateY = isMobile
        ? card.mobileTranslateY ?? card.translateY ?? 0
        : card.translateY ?? 0

    return (
        <motion.div
            whileHover={{ y: -12 }}
            className="group relative w-full overflow-hidden rounded-[40px] bg-[#111111] cursor-default shadow-sm hover:shadow-2xl transition-all duration-700"
            style={{ height: card.imageHeight }}
        >
            <Image
                src={card.image}
                alt={card.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-all duration-1000 ease-out group-hover:blur-md group-hover:opacity-40"
                style={{
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    transformOrigin: 'center',
                    willChange: 'transform',
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <div className="mb-4 inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/10">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                        {card.category.replace('/ ', '')}
                    </span>
                </div>

                <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-6">
                    {card.name}
                </h4>

                {isLinkValid ? (
                    <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-bold text-[#d9ff00] uppercase tracking-[0.2em] hover:scale-110 transition-transform duration-300 no-underline"
                    >
                        <span>View Project</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                ) : (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] cursor-not-allowed">
                        <span>No Preview</span>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

/* ─────────────────────────────────────────────────────────────
   Selected Work Section
───────────────────────────────────────────────────────────── */
export const SelectedWork = () => {
    return (
        <section id="work" className="py-24 md:py-40 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col items-center mb-24 text-center">
                    <h3 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter uppercase text-black leading-[0.8]">
                        MY <br className="md:hidden" /> WORK
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                    <div className="flex flex-col gap-6">
                        {leftColumn.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <ProjectCard card={card} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-6 md:mt-24">
                        {rightColumn.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: (index * 0.1) + 0.2 }}
                            >
                                <ProjectCard card={card} />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}