'use client'

import React from 'react'

export const ContactSection = () => {
    return (
        <div id="contact" className="py-32 text-center border-t border-black/10">
            <h2 className="text-5xl md:text-[15rem] font-black mb-16 tracking-tighter text-black uppercase leading-[0.8] break-words">
                Let&apos;s<br />
                <span className="text-[#d9ff00]">Talk.</span>
            </h2>

            {/* ================= USER INTAKE FORM ================= */}
            <div className="max-w-4xl mx-auto mt-24 px-6 md:px-0">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

                    {/* Full Name */}
                    <div>
                        <label className="block text-xs font-black uppercase tracking-[0.3em] mb-2 text-black/60">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full h-14 px-5 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-black uppercase tracking-[0.3em] mb-2 text-black/60">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full h-14 px-5 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black"
                        />
                    </div>

                    {/* Project Type */}
                    <div>
                        <label className="block text-xs font-black uppercase tracking-[0.3em] mb-2 text-black/60">
                            Project Type
                        </label>
                        <select className="w-full h-14 px-5 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black">
                            <option>Website / Web App</option>
                            <option>Mobile App</option>
                            <option>UI/UX Design</option>
                            <option>SaaS Platform</option>
                            <option>AI / Automation</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="block text-xs font-black uppercase tracking-[0.3em] mb-2 text-black/60">
                            Budget Range
                        </label>
                        <select className="w-full h-14 px-5 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black">
                            <option>₹10k – ₹50k</option>
                            <option>₹50k – ₹1L</option>
                            <option>₹1L – ₹5L</option>
                            <option>₹5L+</option>
                        </select>
                    </div>

                    {/* Project Details */}
                    <div className="md:col-span-2">
                        <label className="block text-xs font-black uppercase tracking-[0.3em] mb-2 text-black/60">
                            Project Details
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Tell me about your project, goals, and timeline..."
                            className="w-full px-5 py-4 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 flex justify-center mt-10">
                        <button
                            type="submit"
                            className="
    h-16 px-20 rounded-full
    bg-black text-white
    font-black uppercase tracking-widest
    hover:bg-[#d9ff00] hover:text-black
    transition-all
  "
                        >
                            Send Request
                        </button>
                    </div>

                </form>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-12 mt-24">
                <a
                    href="mailto:rahul@zapsters.com"
                    className="text-2xl font-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    Email
                </a>
                <a
                    href="#"
                    className="text-2xl font-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    LinkedIn
                </a>
                <a
                    href="#"
                    className="text-2xl font-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    GitHub
                </a>
            </div>

            <footer className="py-12 bg-white text-center text-black/20 text-xs font-black uppercase tracking-[0.5em] border-t border-black/5 mt-24">
                © 2026 RAHUL R. // ALL RIGHTS RESERVED
            </footer>
        </div>
    )
}
