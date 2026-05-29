"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sun, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d2137]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/hero_bg.jpg"
          alt="Solar installation"
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2137]/95 via-[#0d2137]/70 to-[#0d2137]/40" />
        {/* Orange accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e8821a] via-[#f5c842] to-[#e8821a]" />
      </div>

      {/* Animated solar rays */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10 hidden lg:block">
        <div className="absolute inset-0 rounded-full border-2 border-[#f5c842] animate-ping" style={{ animationDuration: "3s" }} />
        <div className="absolute inset-8 rounded-full border-2 border-[#e8821a] animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
        <div className="absolute inset-16 rounded-full border-2 border-[#e8821a] animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
        <Sun className="absolute inset-0 m-auto text-[#f5c842] w-16 h-16" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8821a]/20 border border-[#e8821a]/30 text-[#f5c842] text-sm font-medium mb-6">
            <Zap size={14} className="fill-current" />
            Trusted Solar Energy Experts Since 2015
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Power Your World{" "}
            <span className="text-[#e8821a]">With Clean</span>
            <br />Solar Energy
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
            Professional solar system design, installation, and energy management
            solutions for homes and businesses across Southern Africa.
            From Vanderbijlpark to Harare — we bring the sun to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#e8821a] hover:bg-[#c46a0e] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-5">
            {[
              { icon: Shield, text: "Reg. 2020/519615/07 (SA)" },
              { icon: Sun, text: "10+ Years Experience" },
              { icon: Zap, text: "4 Countries Served" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                <Icon size={14} className="text-[#e8821a]" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
