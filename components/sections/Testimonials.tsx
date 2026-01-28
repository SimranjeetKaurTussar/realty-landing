"use client";

import { FadeUp, Float } from "@/components/ui/Motion";

const reviews = [
  { name: "Aman S.", text: "Very premium experience. Listings looked trustworthy and the process was smooth." },
  { name: "Simran K.", text: "I loved the presentation style. It feels high-end and professional." },
  { name: "Rohit G.", text: "Quick follow-up and clear guidance on documentation. Great support." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
      <FadeUp>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Client reviews</h2>
        <p className="mt-2 text-slate-600">Social proof that builds trust.</p>
      </FadeUp>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <FadeUp key={r.name} delay={i * 0.05}>
            <Float>
              <div className="glass rounded-3xl p-6">
                <div className="text-slate-900 font-semibold">{r.name}</div>
                <div className="mt-3 text-sm leading-relaxed text-slate-600">“{r.text}”</div>
                <div className="mt-4 text-sm text-slate-700">★★★★★</div>
              </div>
            </Float>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
