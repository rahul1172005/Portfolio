'use client'

import React from 'react'
import Image from 'next/image'

export const EditorialQuote = () => {
    return (
        <div className="relative px-6 md:px-12 max-w-7xl mx-auto py-32 overflow-hidden">

            {/* Background Image — FULL IMAGE VISIBLE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/quotes1.png"
                    alt="Quote Background"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="object-contain object-center md:opacity-100"
                    style={{
                        transform: 'translate(0px, -70px) scale(1.8)',
                        willChange: 'transform'
                    }}
                />
            </div>

            {/* Spacer so marquee is BELOW image */}
            <div className="relative z-10 mt-[55vh] md:mt-[60vh] overflow-hidden">

                {/* MARQUEE WRAPPER */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee gap-16">

                        {/* DUPLICATED CONTENT FOR SEAMLESS LOOP */}
                        {[1, 2].map((i) => (
                            <p
                                key={i}
                                className="text-2xl md:text-5xl font-black tracking-tighter leading-[0.95] whitespace-nowrap text-black-500"
                            >
                                Wise men speak less, yet every word cuts through the noise — Rahul R
                            </p>
                        ))}

                    </div>
                </div>

            </div>

            {/* LOCAL STYLES */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 22s linear infinite;
                    will-change: transform;
                }
            `}</style>

        </div>
    )
}
