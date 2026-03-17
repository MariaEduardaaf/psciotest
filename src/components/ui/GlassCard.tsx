"use client";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tiltMax?: number;
  glare?: boolean;
}

export function GlassCard({
  children,
  className = "",
  tiltMax = 12,
  glare = true,
}: GlassCardProps) {
  const tiltRef = useMouseTilt({ maxTilt: tiltMax, glare, scale: 1.03 });

  return (
    <div
      ref={tiltRef}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/[0.04] backdrop-blur-xl
        border border-white/[0.08]
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]
        hover:border-white/[0.12]
        transition-shadow duration-500
        ${className}
      `}
    >
      {glare && (
        <div className="tilt-glare absolute inset-0 pointer-events-none rounded-2xl z-10" />
      )}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-20">
        {children}
      </div>
    </div>
  );
}
