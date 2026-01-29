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
    children?: React.ReactNode;

    variant?: 'lime' | 'black' | 'outline' | 'white';
    noPadding?: boolean;
};

/**
 * EditorialStatCard
 * Strictly following the Cyber-Lime / Black Editorial aesthetic.
 * No metallic borders, no gradients, no 3D effects.
 */
const HardwareCapsuleStatCard: React.FC<HardwareCapsuleStatCardProps> = ({
    value,
    label,
    subLabel,
    icon: Icon,
    className,
    children,

    variant = 'lime', // Default to lime for that high-impact look
    noPadding = false,
}) => {
    // Determine styles based on variant
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
            className={cn(
                "relative flex flex-col justify-center rounded-[60px] transition-all duration-500 group overflow-hidden h-full",
                !noPadding && "p-6 md:p-10",
                getVariantStyles(),
                className
            )}
        >
            {/* Minimal Content */}
            <div className="relative z-10 flex flex-col h-full justify-center">
                {children ? (
                    children
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            {value && (
                                <div className="text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                                    {value}
                                </div>
                            )}
                            {Icon && (
                                <div className={cn(
                                    "w-16 h-16 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 duration-500",
                                    variant === 'lime' ? "border-black" : "border-[#d9ff00]"
                                )}>
                                    <Icon size={32} />
                                </div>
                            )}
                        </div>

                        <div className="space-y-1">
                            {label && (
                                <div className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none">
                                    {label}
                                </div>
                            )}
                            {subLabel && (
                                <div className={cn(
                                    "text-sm font-bold uppercase tracking-widest opacity-60",
                                    variant === 'lime' ? "text-black" : "text-white"
                                )}>
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
