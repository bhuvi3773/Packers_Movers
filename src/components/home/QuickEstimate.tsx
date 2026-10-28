"use client";

import { ArrowRightLeft, ArrowUpRight, Home, MapPin, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cityNames } from "@/config/cities";
import { sizeOptions } from "@/config/pricing";

const quickSizes = sizeOptions.filter((option) => option.type === "home");

export function QuickEstimate() {
  const router = useRouter();
  const [fromCity, setFromCity] = useState("Mumbai");
  const [toCity, setToCity] = useState("Pune");
  const [sizeId, setSizeId] = useState("2bhk");

  const isLocal = fromCity === toCity;

  function handleSwap() {
    setFromCity(toCity);
    setToCity(fromCity);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({
      from: fromCity,
      to: toCity,
      size: sizeId,
    });
    router.push(`/get-a-quote?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-[0_16px_40px_-12px_rgba(10,17,40,0.08)] transition-all duration-300 hover:shadow-[0_20px_48px_-12px_rgba(10,17,40,0.12)]"
    >
      {/* Decorative top accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-strong to-accent" />

      <div className="grid gap-4 md:grid-cols-12 md:items-end">
        <div className="md:col-span-3">
          <label htmlFor="quick-from" className="field-label flex items-center justify-between">
            <span>Origin City</span>
            <span className="text-[0.62rem] text-muted">Pick-up</span>
          </label>
          <div className="relative">
            <MapPin
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted"
              strokeWidth={1.8}
            />
            <select
              id="quick-from"
              value={fromCity}
              onChange={(event) => setFromCity(event.target.value)}
              className="field pl-10 font-medium"
            >
              {cityNames.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative md:col-span-3">
          <div className="flex items-center justify-between">
            <label htmlFor="quick-to" className="field-label">
              Destination
            </label>
            <button
              type="button"
              onClick={handleSwap}
              title="Swap cities"
              className="mb-1 inline-flex items-center gap-1 text-[0.65rem] font-bold text-accent hover:text-accent-strong"
            >
              <ArrowRightLeft className="h-3 w-3" />
              Swap
            </button>
          </div>
          <div className="relative">
            <MapPin
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-accent"
              strokeWidth={1.8}
            />
            <select
              id="quick-to"
              value={toCity}
              onChange={(event) => setToCity(event.target.value)}
              className="field pl-10 font-medium"
            >
              {cityNames.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:col-span-3">
          <label htmlFor="quick-size" className="field-label flex items-center justify-between">
            <span>Move Size</span>
            <span className="text-[0.62rem] text-muted">Inventory</span>
          </label>
          <div className="relative">
            <Home
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted"
              strokeWidth={1.8}
            />
            <select
              id="quick-size"
              value={sizeId}
              onChange={(event) => setSizeId(event.target.value)}
              className="field pl-10 font-medium"
            >
              {quickSizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:col-span-3">
          <button type="submit" className="btn btn-primary w-full group">
            <span>Estimate My Move</span>
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.2}
            />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t border-line/60 pt-3 text-[0.78rem] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="font-medium text-ink-soft">
            {isLocal
              ? `Same-city move inside ${fromCity} · local crew & small truck available.`
              : `Intercity direct route from ${fromCity} to ${toCity} · transit timeline 24-48h.`}
          </p>
        </div>
        <p className="text-muted/80">Instant calculated estimate · No phone number required</p>
      </div>
    </form>
  );
}
