"use client";

import { motion } from "framer-motion";

const links = [
  { id: "listings", label: "Listings" },
  { id: "highlights", label: "Highlights" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Reviews" },
  { id: "lead", label: "Contact" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass rounded-3xl px-4 py-3"
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500" />
              <span className="font-semibold tracking-tight text-slate-900">
                Luxe Realty
              </span>
            </a>

            <div className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
              {links.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="hover:text-slate-900">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#lead"
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white transition hover:opacity-90"
              >
                Get Brochure
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
