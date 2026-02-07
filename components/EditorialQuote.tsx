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

            {/* Quote Sentence BELOW image */}
            <div className="relative z-10 mt-[55vh] md:mt-[60vh] flex justify-center">
                <p
                    className="text-2xl md:text-5xl font-black tracking-tighter leading-[0.95] text-black-500 text-center max-w-5xl"
                    style={{
                        transform: 'translate(0px, 100px) scale(1)',
                        willChange: 'transform'
                    }}
                >
                    Wise men speak less, yet every word cuts through the noise
                    <br />
                    <span className="block mt-4 text-xl md:text-3xl font-black">
                        — Rahul R
                    </span>
                </p>
            </div>

        </div>
    )
}
