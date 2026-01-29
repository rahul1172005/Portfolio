'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type HardwareCapsuleStatCardProps = {
    value?: string;
    label?: string;
    subLabel?: string;
    icon?: LucideIcon;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;

    variant?: 'lime' | 'black' | 'outline' | 'white';
    noPadding?: boolean;

    // ✅ Only for ImpactStats
    impactHover?: boolean;
};

const HardwareCapsuleStatCard: React.FC<HardwareCapsuleStatCardProps> = ({
    value,
    label,
    subLabel,
    icon: Icon,
    className,
    style,
    children,

    variant = 'lime',
    noPadding = false,
    impactHover = false,
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'black':
                return "bg-black text-white";
            case 'outline':
                return "bg-black border-4 border-[#d9ff00] text-white";
            case 'white':
                return "bg-white text-black";
            case 'lime':
            default:
                return "bg-[#d9ff00] text-black";
        }
    }

    return (
        <div
            style={style}
            className={cn(
                "relative flex flex-col justify-center rounded-[32px] md:rounded-[60px] transition-all duration-500 group overflow-hidden h-full",
                !noPadding && "p-4 md:p-10",
                getVariantStyles(),
                className
            )}
        >
            {/* ================= BLUR OVERLAY — IMPACT ONLY ================= */}
            {impactHover && (
                <div
                    className="
                      absolute inset-0 z-0
                      opacity-0 group-hover:opacity-100
                      backdrop-blur-lg bg-white/70
                      transition-all duration-500
                    "
                />
            )}

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 flex flex-col h-full justify-center">
                {children ? (
                    children
                ) : (
                    <div className="space-y-3 md:space-y-4">
                        <div className="flex justify-between items-start">

                            {/* VALUE — BLACK ON HOVER (IMPACT ONLY) */}
                            {value && (
                                <div
                                    className={cn(
                                        `
                                        text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase
                                        opacity-0 translate-y-6
                                        group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-500 ease-out
                                        `,
                                        impactHover ? "text-black" : ""
                                    )}
                                >
                                    {value}
                                </div>
                            )}

                            {Icon && (
                                <div className={cn(
                                    "w-12 h-12 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 duration-500",
                                    variant === 'lime' ? "border-black" : "border-[#d9ff00]"
                                )}>
                                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                            )}
                        </div>

                        {/* LABEL + SUBLABEL — BLACK ON HOVER (IMPACT ONLY) */}
                        <div className="space-y-1">
                            {label && (
                                <div
                                    className={cn(
                                        `
                                        text-base md:text-2xl font-black uppercase tracking-tight leading-none
                                        opacity-0 translate-y-4
                                        group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-500 ease-out delay-75
                                        `,
                                        impactHover ? "text-black" : ""
                                    )}
                                >
                                    {label}
                                </div>
                            )}

                            {subLabel && (
                                <div
                                    className={cn(
                                        `
                                        text-xs md:text-sm font-bold uppercase tracking-widest
                                        opacity-0 translate-y-3
                                        group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-500 ease-out delay-150
                                        `,
                                        impactHover ? "text-black" : ""
                                    )}
                                >
                                    {subLabel}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HardwareCapsuleStatCard;
