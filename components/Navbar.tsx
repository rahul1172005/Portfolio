'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Ventures', href: '#ventures' },
        { name: 'Services', href: '#services' },
        { name: 'Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="absolute top-0 left-0 right-0 z-[9999] py-8 lg:py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#hero"
                    className="text-3xl lg:text-4xl font-black tracking-tighter text-black hover:scale-105 transition-transform flex-shrink-0"
                >
                    RAHUL
                </a>

                {/* Nav — ALWAYS VISIBLE (DESKTOP) */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-10 px-4 py-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="
                              relative
                              text-xs 
                              font-black 
                              text-black/80 
                              hover:text-black 
                              transition-colors 
                              uppercase 
                              tracking-[0.25em]
                              group
                              py-2
                            "
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                    ))}
                </div>

                {/* CTA Buttons (Desktop) */}
                <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                    {/* LET'S TALK */}
                    <a
                        href="#contact"
                        className="
                          bg-[#d9ff00] 
                          px-6 py-3 
                          rounded-full 
                          text-xs lg:text-sm font-black 
                          text-black 
                          whitespace-nowrap
                          hover:scale-105 
                          hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]
                          active:scale-95
                          transition-all 
                          duration-300
                          inline-flex items-center justify-center
                          shadow-md
                          flex-shrink-0
                        "
                    >
                        LET'S TALK
                    </a>

                    {/* CALL NOW */}
                    <a
                        href="tel:+918610805559"
                        className="
                          bg-[#d9ff00] 
                          px-6 py-3 
                          rounded-full 
                          text-xs lg:text-sm font-black 
                          text-black 
                          whitespace-nowrap
                          hover:scale-105 
                          hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]
                          active:scale-95
                          transition-all 
                          duration-300
                          inline-flex items-center justify-center
                          shadow-md
                          flex-shrink-0
                        "
                    >
                        CALL NOW
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-black focus:outline-none p-2 hover:scale-105 active:scale-95 transition-transform"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="
                      lg:hidden 
                      absolute top-24 left-6 right-6 
                      bg-white/95 backdrop-blur-md
                      border border-black/5 
                      rounded-[32px] 
                      overflow-hidden 
                      z-[10000] 
                      shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                    "
                >
                    <div className="flex flex-col p-8 gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                                  text-xl 
                                  font-black 
                                  text-black/80
                                  hover:text-[#d9ff00] 
                                  transition-colors 
                                  uppercase 
                                  tracking-[0.1em]
                                "
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile CTA Buttons - Compact */}
                        <div className="flex flex-col gap-3 mt-4">
                            {/* LET'S TALK */}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                                  w-full 
                                  bg-[#d9ff00] 
                                  text-black 
                                  text-center 
                                  py-3.5 
                                  rounded-full 
                                  text-sm 
                                  font-black 
                                  uppercase 
                                  tracking-tighter
                                  hover:bg-black hover:text-[#d9ff00]
                                  transition-all duration-300
                                  active:scale-98
                                  shadow-sm
                                "
                            >
                                LET'S TALK
                            </a>

                            {/* CALL NOW */}
                            <a
                                href="tel:+918610805559"
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                                  w-full 
                                  bg-[#d9ff00] 
                                  text-black 
                                  text-center 
                                  py-3.5 
                                  rounded-full 
                                  text-sm 
                                  font-black 
                                  uppercase 
                                  tracking-tighter
                                  hover:bg-black hover:text-[#d9ff00]
                                  transition-all duration-300
                                  active:scale-98
                                  shadow-sm
                                "
                            >
                                CALL NOW
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
