"use client";

import { FadeUp } from "@/components/ui/Motion";
import { useEffect, useMemo, useState } from "react";

type LeadStatus = "New" | "Contacted" | "Closed";
type Lead = {
  id: string;
  name: string;
  phone: string;
  budget: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
};

const STORAGE_KEY = "luxerealty_leads_v1";

function loadLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    return [];
  }
}

function saveLeads(leads: Lead[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function LeadAndContact() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  useEffect(() => {
    setLeads(loadLeads());
  }, []);

  const count = useMemo(() => leads.length, [leads]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const budget = String(fd.get("budget") || "");
    const message = String(fd.get("message") || "");

    if (!name || !phone) return;

    const newLead: Lead = {
      id: crypto.randomUUID(),
      name,
      phone,
      budget,
      message,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    const next = [newLead, ...leads];
    setLeads(next);
    saveLeads(next);

    e.currentTarget.reset();
    setStatus("ok");
    setTimeout(() => setStatus("idle"), 2500);
  }

  function updateStatus(id: string, status: LeadStatus) {
    const next = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(next);
    saveLeads(next);
  }

  function removeLead(id: string) {
    const next = leads.filter((l) => l.id !== id);
    setLeads(next);
    saveLeads(next);
  }

  function clearAll() {
    setLeads([]);
    saveLeads([]);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(leads, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="lead" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FadeUp>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Contact + Lead Capture
              </h2>
              <p className="mt-2 text-slate-600">
                Frontend-only demo: leads are saved in your browser (localStorage).
              </p>

              <div className="mt-6 glass rounded-3xl p-5">
                <div className="text-sm text-slate-600">Quick info</div>
                <div className="mt-2 text-slate-900 font-semibold">Call/WhatsApp: +91 90000 00000</div>
                <div className="text-slate-600 text-sm">Email: hello@luxerealty.com</div>
                <div className="mt-4 text-sm text-slate-600">
                  Saved leads in this device: <span className="font-semibold text-slate-900">{count}</span>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-6">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-slate-700">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700">Phone (WhatsApp)</label>
                  <input
                    name="phone"
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border focus:ring-2 focus:ring-sky-200"
                    placeholder="+91..."
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700">Budget</label>
                  <select
                    name="budget"
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border"
                    defaultValue="₹ 50L - ₹ 1Cr"
                  >
                    <option>₹ 50L - ₹ 1Cr</option>
                    <option>₹ 1Cr - ₹ 2Cr</option>
                    <option>₹ 2Cr+</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-slate-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border"
                    placeholder="Looking for 3BHK, premium location..."
                  />
                </div>

                <button className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-lg transition hover:opacity-90">
                  Save Lead (Demo)
                </button>

                {status === "ok" && (
                  <div className="text-sm text-emerald-700">✅ Lead saved in this browser.</div>
                )}
              </div>
            </form>
          </FadeUp>
        </div>

        {/* Lead Management Panel */}
        <div className="mt-10">
          <FadeUp>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold text-slate-900">Lead Management (Frontend Demo)</h3>

              <div className="flex flex-wrap gap-2">
                <button onClick={exportJson} className="rounded-2xl glass px-4 py-2 text-sm text-slate-900 hover:shadow-lg">
                  Export JSON
                </button>
                <button onClick={clearAll} className="rounded-2xl bg-rose-600 px-4 py-2 text-sm text-white hover:opacity-90">
                  Clear All
                </button>
              </div>
            </div>
          </FadeUp>

          <div className="mt-4 grid gap-3">
            {leads.length === 0 ? (
              <div className="glass rounded-3xl p-6 text-slate-600">
                No leads yet. Submit the form to see leads here.
              </div>
            ) : (
              leads.map((l) => (
                <div key={l.id} className="glass rounded-3xl p-5">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-slate-900 font-semibold">{l.name}</div>
                      <div className="text-sm text-slate-600">{l.phone}</div>
                      <div className="mt-2 text-sm text-slate-700">
                        <span className="font-semibold">Budget:</span> {l.budget}
                      </div>
                      {l.message ? (
                        <div className="mt-1 text-sm text-slate-600">{l.message}</div>
                      ) : null}
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                      <select
                        value={l.status}
                        onChange={(e) => updateStatus(l.id, e.target.value as LeadStatus)}
                        className="rounded-2xl bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none soft-border"
                      >
                        <option>New</option>
                        <option>Contacted</option>
                        <option>Closed</option>
                      </select>

                      <button
                        onClick={() => removeLead(l.id)}
                        className="rounded-2xl bg-slate-900 px-3 py-2 text-sm text-white hover:opacity-90"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
