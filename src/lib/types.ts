export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type City = {
  name: string;
  state: string;
  region: "North" | "South" | "West" | "East" | "Central";
  lat: number;
  lng: number;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  includes: string[];
  goodFor: string[];
  process: { title: string; body: string }[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  accent?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  city: string;
  service: string;
  demo: true;
};

export type PropertyType = "home" | "office";

export type SizeOption = {
  id: string;
  label: string;
  type: PropertyType;
  factor: number;
  packing: number;
  loading: number;
  description: string;
};

export type AddOn = {
  id: string;
  label: string;
  description: string;
  kind: "packingPercent" | "unpackingPercent" | "fixed" | "storage";
  value: number;
  recommended?: boolean;
};

export type EstimateInput = {
  fromCity: string;
  toCity: string;
  localDistance: number;
  propertyType: PropertyType;
  sizeId: string;
  floor: number;
  lift: boolean;
  moveDate: string;
  addOns: string[];
};

export type EstimateLine = {
  id: string;
  label: string;
  detail?: string;
  amount: number;
};

export type EstimateResult = {
  distanceKm: number;
  isLocal: boolean;
  lineItems: EstimateLine[];
  subtotal: number;
  tax: number;
  total: number;
  low: number;
  high: number;
  weekendSurcharge: number;
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
  demo?: boolean;
};

export type LegalDocument = {
  label: string;
  title: string;
  intro: string;
  updated: string;
  effective: string;
  sections: LegalSection[];
};
