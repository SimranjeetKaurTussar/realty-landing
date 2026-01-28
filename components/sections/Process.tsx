import { FadeUp } from "@/components/ui/Motion";

const steps = [
  { title: "Shortlist", desc: "Choose listings based on budget and location." },
  { title: "Site Visit", desc: "Schedule visit and evaluate the property." },
  { title: "Documentation", desc: "We support checks and paperwork." },
  { title: "Closing", desc: "Finalize deal and move forward confidently." },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16">
      <FadeUp>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">How it works</h2>
        <p className="mt-2 text-slate-600">Simple process with premium experience.</p>
      </FadeUp>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.05}>
            <div className="glass rounded-3xl p-6">
              <div className="text-sm text-slate-600">Step {i + 1}</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{s.title}</div>
              <div className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</div>
              <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-sky-500/40 to-emerald-500/40" />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
