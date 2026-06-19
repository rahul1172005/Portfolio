'use client'

import React from 'react'
import { BentoTopSkills } from './bento-items/BentoTopSkills'
import { BentoSquareGraph } from './bento-items/BentoSquareGraph'
import { BentoTechStack } from './bento-items/BentoTechStack'
import { BentoClients } from './bento-items/BentoClients'
import { BentoWorkWithVibe } from './bento-items/BentoWorkWithVibe'

export function BentoGrid() {
    return (
        <section className="px-3 md:px-12 max-w-7xl mx-auto pt-16 pb-28 relative z-[100] overflow-hidden">

            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-2 md:gap-6 h-auto md:h-[750px] relative z-[200]">

                {/* 1. TOP HERO */}
                <div className="col-span-2 md:col-span-3 md:row-span-1">
                    <BentoTopSkills />
                </div>

                {/* 2. TOP RIGHT SQUARE */}
                <div className="hidden md:block col-span-1 md:col-span-1 md:row-span-1">
                    <BentoSquareGraph />
                </div>

                {/* 3. TALL LEFT — CLEAN ABSTRACT (NO INNER BOXES) */}
                <div className="col-span-2 md:col-span-2 md:row-span-2">
                    <BentoTechStack />
                </div>

                {/* 4. MIDDLE RIGHT WIDE — CLIENTS + BENTO4 */}
                <div className="col-span-2 md:col-span-2 md:row-span-1">
                    <BentoClients />
                </div>

                {/* 5. BOTTOM MID WIDE — WORK WITH VIBE */}
                <div className="col-span-2 md:col-span-2 md:row-span-1">
                    <BentoWorkWithVibe />
                </div>


            </div>
        </section>
    )
}
