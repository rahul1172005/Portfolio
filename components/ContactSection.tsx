'use client'

import React from 'react'

export const ContactSection = () => {
    return (
        <div id="contact" className="py-32 text-center border-t border-black/10">
            <h2 className="text-5xl md:text-[15rem] font-black mb-16 tracking-tighter text-black uppercase leading-[0.8] break-words">
                Let&apos;s<br />
                <span className="text-[#d9ff00]">Talk.</span>
            </h2>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-12 mt-24">
                <a
                    href="mailto:rahul1172005@gmail.com"
                    className="text-2xl font-black text-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    Email
                </a>
                <a
                    href="tel:+918610805559"
                    className="text-2xl font-black text-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    Phone
                </a>
                <a
                    href="https://www.linkedin.com/in/rahul-r-31b107381/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-black text-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/rahul1172005"
                    className="text-2xl font-black text-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    GitHub
                </a>
            </div>

            <footer className="py-12 bg-transparent text-center text-black text-s font-black uppercase tracking-[0.2em] border-t border-black/5 mt-24">
                2026 RAHUL R  ALL RIGHTS RESERVED
            </footer>
        </div>
    )
}
