"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Shield, Cpu } from "lucide-react"
import { Hero3DScene } from "./hero-3d-scene"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 min-h-[90vh] flex items-center justify-center -mt-[var(--navbar-height)] pt-[var(--navbar-height)]">
      {/* 3D Glass Apple Background Scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100/50" />
      
      <Hero3DScene />

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 pointer-events-none mt-8 sm:mt-0">
        <div className="mx-auto max-w-4xl text-center pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 inline-flex items-center rounded-full border border-slate-200/60 bg-white/60 px-5 py-2 backdrop-blur-xl shadow-sm"
          >
            <span className="text-sm font-medium text-slate-700 tracking-wide">AI-Powered Smart Agriculture</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl text-balance"
          >
            AI Smart Farm Guardian.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-10 text-lg sm:text-xl leading-relaxed text-pretty max-w-2xl mx-auto text-slate-500 font-light"
          >
            Real-time monitoring and intelligent decision-making using IoT sensors and cloud integration for smarter visually-optimized farming operations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 shadow-lg transition-all duration-300">
              <Link href="/dashboard">
                View Live Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100/50 backdrop-blur-md transition-all duration-300 bg-white/50 shadow-sm">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </motion.div>
        </div>

        {/* Feature Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Activity className="h-5 w-5 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">Live 3D Tracking</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Shield className="h-5 w-5 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">Smart Alerts</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Cpu className="h-5 w-5 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">IoT Integration</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
