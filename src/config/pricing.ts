import type { AddOn, SizeOption } from "@/lib/types";

export const sizeOptions: SizeOption[] = [
  {
    id: "few-items",
    label: "Only a few items",
    type: "home",
    factor: 0.55,
    packing: 2800,
    loading: 1800,
    description: "A partial move with furniture and a handful of boxes.",
  },
  {
    id: "1rk",
    label: "1 RK / studio",
    type: "home",
    factor: 0.75,
    packing: 4200,
    loading: 2400,
    description: "One main room with a compact kitchen and bathroom.",
  },
  {
    id: "1bhk",
    label: "1 BHK",
    type: "home",
    factor: 1,
    packing: 5800,
    loading: 3200,
    description: "One bedroom, living room, kitchen and bathroom.",
  },
  {
    id: "2bhk",
    label: "2 BHK",
    type: "home",
    factor: 1.35,
    packing: 8200,
    loading: 4400,
    description: "Two bedrooms, living room, kitchen and bathrooms.",
  },
  {
    id: "3bhk",
    label: "3 BHK",
    type: "home",
    factor: 1.8,
    packing: 11200,
    loading: 5800,
    description: "Three bedrooms and larger living and storage spaces.",
  },
  {
    id: "4bhk",
    label: "4 BHK / villa",
    type: "home",
    factor: 2.4,
    packing: 15500,
    loading: 7600,
    description: "Four or more bedrooms, or a multi-level home.",
  },
  {
    id: "office-studio",
    label: "Studio office",
    type: "office",
    factor: 0.9,
    packing: 6500,
    loading: 3800,
    description: "Up to about 5 workstations.",
  },
  {
    id: "office-small",
    label: "Small office",
    type: "office",
    factor: 1.4,
    packing: 10500,
    loading: 5800,
    description: "Around 6–15 workstations.",
  },
  {
    id: "office-mid",
    label: "Mid-size office",
    type: "office",
    factor: 2.2,
    packing: 17500,
    loading: 9000,
    description: "Around 16–40 workstations.",
  },
  {
    id: "office-large",
    label: "Large office",
    type: "office",
    factor: 3.2,
    packing: 26000,
    loading: 13500,
    description: "More than 40 workstations or multiple floors.",
  },
];

export const addOns: AddOn[] = [
  {
    id: "packing",
    label: "Professional packing",
    description:
      "Materials, furniture wrapping, room labels and a packing checklist for every room.",
    kind: "packingPercent",
    value: 100,
    recommended: true,
  },
  {
    id: "unpacking",
    label: "Unpacking & placement",
    description:
      "We unpack cartons, place kitchen and wardrobe items and take the empty material away.",
    kind: "unpackingPercent",
    value: 55,
  },
  {
    id: "furniture-assembly",
    label: "Furniture assembly",
    description:
      "Beds, wardrobes, dining tables and desks disassembled and reassembled at the destination.",
    kind: "fixed",
    value: 2800,
  },
  {
    id: "appliance-care",
    label: "Appliance servicing",
    description:
      "Careful disconnection, packing and reconnection support for large appliances.",
    kind: "fixed",
    value: 2400,
  },
  {
    id: "vehicle-transport",
    label: "Vehicle transport",
    description:
      "One car or two-wheeler moved on a carrier, with a condition report at both ends.",
    kind: "fixed",
    value: 9500,
  },
  {
    id: "storage",
    label: "30 days storage",
    description:
      "Short-term, secure storage for the gap between pickup and delivery dates.",
    kind: "storage",
    value: 6500,
  },
];

export const pricingConfig = {
  currency: "INR",
  taxRate: 0.18,
  rangeLow: 0.9,
  rangeHigh: 1.12,
  local: {
    base: 3200,
    perKm: 42,
    minCharge: 6500,
    defaultDistanceKm: 12,
    maxDistanceKm: 80,
  },
  domestic: {
    base: 9000,
    perKm: 17,
    minCharge: 14000,
    roadFactor: 1.25,
  },
  floor: {
    perFloor: 750,
    maxCharge: 9000,
  },
  weekendSurcharge: 0.05,
  defaultSize: "2bhk",
  disclaimer:
    "This is an illustrative estimate based on sample rates. It is not a quote, a booking or a confirmed price. A final, itemised quote follows a survey of your inventory and access.",
  shortDisclaimer:
    "Illustrative estimate only. Final pricing follows a survey.",
  notes: [
    "GST is shown at 18% for illustration.",
    "Floor carry applies only where a working lift is not available.",
    "Awkward access, parking restrictions or specialist items may change the final quote.",
    "Vehicle transport is priced for one standard vehicle.",
  ],
} as const;

export const floorOptions = [
  { value: 0, label: "Ground floor" },
  { value: 1, label: "1st floor" },
  { value: 2, label: "2nd floor" },
  { value: 3, label: "3rd floor" },
  { value: 4, label: "4th floor" },
  { value: 5, label: "5th floor" },
  { value: 6, label: "6th floor" },
  { value: 7, label: "7th floor" },
  { value: 8, label: "8th floor" },
  { value: 9, label: "9th floor" },
  { value: 10, label: "10th floor or higher" },
] as const;
