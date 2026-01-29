'use client'

import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { ContactFormData } from '@/types/contact'

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        projectType: 'Website / Web App',
        budgetRange: '₹10k – ₹50k',
        projectDetails: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage('')

        // Validation
        if (!formData.fullName.trim()) {
            setErrorMessage('Please enter your name')
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setErrorMessage('Please enter a valid email address')
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        if (!formData.projectDetails.trim()) {
            setErrorMessage('Please provide project details')
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        try {
            // Submit to Firestore
            const contactSubmission: Omit<ContactFormData, 'submittedAt'> & { submittedAt: any } = {
                fullName: formData.fullName.trim(),
                email: formData.email.trim(),
                projectType: formData.projectType,
                budgetRange: formData.budgetRange,
                projectDetails: formData.projectDetails.trim(),
                submittedAt: serverTimestamp(),
                status: 'new'
            }

            await addDoc(collection(db, 'contact-submissions'), contactSubmission)

            // Success
            setSubmitStatus('success')
            setFormData({
                fullName: '',
                email: '',
                projectType: 'Website / Web App',
                budgetRange: '₹10k – ₹50k',
                projectDetails: ''
            })

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } catch (error) {
            console.error('Error submitting form:', error)
            setErrorMessage('Failed to submit. Please try again or email directly.')
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div id="contact" className="py-32 text-center border-t border-black/10">
            <h2 className="text-5xl md:text-[15rem] font-black mb-16 tracking-tighter text-black uppercase leading-[0.8] break-words">
                Let&apos;s<br />
                <span className="text-[#d9ff00]">Talk.</span>
            </h2>

            {/* ================= USER INTAKE FORM ================= */}
            <div className="max-w-4xl mx-auto mt-24 px-6 md:px-0">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

                    {/* Full Name */}
                    <div>
                        <label className="block text-xs font-black uppercase tracking-[0.3em] mb-2 text-black/60">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
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
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@company.com"
                            required
                            className="w-full h-14 px-5 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black"
                        />
                    </div>

                    {/* Project Type */}
                    <div>
                        <label className="block text-xs font-black uppercase tracking-[0.3em] mb-2 text-black/60">
                            Project Type
                        </label>
                        <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full h-14 px-5 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black"
                        >
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
                        <select
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleInputChange}
                            className="w-full h-14 px-5 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black"
                        >
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
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleInputChange}
                            rows={5}
                            placeholder="Tell me about your project, goals, and timeline..."
                            required
                            className="w-full px-5 py-4 bg-white border border-black/10 rounded-2xl font-bold tracking-tight focus:outline-none focus:border-black resize-none"
                        />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="md:col-span-2 p-4 bg-[#d9ff00] rounded-2xl text-center">
                            <p className="font-black uppercase tracking-wide text-black">
                                ✓ Message sent successfully! I&apos;ll get back to you soon.
                            </p>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="md:col-span-2 p-4 bg-red-100 border border-red-300 rounded-2xl text-center">
                            <p className="font-black uppercase tracking-wide text-red-700">
                                {errorMessage}
                            </p>
                        </div>
                    )}

                    {/* Submit Buttons */}
                    <div className="md:col-span-2 flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                                h-16 px-20 rounded-full
                                bg-black text-white
                                font-black uppercase tracking-widest
                                hover:bg-[#d9ff00] hover:text-black
                                transition-all
                                disabled:opacity-50 disabled:cursor-not-allowed
                                w-full md:w-auto
                            "
                        >
                            {isSubmitting ? 'Sending...' : 'Send Request'}
                        </button>

                        <a
                            href="tel:+918610805559"
                            className="
                                h-16 px-20 rounded-full
                                bg-[#d9ff00] text-black
                                font-black uppercase tracking-widest
                                hover:bg-black hover:text-white
                                transition-all
                                flex items-center justify-center
                                w-full md:w-auto
                            "
                        >
                            Call Now
                        </a>
                    </div>

                </form>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-12 mt-24">
                <a
                    href="mailto:rahul1172005@gmail.com"
                    className="text-2xl font-black text-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    Email
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
                    href="#"
                    className="text-2xl font-black text-black hover:text-[#d9ff00] transition-colors uppercase tracking-tighter"
                >
                    GitHub
                </a>
            </div>

            <footer className="py-12 bg-white text-center text-black text-xs font-black uppercase tracking-[0.5em] border-t border-black/5 mt-24">
                © 2026 RAHUL R. // ALL RIGHTS RESERVED
            </footer>
        </div>
    )
}
