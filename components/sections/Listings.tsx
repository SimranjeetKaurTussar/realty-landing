"use client";

import { FadeUp, Float } from "@/components/ui/Motion";
import { Skeleton } from "@/components/ui/Skeleton";
import { listings as allListings } from "@/lib/listings";
import { useEffect, useMemo, useState } from "react";

const filters = ["All", "Villa", "Apartment", "Commercial"] as const;
type Filter = (typeof filters)[number];

export function Listings() {
  const [filter, setFilter] = useState<Filter>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const listings = useMemo(() => {
    if (filter === "All") return allListings;
    return allListings.filter((l) => l.type === filter);
  }, [filter]);

  return (
    <section id="listings" className="mx-auto max-w-6xl px-4 py-16">
      <FadeUp>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Featured Listings
            </h2>
            <p className="mt-2 text-slate-600">
              Glass cards, premium spacing, and smooth motion for luxury feel.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  filter === f
                    ? "bg-slate-900 text-white"
                    : "glass text-slate-800 hover:shadow-lg"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </FadeUp>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {(loading ? Array.from({ length: 6 }) : listings).map((item: any, idx) => (
          <FadeUp key={item?.id ?? idx} delay={idx * 0.05}>
            <Float>
              <div className="group glass rounded-3xl p-3 transition hover:shadow-2xl">
                <div className="relative overflow-hidden rounded-3xl">
                  {loading ? (
                    <Skeleton className="h-52 w-full" />
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-emerald-200/20" />
                      <div className="absolute left-3 top-3 rounded-full bg-white/75 px-3 py-1 text-xs text-slate-800 soft-border">
                        {item.tag}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-2 pt-4">
                  {loading ? (
                    <>
                      <Skeleton className="h-5 w-2/3" />
                      <Skeleton className="mt-3 h-4 w-1/2" />
                      <Skeleton className="mt-5 h-10 w-full" />
                    </>
                  ) : (
                    <>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                          <div className="mt-1 text-sm text-slate-600">{item.location}</div>
                        </div>
                        <div className="text-sm font-semibold text-slate-900">{item.price}</div>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-600">
                        <div className="rounded-2xl bg-white/60 p-2 text-center soft-border">
                          {item.beds ? `${item.beds} Beds` : "—"}
                        </div>
                        <div className="rounded-2xl bg-white/60 p-2 text-center soft-border">
                          {item.baths ? `${item.baths} Baths` : "—"}
                        </div>
                        <div className="rounded-2xl bg-white/60 p-2 text-center soft-border">
                          {item.area}
                        </div>
                      </div>

                      <a
                        href="#lead"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm text-white transition hover:opacity-90"
                      >
                        Enquire Now
                      </a>
                    </>
                  )}
                </div>
              </div>
            </Float>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
