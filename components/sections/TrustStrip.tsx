import { FadeUp } from "@/components/ui/Motion";

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <FadeUp>
        <div className="glass rounded-3xl p-6">
          <div className="grid gap-4 text-sm text-slate-700 md:grid-cols-4">
            <div className="rounded-2xl bg-white/60 p-4 soft-border">
              <div className="font-semibold text-slate-900">200+ Listings</div>
              <div className="text-slate-600">Curated inventory</div>
            </div>
            <div className="rounded-2xl bg-white/60 p-4 soft-border">
              <div className="font-semibold text-slate-900">4.8 Rating</div>
              <div className="text-slate-600">Client satisfaction</div>
            </div>
            <div className="rounded-2xl bg-white/60 p-4 soft-border">
              <div className="font-semibold text-slate-900">Legal Verified</div>
              <div className="text-slate-600">Safe documentation</div>
            </div>
            <div className="rounded-2xl bg-white/60 p-4 soft-border">
              <div className="font-semibold text-slate-900">Loan Support</div>
              <div className="text-slate-600">Easy approvals</div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
