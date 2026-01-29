'use client'

import React from "react";
import { cn } from "@/lib/utils";

type CapsuleGlassProps = {
    children?: React.ReactNode;
    className?: string;
};

const CapsuleGlass: React.FC<CapsuleGlassProps> = ({ children, className }) => {
    return (
        <div
            className={cn(
                "relative inline-flex items-center justify-center h-14 px-10 rounded-full",
                "bg-gradient-to-b from-[#e6e6e6] via-[#bfbfbf] to-[#8f8f8f]",
                "shadow-[0_10px_25px_rgba(0,0,0,0.6)]",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1",
                "transition-all duration-300",
                className
            )}
        >
            {/* Inner black glass */}
            <div
                className="absolute inset-[3px] rounded-full bg-gradient-to-b from-[#0b0b0b] via-[#050505] to-[#000000] shadow-[inset_0_2px_4px_rgba(255,255,255,0.08),inset_0_-4px_8px_rgba(0,0,0,0.9)]"
            />

            {/* Inner rim highlight */}
            <div
                className="pointer-events-none absolute inset-[3px] rounded-full ring-1 ring-white/10"
            />

            {/* Top glass sheen */}
            <div
                className="pointer-events-none absolute inset-[3px] rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent"
            />

            {/* Content */}
            <div className="relative z-10 text-white/90 font-medium">
                {children}
            </div>
        </div>
    );
};

export default CapsuleGlass;
