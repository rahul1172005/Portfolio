'use client'

import React from 'react'
import BentoCard from '@/components/BentoCard'

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24">
            <h2 className="text-4xl font-bold mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BentoCard>
                    <h3 className="text-xl font-bold">Frontend</h3>
                    <p>React, Next.js, TypeScript</p>
                </BentoCard>
                <BentoCard>
                    <h3 className="text-xl font-bold">Backend</h3>
                    <p>Node.js, Firebase</p>
                </BentoCard>
                <BentoCard>
                    <h3 className="text-xl font-bold">Design</h3>
                    <p>Figma, UI/UX</p>
                </BentoCard>
            </div>
        </section>
    )
}

export default SkillsSection
