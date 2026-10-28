import type { LegalDocument } from "@/lib/types";
import { siteConfig } from "@/config/site";

const updated = "26 October 2026";

export const privacyPolicy: LegalDocument = {
  label: "Legal · Privacy",
  title: "Privacy, in plain language.",
  intro:
    "What this demonstration site does with the details you type into it — and what a live relocation business would need to tell you before launch.",
  updated,
  effective: updated,
  sections: [
    {
      id: "demo",
      title: "A demonstration, not a live service",
      demo: true,
      paragraphs: [
        "This website is a front-end template. It has no server, database, user accounts, customer relationship system, payment processor or analytics service connected to it. Every quote, contact form and tracking preview is simulated in your browser.",
        "When you submit an estimate or a contact form, the page creates a reference number locally and shows a confirmation. Nothing is transmitted, stored, logged or shared. Reloading the page clears the result. The WhatsApp button only opens WhatsApp with a prefilled note; you decide whether to send it.",
        "The company name, address, phone number, email, prices, testimonials and city coverage are placeholder content. They do not belong to a real relocation business. Do not use them to make a booking or a payment.",
        "Before this template is used commercially, this notice must be replaced with a policy reviewed for the operator's actual data practices and the laws that apply to them, including India's Digital Personal Data Protection Act, 2023 where relevant.",
      ],
    },
    {
      id: "scope",
      title: "Scope of this notice",
      paragraphs: [
        "This notice describes the demonstration website only. It does not cover a real moving contract, a payment page, an insurer, a storage partner or any third-party website you reach from a link on this site.",
        "If a live version of this site is launched, the operator of that site is responsible for the information it collects and for providing an accurate privacy notice at the point of collection.",
      ],
    },
    {
      id: "information",
      title: "Information the forms ask for",
      paragraphs: [
        "The estimate and contact forms ask for details a relocation business would typically need to prepare a quote. The fields include:",
      ],
      items: [
        "Your name, mobile number and optional email address",
        "Pickup and destination cities or areas",
        "Preferred move date, property type, home size and floor access",
        "Selected services, such as packing, unpacking or vehicle transport",
        "Free-text notes about access, fragile items or timing",
      ],
      note:
        "In this template, these values exist only in the browser's memory while the page is open. They are not written to a cookie, local storage, a URL or a remote system.",
    },
    {
      id: "submissions",
      title: "What happens when you submit",
      paragraphs: [
        "Submitting a form runs a local validation check. If the required fields pass, the page generates a reference such as SETU-EST-4821 and replaces the form with a confirmation panel. No network request carries your details anywhere.",
        "The confirmation is a demonstration state, not a booking, an enquiry or a promise of service. Closing or reloading the page discards it. There is no inbox, spreadsheet or dashboard where the information can be retrieved.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies, analytics and tracking",
      paragraphs: [
        "This template does not set advertising or analytics cookies, does not embed social pixels, and does not use fingerprinting or session recording. It does not include a cookie banner because it does not use non-essential cookies.",
        "Your browser may offer to remember form entries through its own autofill feature. That behaviour is controlled by your browser and device settings, not by this site.",
        "Fonts are bundled at build time rather than requested from a third-party font service at runtime. Demo photography is served from this site's own public folder.",
      ],
    },
    {
      id: "third-parties",
      title: "WhatsApp and external links",
      paragraphs: [
        "Some buttons open WhatsApp with a prefilled message. WhatsApp is operated by Meta and has its own privacy terms. Choosing that button starts a hand-off to a third-party service; this site does not receive a delivery receipt or a copy of the conversation.",
        "Links to Pexels, social platforms or other external sites are provided for context or attribution. Once you leave this site, the destination's privacy notice applies.",
      ],
    },
    {
      id: "live-use",
      title: "How a live service would use details",
      paragraphs: [
        "In a production relocation business, the information in a quote request would normally be used to contact the customer, survey the move, prepare a written quote, schedule crews and vehicles, and support the move through delivery.",
        "A live operator would also need a lawful basis for each use, a retention period, a process for correcting or deleting records, and a way to honour marketing preferences. Those commitments belong in the operator's own policy, not in this template.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing and service providers",
      paragraphs: [
        "This template shares nothing because it collects nothing. In a live deployment, a relocation operator may need to share limited details with packing crews, transport partners, storage facilities, insurers or technology providers. Each of those arrangements would need to be disclosed and governed by appropriate contracts.",
        "A live operator should never sell customer data or use move details for unrelated marketing without a clear, separate choice.",
      ],
    },
    {
      id: "retention",
      title: "Retention",
      paragraphs: [
        "There is no retention period for this demonstration because no record is created. A live operator should keep records only for as long as they are needed for the move, accounting, insurance or legal obligations, then delete or anonymise them.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "No transmission or storage means no customer record to secure in this template. That is a property of the demo, not a security claim for a production system.",
        "A live relocation platform would need access controls, encryption in transit and at rest, staff training, audit logs and a documented incident response process.",
      ],
    },
    {
      id: "rights",
      title: "Your choices and rights",
      paragraphs: [
        "Because this demo does not hold your information, there is nothing to access, correct or delete. If you have sent a WhatsApp message, manage or delete it inside WhatsApp.",
        "In a live service, you would expect the right to ask what is held about you, request a correction, withdraw consent where consent is the basis, and complain to the relevant data protection authority. The operator's policy should explain how to exercise those rights and how quickly it will respond.",
      ],
    },
    {
      id: "children",
      title: "Children",
      paragraphs: [
        "This site is intended for adults arranging a move. It does not knowingly collect information from children. A live operator should have a documented approach for any information about children that appears in move notes.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this notice",
      paragraphs: [
        "If this template is updated, the date at the top of this page should change. A live operator should also tell customers about material changes before they take effect where the law requires it.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        `Questions about this template can be sent to the placeholder address ${siteConfig.contact.email}. It is not monitored and does not belong to a real business. For a live service, replace these details with a monitored privacy contact.`,
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  label: "Legal · Terms",
  title: "Terms for a template.",
  intro:
    "The rules for using this demonstration site, an explanation of what the estimate does and does not mean, and the gaps a real moving contract would need to close.",
  updated,
  effective: updated,
  sections: [
    {
      id: "demo",
      title: "This is a demonstration website",
      demo: true,
      paragraphs: [
        "This site is a front-end template for a fictional relocation brand. It is not a real moving company, it does not accept bookings, and it cannot move your belongings. The company name, address, phone number, email, prices, reviews, coverage and tracking preview are illustrative.",
        "No contract is formed by using this site or by completing a form. No payment is requested or processed. No real quote, booking, tracking record or customer relationship is created.",
        "The estimate is a browser-based illustration built from sample rates. It is not an offer, a fixed price or a guarantee of availability. A real provider's written quote, survey and signed contract would be required before any move.",
        "If you deploy this template for a real business, replace the demo content, connect the forms to a controlled backend, and have these terms reviewed by a qualified lawyer for your services and jurisdiction.",
      ],
    },
    {
      id: "acceptance",
      title: "Using this site",
      paragraphs: [
        "By browsing this demonstration site, you accept these terms as a description of its limited purpose. If you do not accept them, do not use the site.",
        "These terms apply to the website only. They do not create rights against a real carrier, insurer, landlord, storage operator or any other third party.",
      ],
    },
    {
      id: "services",
      title: "What the site describes",
      paragraphs: [
        "The service pages describe an illustrative operating model for household shifting, local moves, domestic relocation, office relocation, packing and vehicle transport. They are written as a template for a real provider and are not an offer to perform those services.",
        "Any scope, crew size, equipment, vehicle type or timeline described on this site is an example. A real move would be governed by a survey, a written scope and a signed agreement.",
      ],
    },
    {
      id: "estimates",
      title: "Estimates and pricing",
      paragraphs: [
        "The online calculator combines sample base rates, distance, home size, floor carry, packing and add-ons. It applies sample taxes and a weekend surcharge. Every number is illustrative.",
        "The estimate can be wrong for a real move because it does not know the actual inventory, access, parking, lift dimensions, route restrictions, material costs, fuel prices, tolls, storage needs or the date's availability. It is a planning aid, not a quote.",
        "A written quote from a real provider would normally follow a survey and would set out inclusions, exclusions, taxes, payment terms, cancellation terms and the validity period. Nothing on this site should be relied on as that quote.",
      ],
    },
    {
      id: "bookings",
      title: "Bookings and payments are not connected",
      paragraphs: [
        "There is no booking engine, payment gateway, invoice, refund process or customer portal in this template. The confirmation screens explicitly state that nothing was sent or stored.",
        "Do not transfer money to any phone number, bank account or link shown on this demonstration site. The contact details are placeholders and may not belong to the operator of the deployed copy.",
      ],
    },
    {
      id: "dates",
      title: "Dates, access and scheduling",
      paragraphs: [
        "Any date selection or weekend notice in the calculator is a local demonstration of validation and pricing logic. It does not reserve a crew, a vehicle or a delivery window.",
        "A real move would depend on building permissions, lift bookings, parking approvals, road access, weather and traffic. A live provider should confirm all of these in writing before move day.",
      ],
    },
    {
      id: "packing",
      title: "Packing, handling and transit protection",
      paragraphs: [
        "The packing standards and transit-protection language on this site describe an intended operating standard, not a guarantee or an insurance policy.",
        "A real moving contract should identify who supplies materials and labour, how high-value or fragile items are handled, what exclusions apply, how a claim is notified, and what evidence is required. Customers should read those terms before signing.",
      ],
    },
    {
      id: "responsibilities",
      title: "Customer responsibilities in a real move",
      paragraphs: [
        "In a live engagement, a customer would typically need to provide accurate inventory and access information, secure valuables and documents, clear prohibited items, arrange permissions where required, and be available for handover.",
        "This list is illustrative. The actual responsibilities should be written into the provider's contract and explained during the survey.",
      ],
    },
    {
      id: "prohibited",
      title: "Items a real mover may refuse",
      paragraphs: [
        "For safety and legal reasons, a real provider may refuse or require special arrangements for hazardous, illegal, perishable, living or high-risk items. Examples include flammable liquids, explosives, weapons, drugs, cash and negotiable instruments, livestock, and some plants or perishable food.",
        "This is not a complete list. A live provider should publish its own prohibited-items policy and confirm it at survey.",
      ],
    },
    {
      id: "liability",
      title: "Liability and reliance",
      paragraphs: [
        "This site is provided as a demonstration template on an \"as is\" basis. To the extent permitted by law, no warranty is given that the content is accurate, complete, current or suitable for a particular purpose.",
        "The fictional company and the authors of this template are not liable for any decision, booking, payment or loss made in reliance on the demo content. Nothing here limits liability that cannot lawfully be limited.",
      ],
    },
    {
      id: "website-use",
      title: "Acceptable use and intellectual property",
      paragraphs: [
        "You may browse, test and review this template. You may not use it to impersonate a real moving business, mislead customers, collect personal information without a lawful basis, or present the sample prices and testimonials as genuine.",
        "The design, code and written content are provided as a template for adaptation. Demo photographs remain subject to the Pexels licence and their original photographers' rights. Replace the placeholder brand, claims and contact details before launch.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      paragraphs: [
        "The forms in this template run locally and do not transmit or store the details you enter. The privacy notice explains the limited browser-only behaviour in more detail.",
        "A live deployment must connect a real privacy notice to the forms, define retention and provide a way to exercise applicable data rights.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      paragraphs: [
        "These demo terms are written for a template and are not legal advice. A live operator should specify the governing law, jurisdiction, dispute process and any consumer-protection rights that apply to its actual business.",
        "India's Consumer Protection Act, 2019 and the Digital Personal Data Protection Act, 2023 may be relevant to a real relocation service. Their application depends on the operator and the circumstances.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      paragraphs: [
        "This template may be updated without notice. The date at the top of the page shows the current version. A live operator should publish a version history or notify customers where required.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        `The contact details on this site are placeholders, including ${siteConfig.contact.email} and ${siteConfig.contact.phone}. They are not monitored. Replace them with monitored business details before launching a live site.`,
      ],
    },
  ],
};
