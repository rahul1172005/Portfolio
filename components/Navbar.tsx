'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="absolute top-0 left-0 right-0 z-[9999] py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#hero"
                    className="text-4xl font-black tracking-tighter text-black hover:scale-105 transition-transform"
                >
                    RAHUL
                </a>

                {/* Nav — ALWAYS VISIBLE (DESKTOP) */}
                <div className="hidden md:flex items-center gap-12 px-12 py-5">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="
                              text-xs 
                              font-black 
                              text-black 
                              hover:text-black 
                              transition-colors 
                              uppercase 
                              tracking-[0.3em]
                            "
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* CTA Buttons (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* LET'S TALK */}
                    <a
                        href="#contact"
                        className="
                          bg-[#d9ff00] 
                          px-8 py-4 
                          rounded-[30px] 
                          text-sm font-black 
                          text-black 
                          uppercase tracking-tighter 
                          hover:scale-105 
                          transition-transform 
                          inline-block 
                          shadow-md
                        "
                    >
                        LET'S TALK
                    </a>

                    {/* CALL NOW */}
                    <a
                        href="tel:+918610805559"
                        className="
                          bg-[#d9ff00] 
                          px-8 py-4 
                          rounded-[30px] 
                          text-sm font-black 
                          text-black 
                          uppercase tracking-tighter 
                          hover:scale-105 
                          transition-transform 
                          inline-block 
                          shadow-md
                        "
                    >
                        CALL NOW
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-black"
                >
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="
                      md:hidden 
                      absolute top-24 left-6 right-6 
                      bg-white 
                      border-2 border-black/5 
                      rounded-[40px] 
                      overflow-hidden 
                      z-[10000] 
                      shadow-[0_30px_60px_rgba(0,0,0,0.1)]
                    "
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                                  text-2xl 
                                  font-black 
                                  text-black 
                                  hover:text-[#d9ff00] 
                                  transition-colors 
                                  uppercase 
                                  tracking-tighter
                                "
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile CTA Buttons - Compact */}
                        <div className="flex flex-col gap-3 mt-2">
                            {/* LET'S TALK */}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                                  w-full 
                                  bg-[#d9ff00] 
                                  text-black 
                                  text-center 
                                  py-3 
                                  rounded-[18px] 
                                  text-sm 
                                  font-black 
                                  uppercase 
                                  tracking-tighter
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
                                  py-3 
                                  rounded-[18px] 
                                  text-sm 
                                  font-black 
                                  uppercase 
                                  tracking-tighter
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
