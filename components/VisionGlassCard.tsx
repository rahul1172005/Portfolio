import React from "react";
import clsx from "clsx";

type VisionGlassCardProps = {
    children?: React.ReactNode;
    className?: string;
    noPadding?: boolean;
};

const VisionGlassCard: React.FC<VisionGlassCardProps> = ({
    children,
    className,
    noPadding = false,
}) => {
    return (
        <div
            className={clsx(
                `
        relative
        rounded-[32px]
        overflow-hidden

        /* Core glass */
        bg-gradient-to-br
        from-[#0b0f14]
        via-[#070a0f]
        to-[#040608]

        /* Ambient glow */
        shadow-[0_0_80px_rgba(0,120,255,0.08),0_40px_80px_rgba(0,0,0,0.9)]

        `,
                className
            )}
        >
            {/* Edge glow (top-right) */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

            {/* Inner vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40" />

            {/* Subtle glass grain */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSIzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')]" />

            {/* Content */}
            <div className={clsx("relative z-10", noPadding ? "p-0" : "p-6")}>
                {children}
            </div>
        </div>
    );
};

export default VisionGlassCard;
