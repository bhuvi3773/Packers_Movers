import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsAndConditions } from "@/config/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Terms of use for the Setu Relocation demonstration template, including why estimates are illustrative and why no booking or payment is created.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return <LegalPage document={termsAndConditions} crumb="Terms & conditions" />;
}
