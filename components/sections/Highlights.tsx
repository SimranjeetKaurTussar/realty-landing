import { FadeUp } from "@/components/ui/Motion";

const items = [
  { title: "Luxury Presentation", desc: "Premium glass UI with cinematic motion." },
  { title: "Verified Properties", desc: "Documentation checks before you shortlist." },
  { title: "Prime Locations", desc: "Top areas based on demand and growth." },
  { title: "Dedicated Support", desc: "From site visit to closing support." },
  { title: "Negotiation Help", desc: "We help you get the best deal." },
  { title: "Fast Follow-up", desc: "Quick callbacks for serious buyers." },
];

export function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-6xl px-4 py-16">
      <FadeUp>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Why clients choose us
        </h2>
        <p className="mt-2 text-slate-600">
          Built to look premium and convert better — like a luxury brand.
        </p>
      </FadeUp>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <FadeUp key={it.title} delay={i * 0.05}>
            <div className="glass rounded-3xl p-6">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500/90 to-emerald-500/90" />
              <div className="mt-4 text-lg font-semibold text-slate-900">{it.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
