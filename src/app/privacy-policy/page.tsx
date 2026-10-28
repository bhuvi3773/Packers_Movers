import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/config/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy notice for the Setu Relocation demonstration template. The forms run locally, transmit nothing and store no customer details.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} crumb="Privacy policy" />;
}
