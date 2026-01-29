'use client'

import React from 'react'
import HardwareCapsuleStatCard from '@/components/HardwareCapsuleStatCard'

export const ImpactStats = () => {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto mt-32 md:mt-60">
            <div id="impact" className="space-y-12">
                <div className="flex justify-center items-baseline border-b border-black/5 pb-10">
                    <h3 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-black text-center leading-none">
                        Impact STATS
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 h-auto md:h-[600px]">

                    {/* Projects — iOS ORANGE (Polished Gradient) */}
                    <HardwareCapsuleStatCard
                        value="10+"
                        label="Projects"
                        variant="white"
                        className="
  md:col-span-2 
  bg-gradient-to-br from-[#FF9F0A] via-[#FF7A00] to-[#FF5A00]
  text-black
  shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
"
                    />

                    {/* Users — iOS DARK BLUE (Polished Gradient) */}
                    <HardwareCapsuleStatCard
                        value="10K+"
                        label="Users"
                        variant="white"
                        className="
  bg-gradient-to-br from-[#0A84FF] via-[#0057D8] to-[#003EAA]
  text-black
  shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]
"
                    />

                    {/* Success — iOS SYSTEM YELLOW (Polished Gradient) */}
                    <HardwareCapsuleStatCard
                        value="98%"
                        label="Success"
                        variant="white"
                        className="
  bg-gradient-to-br from-[#FFD60A] via-[#FFCC00] to-[#E6B800]
  text-black
  shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
"
                    />

                    {/* Countries — iOS WHITE GRADIENT (Polished) */}
                    <HardwareCapsuleStatCard
                        value="2"
                        label="Countries"
                        variant="white"
                        className="
  bg-gradient-to-br from-[#FFFFFF] via-[#F5F5F7] to-[#EDEDED]
  text-black
  border border-black/10
  shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
"
                    />

                    {/* Rating — DARKER iOS GREEN (Polished Gradient) */}
                    <HardwareCapsuleStatCard
                        value="5.0"
                        label="Rating"
                        variant="white"
                        className="
  md:col-span-2
  bg-gradient-to-br from-[#248A3D] via-[#1F7A35] to-[#155D28]
  text-black
  shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
"
                    />

                    {/* Response — iOS DEEP RED (Darker Polished) */}
                    <HardwareCapsuleStatCard
                        value="<24h"
                        label="Response"
                        variant="white"
                        className="
  bg-gradient-to-br from-[#D70015] via-[#B00012] to-[#8B000F]
  text-black
  shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
"
                    />

                </div>
            </div>
        </div>
    )
}
