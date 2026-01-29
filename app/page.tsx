'use client'

import React from 'react'
import { Hero } from '@/components/Hero'
import { BentoGrid } from '@/components/BentoGrid'
import { IntroCards } from '@/components/IntroCards'
import { EditorialQuote } from '@/components/EditorialQuote'
import { SelectedWork } from '@/components/SelectedWork'
import { Services } from '@/components/Services'
import { ImpactStats } from '@/components/ImpactStats'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-[#d9ff00] selection:text-black overflow-x-hidden w-full">

            {/* HERO SECTION */}
            <Hero />

            {/* ================= INTRO CARDS (ALIGNED CONTAINER) ================= */}
            <IntroCards />

            {/* ================= ABOUT (FULL WIDTH, INNER RAILS) ================= */}
            <section
                id="about"
                className="pt-0 pb-24 w-full mx-auto space-y-24 bg-white"
            >
                {/* ================= BENTO GRID (FULL WIDTH BUT ALIGNED GUTTERS) ================= */}
                <BentoGrid />


                {/* ================= EDITORIAL QUOTE ================= */}
                <EditorialQuote />

            </section>

            {/* ================= SELECTED WORK ================= */}
            <SelectedWork />

            {/* ================= SERVICES ================= */}
            <Services />

            {/* ================= IMPACT ================= */}
            <ImpactStats />

            {/* ================= FINAL CONTACT ================= */}
            <ContactSection />

        </main>
    )
}
