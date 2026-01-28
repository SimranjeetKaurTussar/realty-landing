"use client";

import { FadeUp, Float } from "@/components/ui/Motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-sky-50 to-white" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="absolute top-10 right-0 h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-3xl" />
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_15%,black,transparent)] bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 md:pt-22">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 soft-border">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                Luxury Listings • Cinematic Presentation
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Property listings that feel like a premium brand film.
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                One-page landing designed for trust, style and conversions—glassy UI, smooth motion,
                and a lead panel demo (frontend only).
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#listings"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-lg transition hover:opacity-90"
                >
                  Explore Listings
                </a>
                <a
                  href="#lead"
                  className="rounded-2xl glass px-5 py-3 text-slate-900 transition hover:shadow-xl"
                >
                  Request Callback
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.26}>
              <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-slate-700">
                <div className="glass rounded-2xl p-4">
                  <div className="text-slate-900 font-semibold">Verified</div>
                  <div className="text-slate-600">Legal checks</div>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-slate-900 font-semibold">Prime</div>
                  <div className="text-slate-600">Top locations</div>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-slate-900 font-semibold">Fast</div>
                  <div className="text-slate-600">Quick follow-up</div>
                </div>
              </div>
            </FadeUp>
          </div>

          <motion.div style={{ y }} className="relative">
            <div className="glass rounded-3xl p-3">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
                  alt="Luxury interior"
                  className="h-[360px] w-full object-cover md:h-[430px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-emerald-200/25" />
              </div>
            </div>

            <Float>
              <div className="absolute -bottom-6 -left-6 glass rounded-3xl p-4">
                <div className="text-sm text-slate-600">Starting from</div>
                <div className="text-xl font-semibold text-slate-900">₹ 98 Lakh</div>
              </div>
            </Float>

            <Float>
              <div className="absolute -top-6 -right-4 glass rounded-3xl p-4">
                <div className="text-sm text-slate-600">Hot area</div>
                <div className="text-lg font-semibold text-slate-900">Chandigarh</div>
              </div>
            </Float>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
