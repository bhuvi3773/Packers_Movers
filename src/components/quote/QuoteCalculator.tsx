"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Info,
  MessageCircle,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cityNames } from "@/config/cities";
import { addOns, floorOptions, pricingConfig, sizeOptions } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import type { EstimateInput, PropertyType } from "@/lib/types";
import {
  calculateEstimate,
  estimateSummary,
  formatINR,
  getAddOnPrice,
  getSizeOption,
  isWeekendDate,
  roadDistanceKm,
} from "@/lib/estimate";
import {
  addDaysISO,
  cn,
  createDemoReference,
  formatDateLong,
  isValidEmail,
  isValidIndianPhone,
  todayISO,
  whatsappUrl,
} from "@/lib/utils";
import { DemoTag } from "@/components/ui/DemoTag";

const steps = [
  { label: "Route", title: "Where is the move?" },
  { label: "Home & access", title: "What are we moving?" },
  { label: "Services", title: "What should we handle?" },
  { label: "Estimate", title: "Your illustrative estimate." },
  { label: "Your details", title: "Where should we send the plan?" },
];

type Details = {
  name: string;
  phone: string;
  email: string;
  notes: string;
  consent: boolean;
};

type Errors = {
  date?: string;
  name?: string;
  phone?: string;
  email?: string;
  consent?: string;
};

type QuoteCalculatorProps = {
  initialFrom?: string;
  initialTo?: string;
  initialSize?: string;
};

const officeSizes = sizeOptions.filter((size) => size.type === "office");
const homeSizes = sizeOptions.filter((size) => size.type === "home");

export function QuoteCalculator({ initialFrom, initialTo, initialSize }: QuoteCalculatorProps) {
  const safeInitialSize = sizeOptions.find((size) => size.id === initialSize);
  const [step, setStep] = useState(1);
  const [fromCity, setFromCity] = useState(
    initialFrom && cityNames.includes(initialFrom) ? initialFrom : "Mumbai",
  );
  const [toCity, setToCity] = useState(
    initialTo && cityNames.includes(initialTo) ? initialTo : "Pune",
  );
  const [localDistance, setLocalDistance] = useState<number>(pricingConfig.local.defaultDistanceKm);
  const [propertyType, setPropertyType] = useState<PropertyType>(safeInitialSize?.type ?? "home");
  const [sizeId, setSizeId] = useState(safeInitialSize?.id ?? pricingConfig.defaultSize);
  const [moveDate, setMoveDate] = useState(addDaysISO(14));
  const [floor, setFloor] = useState(1);
  const [lift, setLift] = useState(true);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["packing"]);
  const [details, setDetails] = useState<Details>({
    name: "",
    phone: "",
    email: "",
    notes: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [reference, setReference] = useState<string | null>(null);

  const reduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);

  const isLocal = fromCity === toCity;
  const size = getSizeOption(sizeId);
  const visibleSizes = propertyType === "home" ? homeSizes : officeSizes;
  const distance = isLocal ? localDistance : roadDistanceKm(fromCity, toCity);
  const weekend = moveDate ? isWeekendDate(moveDate) : false;

  const input: EstimateInput = useMemo(
    () => ({
      fromCity,
      toCity,
      localDistance,
      propertyType,
      sizeId,
      floor,
      lift,
      moveDate,
      addOns: selectedAddOns,
    }),
    [fromCity, toCity, localDistance, propertyType, sizeId, floor, lift, moveDate, selectedAddOns],
  );

  const estimate = useMemo(() => calculateEstimate(input), [input]);
  const summaryMessage = useMemo(() => {
    const summary = estimateSummary(input, estimate);
    return reference ? `${summary}\n\nDemo reference: ${reference}` : summary;
  }, [input, estimate, reference]);

  useEffect(() => {
    if (previousStep.current !== step) {
      const timer = window.setTimeout(
        () => headingRef.current?.focus(),
        reduceMotion ? 40 : 300,
      );
      previousStep.current = step;
      return () => window.clearTimeout(timer);
    }
  }, [step, reduceMotion]);

  useEffect(() => {
    if (!reference) return;
    const timer = window.setTimeout(
      () => successRef.current?.focus(),
      reduceMotion ? 40 : 340,
    );
    return () => window.clearTimeout(timer);
  }, [reference, reduceMotion]);

  function changePropertyType(nextType: PropertyType) {
    setPropertyType(nextType);
    if (nextType === "home" && !homeSizes.some((item) => item.id === sizeId)) {
      setSizeId(homeSizes[0]?.id ?? pricingConfig.defaultSize);
    }
    if (nextType === "office" && !officeSizes.some((item) => item.id === sizeId)) {
      setSizeId(officeSizes[0]?.id ?? "office-small");
    }
  }

  function toggleAddOn(id: string) {
    setSelectedAddOns((current) => {
      const isSelected = current.includes(id);
      if (isSelected) {
        const next = current.filter((item) => item !== id);
        return id === "packing" ? next.filter((item) => item !== "unpacking") : next;
      }
      const next = [...current, id];
      return id === "unpacking" ? Array.from(new Set([...next, "packing"])) : next;
    });
  }

  function swapCities() {
    setFromCity(toCity);
    setToCity(fromCity);
  }

  function validateStepTwo() {
    const nextErrors: Errors = {};
    if (!moveDate) {
      nextErrors.date = "Choose a preferred move date.";
    } else if (moveDate < todayISO()) {
      nextErrors.date = "Choose today or a future date.";
    }
    setErrors(nextErrors);
    if (nextErrors.date) {
      document.getElementById("move-date")?.focus();
      return false;
    }
    return true;
  }

  function goNext() {
    if (step === 2 && !validateStepTwo()) return;
    setErrors({});
    setStep((current) => Math.min(5, current + 1));
  }

  function goBack() {
    setErrors({});
    setStep((current) => Math.max(1, current - 1));
  }

  function goToStep(target: number) {
    if (target > step) return;
    setErrors({});
    setStep(target);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (details.name.trim().length < 2) {
      nextErrors.name = "Enter the name the move manager should use.";
    }
    if (!isValidIndianPhone(details.phone)) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (details.email.trim() && !isValidEmail(details.email)) {
      nextErrors.email = "Check the email address, or leave it blank.";
    }
    if (!details.consent) {
      nextErrors.consent = "Please confirm you understand this is a demonstration.";
    }
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const focusTarget =
        firstError === "consent"
          ? "demo-consent"
          : firstError === "name"
            ? "customer-name"
            : firstError === "phone"
              ? "customer-phone"
              : "customer-email";
      document.getElementById(focusTarget)?.focus();
      return;
    }

    setReference(createDemoReference("SETU"));
  }

  function resetCalculator() {
    setStep(1);
    setReference(null);
    setDetails({ name: "", phone: "", email: "", notes: "", consent: false });
    setErrors({});
  }

  const selectedAddOnLabels = addOns
    .filter((item) => selectedAddOns.includes(item.id))
    .map((item) => item.label);

  const stepTitle = steps[step - 1];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
      <div className="lg:col-span-8">
        <div className="rounded-3xl border border-line bg-surface shadow-md overflow-hidden">
          <div className="border-b border-line p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="label">Move estimate</p>
              <p className="text-[0.7rem] tabular-nums text-muted">Step {step} of 5</p>
            </div>

            <div className="mt-4 flex gap-1.5" role="group" aria-label="Estimate progress">
              {steps.map((item, index) => {
                const number = index + 1;
                const complete = number < step;
                const active = number === step;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => goToStep(number)}
                    disabled={number > step}
                    aria-label={`Step ${number}: ${item.label}${complete ? " (completed)" : ""}`}
                    aria-current={active ? "step" : undefined}
                    className={cn(
                      "group flex-1 text-left",
                      number > step ? "cursor-not-allowed" : "cursor-pointer",
                    )}
                  >
                    <span
                      className={cn(
                        "block h-1 w-full transition-colors",
                        complete || active ? "bg-accent" : "bg-line",
                        !active && number <= step && "group-hover:bg-accent-strong",
                      )}
                    />
                    <span
                      className={cn(
                        "mt-2 hidden text-[0.62rem] font-semibold tracking-[0.06em] uppercase sm:block",
                        active ? "text-ink" : complete ? "text-muted" : "text-muted/50",
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between gap-4 border-t border-line pt-3 sm:hidden">
              <p className="text-[0.72rem] text-muted">{stepTitle.label}</p>
              <p className="text-[0.78rem] font-semibold tabular-nums text-ink">
                ≈ {formatINR(estimate.total)}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={submittedKey(step, reference)}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2
                      ref={headingRef}
                      tabIndex={-1}
                      className="display-sm max-w-[22ch] text-ink outline-none"
                    >
                      {stepTitle.title}
                    </h2>
                    <p className="mt-2 text-[0.85rem] text-muted">{stepSubtitle(step)}</p>
                  </div>
                  <DemoTag />
                </div>

                <div className="mt-7">
                  {step === 1 ? (
                    <div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="from-city" className="field-label">
                            Moving from
                          </label>
                          <select
                            id="from-city"
                            className="field"
                            value={fromCity}
                            onChange={(event) => setFromCity(event.target.value)}
                          >
                            {cityNames.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="to-city" className="field-label">
                            Moving to
                          </label>
                          <select
                            id="to-city"
                            className="field"
                            value={toCity}
                            onChange={(event) => setToCity(event.target.value)}
                          >
                            {cityNames.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={swapCities}
                          className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-muted transition-colors hover:text-ink"
                        >
                          <ArrowLeftRight aria-hidden className="h-3.5 w-3.5" strokeWidth={1.7} />
                          Swap cities
                        </button>
                      </div>

                      <div className="mt-5 border border-line bg-paper p-4 sm:p-5">
                        {isLocal ? (
                          <>
                            <p className="text-[0.88rem] font-semibold text-ink">
                              Same-city move in {fromCity}
                            </p>
                            <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">
                              Tell us roughly how far the move is. A local crew will confirm the
                              exact distance at survey.
                            </p>
                            <div className="mt-5">
                              <div className="flex items-center justify-between gap-4">
                                <label htmlFor="local-distance" className="field-label mb-0">
                                  Approx. distance
                                </label>
                                <span className="text-[0.85rem] font-semibold tabular-nums text-ink">
                                  {localDistance} km
                                </span>
                              </div>
                              <input
                                id="local-distance"
                                type="range"
                                min={1}
                                max={pricingConfig.local.maxDistanceKm}
                                step={1}
                                value={localDistance}
                                onChange={(event) => setLocalDistance(Number(event.target.value))}
                                className="mt-4 w-full accent-accent"
                              />
                              <div className="mt-1 flex justify-between text-[0.65rem] text-muted">
                                <span>1 km</span>
                                <span>{pricingConfig.local.maxDistanceKm} km</span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-[0.88rem] font-semibold text-ink">
                              Intercity route
                            </p>
                            <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                              <span className="font-display text-[1.45rem] leading-none text-ink">
                                {fromCity}
                              </span>
                              <ArrowRight aria-hidden className="h-4 w-4 text-accent" strokeWidth={1.5} />
                              <span className="font-display text-[1.45rem] leading-none text-ink">
                                {toCity}
                              </span>
                            </div>
                            <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                              Approximately{" "}
                              <span className="font-semibold text-ink">{distance} km</span> by road,
                              calculated from city coordinates. The final route is confirmed with
                              your quote.
                            </p>
                          </>
                        )}
                      </div>

                      <p className="mt-4 flex items-start gap-2 text-[0.72rem] leading-relaxed text-muted">
                        <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.7} />
                        Rates are sample rates for this template. Nothing is booked or reserved by
                        this estimate.
                      </p>
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div className="space-y-7">
                      <fieldset>
                        <legend className="field-label">Property type</legend>
                        <div className="grid grid-cols-2 gap-3">
                          {(
                            [
                              { id: "home", label: "Home", detail: "Flat, house or villa" },
                              { id: "office", label: "Office", detail: "Studio to multi-floor" },
                            ] as const
                          ).map((option) => (
                            <label
                              key={option.id}
                              className={cn(
                                "relative cursor-pointer rounded-xl border p-4 transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                                propertyType === option.id
                                  ? "border-accent bg-accent-soft/70 shadow-xs"
                                  : "border-line bg-surface hover:border-muted",
                              )}
                            >
                              <input
                                type="radio"
                                name="property-type"
                                value={option.id}
                                checked={propertyType === option.id}
                                onChange={() => changePropertyType(option.id)}
                                className="sr-only"
                              />
                              <span className="block text-[0.9rem] font-semibold text-ink">
                                {option.label}
                              </span>
                              <span className="mt-0.5 block text-[0.72rem] leading-snug text-muted">
                                {option.detail}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className="field-label">Size of the move</legend>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {visibleSizes.map((option) => (
                            <label
                              key={option.id}
                              className={cn(
                                "relative cursor-pointer rounded-xl border p-3.5 transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                                sizeId === option.id
                                  ? "border-accent bg-accent-soft/70 shadow-xs"
                                  : "border-line bg-surface hover:border-muted",
                              )}
                            >
                              <input
                                type="radio"
                                name="move-size"
                                value={option.id}
                                checked={sizeId === option.id}
                                onChange={() => setSizeId(option.id)}
                                className="sr-only"
                              />
                              <span className="flex items-start justify-between gap-2">
                                <span className="text-[0.85rem] leading-tight font-semibold text-ink">
                                  {option.label}
                                </span>
                                {sizeId === option.id ? (
                                  <Check aria-hidden className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.2} />
                                ) : null}
                              </span>
                              <span className="mt-1 block text-[0.68rem] leading-snug text-muted">
                                {option.description}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="move-date" className="field-label">
                            Preferred move date
                          </label>
                          <input
                            id="move-date"
                            type="date"
                            min={todayISO()}
                            value={moveDate}
                            onChange={(event) => {
                              setMoveDate(event.target.value);
                              if (errors.date) setErrors((current) => ({ ...current, date: undefined }));
                            }}
                            aria-invalid={errors.date ? true : undefined}
                            aria-describedby={errors.date ? "move-date-error" : "move-date-hint"}
                            className={cn("field", errors.date && "field-error")}
                          />
                          {errors.date ? (
                            <p id="move-date-error" className="field-message" role="alert">
                              {errors.date}
                            </p>
                          ) : (
                            <p id="move-date-hint" className="field-hint">
                              {weekend
                                ? "Weekend date — a 5% scheduling surcharge is added."
                                : "A Saturday or Sunday adds a 5% scheduling surcharge."}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="pickup-floor" className="field-label">
                            Floor at pickup
                          </label>
                          <select
                            id="pickup-floor"
                            className="field"
                            value={floor}
                            onChange={(event) => setFloor(Number(event.target.value))}
                          >
                            {floorOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <p className="field-hint">Floor carry is added only without a working lift.</p>
                        </div>
                      </div>

                      <fieldset>
                        <legend className="field-label">Working lift at pickup?</legend>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { value: true, label: "Yes, a working lift" },
                            { value: false, label: "No lift access" },
                          ].map((option) => (
                            <label
                              key={String(option.value)}
                              className={cn(
                                "relative cursor-pointer border px-4 py-3 text-[0.82rem] leading-snug transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                                lift === option.value
                                  ? "border-ink bg-accent-soft font-semibold text-ink"
                                  : "border-line bg-surface text-ink-soft hover:border-muted",
                              )}
                            >
                              <input
                                type="radio"
                                name="lift"
                                checked={lift === option.value}
                                onChange={() => setLift(option.value)}
                                className="sr-only"
                              />
                              {option.label}
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      {weekend ? (
                        <p className="border border-accent/30 bg-accent-soft px-4 py-3 text-[0.8rem] leading-relaxed text-accent-strong">
                          Your selected date falls on a weekend. The estimate includes a 5%
                          scheduling surcharge.
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {step === 3 ? (
                    <div>
                      <fieldset>
                        <legend className="sr-only">Optional services</legend>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {addOns.map((addon) => {
                            const checked = selectedAddOns.includes(addon.id);
                            const price = getAddOnPrice(addon.id, size);
                            const isPercent = addon.kind === "packingPercent" || addon.kind === "unpackingPercent";
                            return (
                              <label
                                key={addon.id}
                                className={cn(
                                  "relative flex cursor-pointer flex-col gap-2 border p-4 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                                  checked
                                    ? "border-ink bg-accent-soft"
                                    : "border-line bg-surface hover:border-muted",
                                )}
                              >
                                <span className="flex items-start justify-between gap-3">
                                  <span className="flex items-start gap-2.5">
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() => toggleAddOn(addon.id)}
                                      className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                                    />
                                    <span>
                                      <span className="block text-[0.86rem] leading-tight font-semibold text-ink">
                                        {addon.label}
                                      </span>
                                      {addon.recommended ? (
                                        <span className="mt-1 inline-block rounded-full bg-accent px-2 py-0.5 text-[0.55rem] font-bold tracking-[0.1em] uppercase text-white shadow-xs">
                                          Recommended
                                        </span>
                                      ) : null}
                                    </span>
                                  </span>
                                  <span className="shrink-0 text-[0.78rem] font-semibold tabular-nums text-ink">
                                    {isPercent ? `≈ ${formatINR(price)}` : formatINR(price)}
                                  </span>
                                </span>
                                <span className="pl-[1.65rem] text-[0.74rem] leading-relaxed text-muted">
                                  {addon.description}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>

                      <div className="mt-5 flex flex-col gap-2 border border-line bg-paper px-4 py-3 text-[0.75rem] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
                        <p>Unpacking includes packing. Selecting it adds packing automatically.</p>
                        <p className="shrink-0 tabular-nums text-ink">
                          {selectedAddOns.length} selected
                        </p>
                      </div>

                      <p className="mt-4 flex items-start gap-2 text-[0.72rem] leading-relaxed text-muted">
                        <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.7} />
                        Amounts shown for add-ons are illustrative and priced against your selected{" "}
                        {size.label} scope.
                      </p>
                    </div>
                  ) : null}

                  {step === 4 ? (
                    <div>
                      <div className="rounded-2xl border border-line bg-paper p-5 sm:p-7 shadow-xs">
                        <p className="label font-bold text-accent-strong">Illustrative range</p>
                        <p className="mt-2 font-display text-[2rem] leading-none tracking-[-0.03em] text-ink sm:text-[2.6rem]">
                          {formatINR(estimate.low)}
                          <span className="px-1.5 text-muted">–</span>
                          {formatINR(estimate.high)}
                        </p>
                        <p className="mt-2 text-[0.78rem] text-muted">
                          Includes 18% GST · indicative midpoint{" "}
                          <span className="font-bold text-ink">{formatINR(estimate.total)}</span>
                        </p>
                      </div>

                      <dl className="mt-6 border-t border-line">
                        {estimate.lineItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start justify-between gap-5 border-b border-line py-3.5"
                          >
                            <div className="min-w-0">
                              <dt className="text-[0.85rem] font-semibold text-ink">{item.label}</dt>
                              {item.detail ? (
                                <p className="mt-0.5 text-[0.72rem] leading-relaxed text-muted">{item.detail}</p>
                              ) : null}
                            </div>
                            <dd className="shrink-0 text-[0.85rem] font-semibold tabular-nums text-ink">
                              {formatINR(item.amount)}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-4 space-y-1.5 text-[0.82rem]">
                        <div className="flex justify-between gap-4 text-ink-soft">
                          <span>Subtotal</span>
                          <span className="tabular-nums">{formatINR(estimate.subtotal)}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-ink-soft">
                          <span>GST (18%)</span>
                          <span className="tabular-nums">{formatINR(estimate.tax)}</span>
                        </div>
                        <div className="flex justify-between gap-4 border-t border-line pt-2 text-[0.95rem] font-semibold text-ink">
                          <span>Indicative total</span>
                          <span className="tabular-nums">{formatINR(estimate.total)}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-muted">
                          <span>Planning range</span>
                          <span className="tabular-nums">
                            {formatINR(estimate.low)} – {formatINR(estimate.high)}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 border border-accent/30 bg-accent-soft p-4">
                        <p className="flex items-start gap-2 text-[0.78rem] leading-relaxed text-accent-strong">
                          <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                          {pricingConfig.disclaimer}
                        </p>
                      </div>

                      <div className="mt-5">
                        <p className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-ink-soft">
                          What can change the final quote
                        </p>
                        <ul className="mt-3 grid gap-1.5 text-[0.75rem] leading-relaxed text-muted sm:grid-cols-2">
                          {pricingConfig.notes.map((note) => (
                            <li key={note} className="flex items-start gap-2">
                              <span aria-hidden className="mt-[0.42rem] h-1 w-1 shrink-0 bg-accent" />
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <a
                          href={whatsappUrl(summaryMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[0.75rem] font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent"
                        >
                          <MessageCircle aria-hidden className="h-4 w-4" strokeWidth={1.6} />
                          Send this estimate on WhatsApp
                        </a>
                        <p className="text-[0.68rem] text-muted">
                          Opens WhatsApp. Nothing is sent until you press send.
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {step === 5 ? (
                    reference ? (
                      <div>
                        <div
                          role="status"
                          aria-live="polite"
                          className="border border-line bg-paper p-5 sm:p-7"
                        >
                          <span className="flex h-11 w-11 items-center justify-center border border-accent bg-accent-soft text-accent-strong">
                            <Check aria-hidden className="h-5 w-5" strokeWidth={2} />
                          </span>
                          <h3
                            ref={successRef}
                            tabIndex={-1}
                            className="display-sm mt-5 text-ink outline-none"
                          >
                            Demo reference created.
                          </h3>
                          <p className="mt-2 max-w-lg text-[0.88rem] leading-relaxed text-ink-soft">
                            <strong className="font-semibold text-ink">Nothing was sent.</strong> This
                            is a demonstration submission; no details were transmitted or stored. In
                            a live deployment, a move manager would reply within one working day.
                          </p>
                          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
                            <div>
                              <p className="label">Reference</p>
                              <p className="mt-1 font-mono text-[0.9rem] font-semibold text-ink">
                                {reference}
                              </p>
                            </div>
                            <div>
                              <p className="label">Estimate</p>
                              <p className="mt-1 text-[0.9rem] font-semibold tabular-nums text-ink">
                                {formatINR(estimate.low)} – {formatINR(estimate.high)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <a
                            href={whatsappUrl(summaryMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w-full"
                          >
                            <MessageCircle aria-hidden className="h-4 w-4" strokeWidth={1.8} />
                            Continue on WhatsApp
                          </a>
                          <button type="button" onClick={resetCalculator} className="btn btn-outline w-full">
                            Start another estimate
                          </button>
                        </div>
                        <p className="mt-4 text-[0.7rem] leading-relaxed text-muted">
                          WhatsApp opens with your estimate summary. You choose whether to send it.
                          Customer details are not included in the message.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="border border-line bg-paper p-4">
                          <div className="grid gap-3 text-[0.75rem] sm:grid-cols-4">
                            <div>
                              <p className="label">Route</p>
                              <p className="mt-1 font-medium text-ink">
                                {isLocal ? `${fromCity} (local)` : `${fromCity} → ${toCity}`}
                              </p>
                            </div>
                            <div>
                              <p className="label">Scope</p>
                              <p className="mt-1 font-medium text-ink">{size.label}</p>
                            </div>
                            <div>
                              <p className="label">Date</p>
                              <p className="mt-1 font-medium text-ink">{formatDateLong(moveDate)}</p>
                            </div>
                            <div>
                              <p className="label">Services</p>
                              <p className="mt-1 font-medium text-ink">
                                {selectedAddOnLabels.length > 0 ? `${selectedAddOnLabels.length} selected` : "Transport only"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="customer-name" className="field-label">
                              Full name <span className="text-accent">*</span>
                            </label>
                            <input
                              id="customer-name"
                              name="name"
                              type="text"
                              autoComplete="name"
                              value={details.name}
                              onChange={(event) => {
                                setDetails((current) => ({ ...current, name: event.target.value }));
                                if (errors.name) setErrors((current) => ({ ...current, name: undefined }));
                              }}
                              aria-invalid={errors.name ? true : undefined}
                              aria-describedby={errors.name ? "customer-name-error" : undefined}
                              className={cn("field", errors.name && "field-error")}
                              placeholder="Your name"
                            />
                            {errors.name ? (
                              <p id="customer-name-error" className="field-message" role="alert">
                                {errors.name}
                              </p>
                            ) : null}
                          </div>

                          <div>
                            <label htmlFor="customer-phone" className="field-label">
                              Mobile number <span className="text-accent">*</span>
                            </label>
                            <input
                              id="customer-phone"
                              name="phone"
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              value={details.phone}
                              onChange={(event) => {
                                setDetails((current) => ({ ...current, phone: event.target.value }));
                                if (errors.phone) setErrors((current) => ({ ...current, phone: undefined }));
                              }}
                              aria-invalid={errors.phone ? true : undefined}
                              aria-describedby={errors.phone ? "customer-phone-error" : "customer-phone-hint"}
                              className={cn("field", errors.phone && "field-error")}
                              placeholder="98765 43210"
                            />
                            {errors.phone ? (
                              <p id="customer-phone-error" className="field-message" role="alert">
                                {errors.phone}
                              </p>
                            ) : (
                              <p id="customer-phone-hint" className="field-hint">
                                10 digits. In a real deployment this is used only to contact you.
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mt-4">
                          <label htmlFor="customer-email" className="field-label">
                            Email <span className="font-normal text-muted">(optional)</span>
                          </label>
                          <input
                            id="customer-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={details.email}
                            onChange={(event) => {
                              setDetails((current) => ({ ...current, email: event.target.value }));
                              if (errors.email) setErrors((current) => ({ ...current, email: undefined }));
                            }}
                            aria-invalid={errors.email ? true : undefined}
                            aria-describedby={errors.email ? "customer-email-error" : undefined}
                            className={cn("field", errors.email && "field-error")}
                            placeholder="you@example.com"
                          />
                          {errors.email ? (
                            <p id="customer-email-error" className="field-message" role="alert">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>

                        <div className="mt-4">
                          <label htmlFor="customer-notes" className="field-label">
                            Anything the crew should know?{" "}
                            <span className="font-normal text-muted">(optional)</span>
                          </label>
                          <textarea
                            id="customer-notes"
                            name="notes"
                            rows={4}
                            maxLength={600}
                            value={details.notes}
                            onChange={(event) =>
                              setDetails((current) => ({ ...current, notes: event.target.value }))
                            }
                            className="field min-h-[6.5rem] resize-y"
                            placeholder="Parking, fragile items, lift timings, a piano, a preferred delivery window…"
                          />
                        </div>

                        <div className="mt-5">
                          <label
                            htmlFor="demo-consent"
                            className="flex cursor-pointer items-start gap-3 border border-line bg-surface p-4 text-[0.78rem] leading-relaxed text-ink-soft"
                          >
                            <input
                              id="demo-consent"
                              type="checkbox"
                              checked={details.consent}
                              onChange={(event) => {
                                setDetails((current) => ({ ...current, consent: event.target.checked }));
                                if (errors.consent) setErrors((current) => ({ ...current, consent: undefined }));
                              }}
                              aria-invalid={errors.consent ? true : undefined}
                              aria-describedby={errors.consent ? "demo-consent-error" : undefined}
                              className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                            />
                            <span>
                              I understand this is a demonstration website. My details are not sent
                              or stored, and the estimate is illustrative — not a booking or a final
                              price.
                            </span>
                          </label>
                          {errors.consent ? (
                            <p id="demo-consent-error" className="field-message" role="alert">
                              {errors.consent}
                            </p>
                          ) : null}
                        </div>

                        <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-[0.7rem] leading-relaxed text-muted">
                            Demo submission only · no backend connected
                          </p>
                          <button type="submit" className="btn btn-primary">
                            Create demo reference
                            <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={2} />
                          </button>
                        </div>
                      </form>
                    )
                  ) : null}
                </div>

                {step < 5 ? (
                  <div
                    className={cn(
                      "mt-8 flex items-center gap-3 border-t border-line pt-5",
                      step === 1 ? "justify-end" : "justify-between",
                    )}
                  >
                    {step > 1 ? (
                      <button type="button" onClick={goBack} className="btn btn-outline btn-sm">
                        <ArrowLeft aria-hidden className="h-3.5 w-3.5" strokeWidth={1.8} />
                        Back
                      </button>
                    ) : null}
                    <button type="button" onClick={goNext} className="btn btn-dark btn-sm">
                      {step === 4 ? "Add my details" : "Continue"}
                      <ArrowRight aria-hidden className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </button>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-4 flex items-start gap-2 text-[0.7rem] leading-relaxed text-muted">
          <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
          Your answers live only in this browser tab. Refreshing or closing the page clears them.
          This template has no backend and does not transmit form data.
        </p>
      </div>

      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <div className="rounded-3xl border border-line bg-surface shadow-md overflow-hidden">
            <div className="border-b border-line p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="label">Your estimate</p>
                <DemoTag>Illustrative</DemoTag>
              </div>
              <p
                className="mt-3 font-display text-[1.65rem] leading-none tracking-[-0.03em] text-ink sm:text-[1.9rem]"
                aria-live="polite"
                aria-atomic="true"
              >
                {formatINR(estimate.low)}
                <span className="px-1 text-muted">–</span>
                {formatINR(estimate.high)}
              </p>
              <p className="mt-2 text-[0.72rem] text-muted">
                Incl. 18% GST · midpoint{" "}
                <span className="font-semibold tabular-nums text-ink">{formatINR(estimate.total)}</span>
              </p>
            </div>

            <dl className="divide-y divide-line text-[0.78rem]">
              <div className="flex items-start justify-between gap-4 px-5 py-3 sm:px-6">
                <dt className="text-muted">Route</dt>
                <dd className="text-right font-medium text-ink">
                  {isLocal ? `${fromCity} (local)` : `${fromCity} → ${toCity}`}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 px-5 py-3 sm:px-6">
                <dt className="text-muted">Scope</dt>
                <dd className="text-right font-medium text-ink">{size.label}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 px-5 py-3 sm:px-6">
                <dt className="text-muted">Distance</dt>
                <dd className="text-right font-medium tabular-nums text-ink">≈ {distance} km</dd>
              </div>
              <div className="flex items-start justify-between gap-4 px-5 py-3 sm:px-6">
                <dt className="text-muted">Date</dt>
                <dd className="text-right font-medium text-ink">{formatDateLong(moveDate)}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 px-5 py-3 sm:px-6">
                <dt className="text-muted">Access</dt>
                <dd className="text-right font-medium text-ink">
                  Floor {floor} · {lift ? "lift" : "no lift"}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 px-5 py-3 sm:px-6">
                <dt className="text-muted">Services</dt>
                <dd className="max-w-[16ch] text-right font-medium text-ink">
                  {selectedAddOnLabels.length > 0 ? `${selectedAddOnLabels.length} selected` : "Transport only"}
                </dd>
              </div>
            </dl>

            <div className="border-t border-line px-5 py-4 sm:px-6">
              <p className="text-[0.7rem] leading-relaxed text-muted">{pricingConfig.shortDisclaimer}</p>
              <p className="mt-2 text-[0.7rem] leading-relaxed text-muted">
                A final quote follows a survey of your inventory and access.
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-4 border border-line bg-paper px-4 py-3">
            <p className="text-[0.72rem] leading-snug text-muted">Prefer to talk it through?</p>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex shrink-0 items-center gap-1.5 text-[0.72rem] font-semibold text-ink hover:text-accent-strong"
            >
              Call us
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

function stepSubtitle(step: number) {
  return [
    "Choose the two cities. If they match, we will price a local move.",
    "The size, date and access decide most of the cost.",
    "Add only what you want us to handle. You can change this later.",
    "A line-by-line breakdown built from the sample rates in this template.",
    "These details are for the demo form only. Nothing is transmitted.",
  ][step - 1];
}

function submittedKey(step: number, reference: string | null) {
  return `${step}-${reference ? "done" : "form"}`;
}
