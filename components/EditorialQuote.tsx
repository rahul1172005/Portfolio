'use client'

import React from 'react'
import Image from 'next/image'

export const EditorialQuote = () => {
    return (
        <div className="relative px-6 md:px-12 max-w-7xl mx-auto py-32 text-center overflow-hidden">

            {/* Background Image — FULL IMAGE VISIBLE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/quotes1.png"   // must be in public/
                    alt="Quote Background"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="object-contain object-center opacity-50 md:opacity-100" // Lower opacity on mobile for readability
                    style={{
                        transform: 'translate(0px, -6px) scale(2)', // ✅ X, Y, Zoom ONLY
                        willChange: 'transform'
                    }}
                />
            </div>

            {/* Quote Content */}
            <blockquote className="relative z-10 mx-auto max-w-5xl">
                <p className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] text-black">
                    “Wise men{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #9a9a9a, #5f5f5f, #c2c2c2, #4a4a4a)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        speak
                    </span>{' '}
                    less, yet every{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #9a9a9a, #5f5f5f, #c2c2c2, #4a4a4a)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        word
                    </span>{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #9a9a9a, #5f5f5f, #c2c2c2, #4a4a4a)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        cuts
                    </span>{' '}
                    through{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #9a9a9a, #5f5f5f, #c2c2c2, #4a4a4a)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        the noise
                    </span>.”
                </p>

                <footer className="mt-8">
                    <p className="text-sm font-bold uppercase tracking-[0.3em]">
                        —{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #9a9a9a, #5f5f5f, #c2c2c2, #4a4a4a)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Rahul R
                        </span>
                    </p>
                </footer>
            </blockquote>

        </div>
    )
}
