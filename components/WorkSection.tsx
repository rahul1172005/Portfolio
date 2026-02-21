'use client'

import React from 'react'
import BentoCard from '@/components/BentoCard'

export const WorkSection = () => {
    return (
        <section id="work-legacy" className="py-24">
            <h2 className="text-4xl font-bold mb-12">Legacy Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BentoCard>
                    <h3 className="text-2xl font-bold">Project Alpha</h3>
                    <p>Internal experimental build</p>
                </BentoCard>
                <BentoCard>
                    <h3 className="text-2xl font-bold">Project Beta</h3>
                    <p>Archived prototype</p>
                </BentoCard>
            </div>
        </section>
    )
}

export default WorkSection
