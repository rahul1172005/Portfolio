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

                    {/* PROJECTS */}
                    <HardwareCapsuleStatCard
                        impactHover
                        value="10+"
                        label="Projects"
                        variant="white"
                        style={{
                            backgroundImage: "url('/projects.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '150%',          // 🔥 SCALE
                            backgroundPosition: '60% 40%',   // 🔥 X Y
                        }}
                        className="md:col-span-2 text-black"
                    />

                    {/* USERS */}
                    <HardwareCapsuleStatCard
                        impactHover

                        value="10K+"
                        label="Users"
                        variant="white"
                        style={{
                            backgroundImage: "url('/users.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '140%',
                            backgroundPosition: '50% 50%',
                        }}
                        className="text-black"
                    />

                    {/* SUCCESS */}
                    <HardwareCapsuleStatCard
                        impactHover

                        value="98%"
                        label="Success"
                        variant="white"
                        style={{
                            backgroundImage: "url('/success.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '170%',
                            backgroundPosition: '50% 30%',
                        }}
                        className="text-black"
                    />

                    {/* COUNTRIES */}
                    <HardwareCapsuleStatCard
                        impactHover

                        value="2"
                        label="Countries"
                        variant="white"
                        style={{
                            backgroundImage: "url('/countries.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '160%',
                            backgroundPosition: '45% 55%',
                        }}
                        className="text-black "
                    />

                    {/* RATING */}
                    <HardwareCapsuleStatCard
                        impactHover

                        value="5.0"
                        label="Rating"
                        variant="white"
                        style={{
                            backgroundImage: "url('/rating.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '150%',
                            backgroundPosition: '55% 45%',
                        }}
                        className="md:col-span-2 text-black"
                    />

                    {/* RESPONSE */}
                    <HardwareCapsuleStatCard
                        impactHover

                        value="<24h"
                        label="Response"
                        variant="white"
                        style={{
                            backgroundImage: "url('/response.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '180%',
                            backgroundPosition: '50% 35%',
                        }}
                        className="text-black"
                    />

                </div>
            </div>
        </div>
    )
}
