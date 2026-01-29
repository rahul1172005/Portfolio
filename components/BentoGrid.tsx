'use client'

import React from 'react'
import { BentoTopSkills } from './bento-items/BentoTopSkills'
import { BentoSquareGraph } from './bento-items/BentoSquareGraph'
import { BentoTechStack } from './bento-items/BentoTechStack'
import { BentoClients } from './bento-items/BentoClients'
import { BentoWorkWithVibe } from './bento-items/BentoWorkWithVibe'
import { BentoLogo } from './bento-items/BentoLogo'
import { BentoLocation } from './bento-items/BentoLocation'
import { BentoNextCohort } from './bento-items/BentoNextCohort'

export function BentoGrid() {
    return (
        <section className="px-4 md:px-12 max-w-7xl mx-auto pt-16 pb-28 relative z-[100] overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-6 h-auto md:h-[1000px] relative z-[200]">

                {/* 1. TOP HERO */}
                <div className="md:col-span-3 md:row-span-1">
                    <BentoTopSkills />
                </div>

                {/* 2. TOP RIGHT SQUARE */}
                <div className="md:col-span-1 md:row-span-1">
                    <BentoSquareGraph />
                </div>

                {/* 3. TALL LEFT — CLEAN ABSTRACT (NO INNER BOXES) */}
                <div className="md:col-span-2 md:row-span-2">
                    <BentoTechStack />
                </div>

                {/* 4. MIDDLE RIGHT WIDE — CLIENTS + BENTO4 */}
                <div className="md:col-span-2 md:row-span-1">
                    <BentoClients />
                </div>

                {/* 5. BOTTOM MID WIDE — WORK WITH VIBE */}
                <div className="md:col-span-2 md:row-span-1">
                    <BentoWorkWithVibe />
                </div>

                {/* 6. BOTTOM SQUARE LOGO */}
                <div className="md:col-span-1 md:row-span-1">
                    <BentoLogo />
                </div>

                {/* 7. BOTTOM SQUARE LOCATION */}
                <div className="md:col-span-1 md:row-span-1">
                    <BentoLocation />
                </div>

                {/* 8. FINAL CARD */}
                <div className="md:col-span-2 md:row-span-1">
                    <BentoNextCohort />
                </div>

            </div>
        </section>
    )
}
