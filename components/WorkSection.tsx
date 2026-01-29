'use client'

import { motion } from 'framer-motion'
import { BentoCard } from '@/components/BentoCard'
import { Globe, Users, Shield, Smartphone, Rocket, Sparkles } from 'lucide-react'

const projects = [
    {
        title: "Zapsters Platform",
        category: "Platform",
        description: "Complete digital ecosystem with advanced UI/UX and scalable architecture",
        icon: <Globe size={48} className="text-blue-400" />,
        gradient: "from-blue-500/20 to-purple-500/20",
        textGradient: "text-blue-500/20"
    },
    {
        title: "Student Community System",
        category: "Community",
        description: "Engagement platform for 150+ students with real-time features",
        icon: <Users size={48} className="text-green-400" />,
        gradient: "from-green-500/20 to-emerald-500/20",
        textGradient: "text-green-500/20"
    },
    {
        title: "Admin Panel Systems",
        category: "Dashboard",
        description: "Enterprise-grade dashboards with role-based access control",
        icon: <Shield size={48} className="text-purple-400" />,
        gradient: "from-purple-500/20 to-pink-500/20",
        textGradient: "text-purple-500/20"
    },
    {
        title: "Portfolio Websites",
        category: "Website",
        description: "Premium portfolios for clients across multiple industries",
        icon: <Smartphone size={48} className="text-orange-400" />,
        gradient: "from-orange-500/20 to-red-500/20",
        textGradient: "text-orange-500/20"
    },
    {
        title: "Startup MVPs",
        category: "Startup",
        description: "Rapid MVP development for early-stage startups",
        icon: <Rocket size={48} className="text-yellow-400" />,
        gradient: "from-yellow-500/20 to-orange-500/20",
        textGradient: "text-yellow-500/20"
    },
    {
        title: "Education Platforms",
        category: "SaaS",
        description: "Scalable learning management systems with modern UX",
        icon: <Sparkles size={48} className="text-cyan-400" />,
        gradient: "from-cyan-500/20 to-blue-500/20",
        textGradient: "text-cyan-500/20"
    }
]

export function WorkSection() {
    return (
        <section id="work" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="headline-2 mb-16 text-center text-black"
                >
                    Featured Work
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <BentoCard key={index} delay={0.1 * (index + 1)} className="p-0">
                            <div className={`w-full h-80 rounded-[2.5rem] bg-neutral-900 mb-8 flex items-center justify-center overflow-hidden border border-white/5 relative`}>
                                <div className="relative">
                                    {project.icon}
                                </div>
                            </div>
                            <div className="px-8 pb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                                        {project.category}
                                    </span>
                                    <div className="h-px w-8 bg-neutral-800" />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed font-light">{project.description}</p>
                            </div>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
