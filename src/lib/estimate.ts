import { getCity } from "@/config/cities";
import {
  addOns,
  pricingConfig,
  sizeOptions,
} from "@/config/pricing";
import type {
  EstimateInput,
  EstimateLine,
  EstimateResult,
  SizeOption,
} from "@/lib/types";

const toRadians = (value: number) => (value * Math.PI) / 180;

export function haversineKm(
  from: { lat: number; lng: number },
  to: { lat: number; lng: number },
): number {
  const earthRadius = 6371;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(from.lat)) *
      Math.cos(toRadians(to.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return 2 * earthRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function roadDistanceKm(fromCity: string, toCity: string): number {
  const from = getCity(fromCity);
  const to = getCity(toCity);
  if (!from || !to || fromCity === toCity) return 0;
  return Math.round(haversineKm(from, to) * pricingConfig.domestic.roadFactor);
}

export function isWeekendDate(dateValue: string): boolean {
  if (!dateValue) return false;
  const day = new Date(`${dateValue}T12:00:00`).getDay();
  return day === 0 || day === 6;
}

const roundTo50 = (value: number) => Math.round(value / 50) * 50;

export function getSizeOption(id: string): SizeOption {
  return (
    sizeOptions.find((option) => option.id === id) ??
    sizeOptions.find((option) => option.id === pricingConfig.defaultSize) ??
    sizeOptions[0]
  );
}

export function getAddOnPrice(addOnId: string, size: SizeOption): number {
  const addOn = addOns.find((item) => item.id === addOnId);
  if (!addOn) return 0;
  if (addOn.kind === "packingPercent") {
    return Math.round((size.packing * addOn.value) / 100);
  }
  if (addOn.kind === "unpackingPercent") {
    return Math.round((size.packing * addOn.value) / 100);
  }
  return addOn.value;
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const size = getSizeOption(input.sizeId);
  const isLocal = input.fromCity === input.toCity;
  const rawDistance = isLocal
    ? input.localDistance
    : roadDistanceKm(input.fromCity, input.toCity);
  const distanceKm = isLocal
    ? Math.max(1, Math.min(rawDistance, pricingConfig.local.maxDistanceKm))
    : Math.max(25, rawDistance);

  const transportBase = isLocal
    ? Math.max(
        pricingConfig.local.base +
          pricingConfig.local.perKm * distanceKm,
        pricingConfig.local.minCharge,
      )
    : Math.max(
        pricingConfig.domestic.base +
          pricingConfig.domestic.perKm * distanceKm,
        pricingConfig.domestic.minCharge,
      );

  const transport = roundTo50(transportBase * size.factor);
  const loading = roundTo50(size.loading);
  const floorCharge = input.lift
    ? 0
    : roundTo50(
        Math.min(
          input.floor * pricingConfig.floor.perFloor * size.factor,
          pricingConfig.floor.maxCharge,
        ),
      );

  const selectedAddOns = addOns.filter((item) =>
    input.addOns.includes(item.id),
  );

  const packing = selectedAddOns.some((item) => item.id === "packing")
    ? roundTo50(size.packing)
    : 0;
  const unpacking = selectedAddOns.some((item) => item.id === "unpacking")
    ? roundTo50(getAddOnPrice("unpacking", size))
    : 0;
  const fixedAddOns = selectedAddOns.filter(
    (item) => item.kind === "fixed" || item.kind === "storage",
  );

  const weekendSurcharge = isWeekendDate(input.moveDate)
    ? roundTo50(transport * pricingConfig.weekendSurcharge)
    : 0;

  const lineItems: EstimateLine[] = [
    {
      id: "transport",
      label: isLocal ? "Local transport" : "Intercity transport",
      detail: isLocal
        ? `Within ${input.fromCity}, approximately ${distanceKm} km`
        : `${input.fromCity} to ${input.toCity}, approximately ${distanceKm} km`,
      amount: transport,
    },
    {
      id: "loading",
      label: "Loading & unloading crew",
      detail: "Trained crew, equipment and vehicle handling",
      amount: loading,
    },
  ];

  if (floorCharge > 0) {
    lineItems.push({
      id: "floor",
      label: "Floor carry",
      detail: `${input.floor} floor${input.floor === 1 ? "" : "s"} without a working lift`,
      amount: floorCharge,
    });
  }

  if (packing > 0) {
    lineItems.push({
      id: "packing",
      label: "Professional packing",
      detail: "Materials, furniture wrapping, labels and packing crew",
      amount: packing,
    });
  }

  if (unpacking > 0) {
    lineItems.push({
      id: "unpacking",
      label: "Unpacking & placement",
      detail: "Unpacking, placement and material removal",
      amount: unpacking,
    });
  }

  fixedAddOns.forEach((item) => {
    lineItems.push({
      id: item.id,
      label: item.label,
      detail: item.description,
      amount: item.value,
    });
  });

  if (weekendSurcharge > 0) {
    lineItems.push({
      id: "weekend",
      label: "Weekend scheduling",
      detail: "Applied because the selected date falls on a weekend",
      amount: weekendSurcharge,
    });
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const tax = roundTo50(subtotal * pricingConfig.taxRate);
  const total = roundTo50(subtotal + tax);
  const low = roundTo50(total * pricingConfig.rangeLow);
  const high = roundTo50(total * pricingConfig.rangeHigh);

  return {
    distanceKm,
    isLocal,
    lineItems,
    subtotal,
    tax,
    total,
    low,
    high,
    weekendSurcharge,
  };
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumberIN(value: number): string {
  return new Intl.NumberFormat("en-IN").format(value);
}

export function estimateSummary(input: EstimateInput, estimate: EstimateResult): string {
  const size = getSizeOption(input.sizeId);
  const selected = addOns
    .filter((item) => input.addOns.includes(item.id))
    .map((item) => item.label)
    .join(", ");

  return [
    "Setu Relocation — illustrative move estimate",
    `From: ${input.fromCity}${input.toCity === input.fromCity ? " (local)" : ` → ${input.toCity}`}`,
    `Scope: ${size.label}${input.propertyType === "office" && !/office/i.test(size.label) ? " office" : ""}`,
    `Date: ${input.moveDate || "Not selected"}`,
    `Access: Floor ${input.floor}, lift ${input.lift ? "available" : "not available"}`,
    `Selected services: ${selected || "Transport only"}`,
    `Estimated range: ${formatINR(estimate.low)} – ${formatINR(estimate.high)} (incl. GST)`,
    `Indicative midpoint: ${formatINR(estimate.total)}`,
    "This is an illustrative estimate, not a confirmed booking or final price.",
  ].join("\n");
}
