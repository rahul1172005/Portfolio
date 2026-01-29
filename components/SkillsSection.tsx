'use client'

import { motion } from 'framer-motion'
import { BentoCard } from '@/components/BentoCard'
import { Palette, Code, Database, Brain, Terminal, Cpu, Layers, Zap } from 'lucide-react'

const skillCategories = [
    {
        title: "UI/UX & Design",
        icon: <Palette className="text-blue-400" size={28} />,
        skills: [
            "UI/UX Architecture",
            "Product Design",
            "Design Systems",
            "Apple-style Visual Design",
            "Glassmorphism / Bento UI",
            "Micro-interactions"
        ]
    },
    {
        title: "Frontend Engineering",
        icon: <Code className="text-purple-400" size={28} />,
        skills: [
            "React.js / Next.js 14",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Three.js / WebGL",
            "Advanced CSS Animations"
        ]
    },
    {
        title: "Backend & Architecture",
        icon: <Database className="text-green-400" size={28} />,
        skills: [
            "Node.js / Express.js",
            "Java Backend",
            "REST & GraphQL APIs",
            "Authentication (Auth.js)",
            "PostgreSQL / MongoDB",
            "System Architecture"
        ]
    },
    {
        title: "Strategy & Performance",
        icon: <Brain className="text-pink-400" size={28} />,
        skills: [
            "UI/UX Strategy",
            "SaaS Architecture",
            "Startup MVP Building",
            "Core Web Vitals Opt.",
            "SEO & Accessibility",
            "Conversion Design"
        ]
    }
]

export function SkillsSection() {
    return (
        <section id="skills" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="headline-2 mb-16 text-center text-black"
                >
                    Tech Arsenal
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <BentoCard key={index} delay={0.1 * (index + 1)} className="p-8">
                            <div className="mb-6 bg-neutral-50 w-12 h-12 rounded-xl flex items-center justify-center border border-black/5">
                                {category.icon}
                            </div>
                            <h3 className="font-semibold font-display text-lg mb-6 text-black">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
