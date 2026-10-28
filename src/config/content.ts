import type { FAQ, Service, Testimonial } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "household-shifting",
    title: "Household shifting",
    shortTitle: "Household",
    tagline: "The whole home, handled.",
    summary:
      "A full-home move, packed room by room and put back together at the other end.",
    description:
      "From a one-room flat to a family home, we survey what you own, plan the packing, protect the furniture and manage the move from first carton to final placement. You get one move manager and one plan, whether you are moving across the street or across the country.",
    image: "/images/service-household.jpg",
    imageAlt: "Two movers carrying a green sofa through a sunlit room",
    includes: [
      "Pre-move home survey, in person or over video",
      "Room-by-room packing with professional materials",
      "Furniture wrapping, corner protection and blanket wrapping",
      "Loading, unloading and careful placement at destination",
      "Kitchen, wardrobe and fragile-item packing",
      "Basic unpacking and packing-material removal",
      "A written inventory and move schedule",
      "Transit protection with a clear claims process",
    ],
    goodFor: [
      "Family homes and apartments",
      "Rented homes and new purchases",
      "Villas and duplexes",
      "Moves with a mix of fragile and oversized items",
    ],
    process: [
      {
        title: "We survey the home",
        body: "We record every room, the access route, lift availability and anything that needs special handling. You receive a written plan and an itemised quote.",
      },
      {
        title: "We pack to a room list",
        body: "Materials arrive ahead of move day. Crews work room by room, label every carton and stage the load for a controlled departure.",
      },
      {
        title: "We load and move",
        body: "Furniture is wrapped and loaded in a planned sequence. Your move manager coordinates the route and keeps you updated.",
      },
      {
        title: "We settle you in",
        body: "We place furniture, unpack essentials on request and walk the home with you before closing the move file.",
      },
    ],
    faqs: [
      {
        question: "Do you pack everything, or only what I ask for?",
        answer:
          "Both are possible. A full-service move includes packing for the whole home. If you prefer to pack personal items yourself, we can pack selected rooms, fragile items and furniture only.",
      },
      {
        question: "How long does a household move take?",
        answer:
          "A local 2 BHK is often packed and delivered in one to two days. An intercity move depends on distance, access and the size of the home. Your written plan includes an expected timeline before packing begins.",
      },
      {
        question: "Can you move a piano, art or a large safe?",
        answer:
          "We plan specialist handling for heavy or fragile items after the survey. Some items may need a dedicated crew or specialist equipment, which will be quoted separately.",
      },
      {
        question: "What happens if something is damaged?",
        answer:
          "Report it during the handover or immediately after delivery. Your move manager documents the issue and starts the transit-protection process. The exact cover is confirmed in your written quote.",
      },
    ],
    metaTitle: "Household Shifting & Home Relocation",
    metaDescription:
      "Full-service household shifting across India: home survey, professional packing, furniture protection, transport, placement and unpacking.",
  },
  {
    slug: "local-shifting",
    title: "Local shifting",
    shortTitle: "Local",
    tagline: "Same city. Same day.",
    summary:
      "A local move with a short, clear plan — often packed and delivered within a day.",
    description:
      "Local moves are won on logistics: access, parking, lift timings and the order things come out of the truck. We plan all four before move day, then keep the crew small, focused and accountable from pickup to placement.",
    image: "/images/service-local.jpg",
    imageAlt: "Two movers carrying packed boxes through a bright apartment",
    includes: [
      "Short local survey and access check",
      "Optional full or partial packing",
      "Furniture disassembly and reassembly",
      "Loading, transport and unloading",
      "Floor carry and lift coordination",
      "Placement in the destination room",
      "Same-day delivery where practical",
      "Packing-material removal",
    ],
    goodFor: [
      "Same-city apartment moves",
      "End-of-lease and rental moves",
      "Small or partial moves",
      "Moves between neighbouring towns",
    ],
    process: [
      {
        title: "A short, focused survey",
        body: "We confirm the inventory, parking, lift access and the distance between addresses. For smaller moves this can be done over a video call.",
      },
      {
        title: "Pack or prepare",
        body: "Choose full packing, fragile-only packing or furniture protection. We deliver materials ahead of the move where needed.",
      },
      {
        title: "Load and drive",
        body: "The crew loads in a planned sequence, secures the vehicle and moves directly to the destination.",
      },
      {
        title: "Place and close",
        body: "Furniture is reassembled and placed, boxes are moved to their labelled rooms and the handover checklist is completed.",
      },
    ],
    faqs: [
      {
        question: "Can you complete a local move in one day?",
        answer:
          "Many 1 BHK and 2 BHK local moves can be packed and delivered in a day. Larger homes, restricted lift access or heavy furniture may need a second day. We confirm this in the survey.",
      },
      {
        question: "Do I need to arrange parking for the truck?",
        answer:
          "We plan the vehicle and parking requirement together. If your building or street has restrictions, tell us during the survey and we will work around the permitted hours.",
      },
      {
        question: "Can you move only a few items?",
        answer:
          "Yes. Partial moves are quoted on the inventory rather than the size of the home. Share a list of items and access details for an estimate.",
      },
      {
        question: "Is packing included in a local move?",
        answer:
          "It can be. You can choose full packing, fragile-only packing or no packing. The estimate changes with the option you select.",
      },
    ],
    metaTitle: "Local Packers & Movers",
    metaDescription:
      "Local shifting within Mumbai, Pune, Bengaluru, Delhi NCR and other Indian cities. Survey, packing, loading, transport and same-day delivery where practical.",
  },
  {
    slug: "domestic-relocation",
    title: "Domestic relocation",
    shortTitle: "Domestic",
    tagline: "Between cities, without the gaps.",
    summary:
      "Door-to-door intercity moves with a dedicated crew and a single point of contact.",
    description:
      "An intercity move has more moving parts than a local one: transit time, vehicle type, route updates and a destination crew that has to be ready when the truck arrives. We hold all of it together under one move manager and one written plan.",
    image: "/images/service-domestic.jpg",
    imageAlt: "Movers loading labelled boxes into a moving truck",
    includes: [
      "Video or in-person pre-move survey",
      "Full packing and inventory",
      "Furniture protection and loading plan",
      "Dedicated or shared vehicle, confirmed in writing",
      "Route and delivery updates",
      "Destination unloading and placement",
      "Basic unpacking on request",
      "Transit protection and claims support",
    ],
    goodFor: [
      "Job relocations between cities",
      "Family moves across states",
      "Moves to a new home before possession",
      "Relocations with vehicle transport",
    ],
    process: [
      {
        title: "Plan the route",
        body: "We confirm the inventory, destination access, preferred dates and whether a dedicated vehicle makes sense for your move.",
      },
      {
        title: "Pack and document",
        body: "The origin crew packs, labels and photographs the load. You receive an inventory before the vehicle departs.",
      },
      {
        title: "Move with visibility",
        body: "Your move manager shares the departure, transit and expected delivery updates. The destination crew is scheduled against the arrival window.",
      },
      {
        title: "Deliver and hand over",
        body: "We unload, place furniture, unpack on request and complete a joint handover before the crew leaves.",
      },
    ],
    faqs: [
      {
        question: "How long does an intercity move take?",
        answer:
          "Transit time depends on distance, vehicle availability and the delivery window. Your quote includes an expected transit range and the move manager confirms updates once the vehicle is on the road.",
      },
      {
        question: "Is the truck dedicated to my move?",
        answer:
          "You can choose a dedicated vehicle or a shared load. A dedicated vehicle is faster and gives you more control over the schedule; a shared load can be more economical for smaller homes.",
      },
      {
        question: "Can you deliver on a specific date?",
        answer:
          "We plan delivery against your preferred date, but traffic, weather and access can affect arrival. We confirm the delivery window in writing and keep you updated in transit.",
      },
      {
        question: "Can you store my things between pickup and delivery?",
        answer:
          "Short-term storage can be added to an intercity move, subject to availability. Tell us the expected gap between addresses so it can be included in the plan.",
      },
    ],
    metaTitle: "Domestic Relocation Across India",
    metaDescription:
      "Door-to-door domestic relocation across India with packing, dedicated or shared transport, route updates and destination placement.",
  },
  {
    slug: "office-relocation",
    title: "Office relocation",
    shortTitle: "Office",
    tagline: "Move the office. Keep the Monday.",
    summary:
      "After-hours office moves that protect equipment, files and your working week.",
    description:
      "An office move is a continuity problem before it is a furniture problem. We plan around your working hours, label by desk and department, protect IT equipment and stage the new space so your team can sit down and start work.",
    image: "/images/service-office.jpg",
    imageAlt: "A professional organising office belongings into a moving box",
    includes: [
      "Workplace survey and move schedule",
      "Department and desk-level labelling",
      "IT equipment packing and handling",
      "Furniture disassembly and reassembly",
      "After-hours and weekend moves",
      "Secure loading and transport",
      "Floor-plan-led placement",
      "Debris removal and handover",
    ],
    goodFor: [
      "Startups and growing teams",
      "Corporate office relocations",
      "Co-working moves",
      "Clinics, studios and small facilities",
    ],
    process: [
      {
        title: "Map the workplace",
        body: "We survey desks, storage, IT assets and access. With your facilities lead, we build a move schedule around business hours.",
      },
      {
        title: "Label by person and place",
        body: "Every crate, chair and monitor gets a destination label tied to the floor plan, so the new office can be assembled without guesswork.",
      },
      {
        title: "Move out of hours",
        body: "Crews work after hours or over a weekend, load securely and keep critical equipment separated and accounted for.",
      },
      {
        title: "Reset the workplace",
        body: "Furniture is reassembled, boxes are placed by desk or department and the handover is checked against the floor plan.",
      },
    ],
    faqs: [
      {
        question: "Can you move our office over a weekend?",
        answer:
          "Yes. Most office moves are scheduled after hours or across a weekend to protect working time. The exact crew size and schedule are set after the workplace survey.",
      },
      {
        question: "How do you handle computers and servers?",
        answer:
          "IT equipment is packed with anti-static materials where needed and labelled by desk or asset number. Server and network shutdowns should be coordinated with your IT provider before the move.",
      },
      {
        question: "Do you provide crates for files?",
        answer:
          "Yes. Reusable file crates can be included for documents and personal storage. They are labelled by department and returned after unpacking.",
      },
      {
        question: "Can you work alongside our facilities team?",
        answer:
          "We prefer it. A single point of contact on your side helps us coordinate building access, lift bookings, security clearances and the final handover.",
      },
    ],
    metaTitle: "Office Relocation & Commercial Moving",
    metaDescription:
      "Office relocation with after-hours moves, IT equipment handling, desk-level labelling, furniture reassembly and floor-plan-led placement.",
  },
  {
    slug: "packing-and-unpacking",
    title: "Packing & unpacking",
    shortTitle: "Packing",
    tagline: "The part most movers rush.",
    summary:
      "Professional packing and unpacking, with the right materials for every room and every fragile thing.",
    description:
      "Packing is where most damage is prevented. We use the right carton, the right wrap and a label that tells the destination crew exactly where something belongs. Unpacking can be added so the new home is livable, not just delivered.",
    image: "/images/service-packing.jpg",
    imageAlt: "A mover sealing a cardboard box with packing tape",
    includes: [
      "Double-wall cartons for heavy and fragile items",
      "Bubble wrap, foam and corner protection",
      "Furniture blankets and stretch wrap",
      "Room, contents and handling labels",
      "Fragile-only or full-home packing",
      "Wardrobe and kitchen specialists",
      "Unpacking and placement on request",
      "Packing-material removal",
    ],
    goodFor: [
      "Fragile-heavy homes",
      "Kitchens and wardrobes",
      "Art, ceramics and collectibles",
      "Customers who want to unpack later",
    ],
    process: [
      {
        title: "Walk through the rooms",
        body: "We identify fragile items, high-value pieces and anything that needs a specialist carton or extra protection.",
      },
      {
        title: "Pack in layers",
        body: "Furniture is wrapped first, then cartons are packed by room. Heavy items go into smaller cartons; fragile items get a double layer.",
      },
      {
        title: "Label for the other end",
        body: "Every carton carries its room, a contents note and a handling instruction. The destination crew knows where it goes before it is unloaded.",
      },
      {
        title: "Unpack or leave packed",
        body: "Choose full unpacking, essentials-only unpacking, or delivery with everything packed and labelled for you to open at your pace.",
      },
    ],
    faqs: [
      {
        question: "Can I book packing without the transport?",
        answer:
          "This template is set up for packing as part of a move. For a packing-only requirement, contact us and we will confirm whether a local crew is available.",
      },
      {
        question: "Do you bring the packing materials?",
        answer:
          "Yes. Cartons, tape, wrap, blankets and labels are included in a professional packing scope. Reusable crates may be used for some items.",
      },
      {
        question: "How do you pack kitchenware?",
        answer:
          "Plates are packed on edge, glassware is wrapped individually and cartons are kept to a manageable weight. Liquids and perishables should be cleared before the crew arrives.",
      },
      {
        question: "Can you unpack at the new home?",
        answer:
          "Yes. Unpacking can include placing kitchen and wardrobe items, removing packing materials and taking away empty cartons. It is quoted as a separate add-on.",
      },
    ],
    metaTitle: "Professional Packing & Unpacking",
    metaDescription:
      "Professional packing and unpacking with double-wall cartons, furniture protection, fragile wrapping, room labels and material removal.",
  },
  {
    slug: "vehicle-transport",
    title: "Vehicle transport",
    shortTitle: "Vehicle",
    tagline: "Cars and two-wheelers, moved properly.",
    summary:
      "Door-to-door vehicle transport on open or enclosed carriers, with a condition report at both ends.",
    description:
      "Vehicles are not luggage. We move cars and two-wheelers on purpose-built carriers, record the condition before loading and complete another inspection at delivery. Tell us the model, the pickup and the destination, and we will include it in the move plan.",
    image: "/images/service-vehicle.jpg",
    imageAlt: "A car carrier truck transporting vehicles on a road",
    includes: [
      "Pre-transport condition report",
      "Secure loading and tie-down",
      "Open or enclosed carrier options",
      "Door-to-door or terminal collection",
      "Transit updates",
      "Delivery inspection with you",
      "Two-wheeler crating where needed",
      "Coordination with a household move",
    ],
    goodFor: [
      "Cars moved between cities",
      "Two-wheelers and scooters",
      "Relocations with one or more vehicles",
      "Temporary relocations and returns",
    ],
    process: [
      {
        title: "Share the vehicle details",
        body: "Tell us the make, model, condition and preferred pickup date. We confirm the carrier type and the nearest collection point.",
      },
      {
        title: "Inspect before loading",
        body: "The condition report records existing scratches, dents and mileage before the vehicle is secured on the carrier.",
      },
      {
        title: "Move on a carrier",
        body: "The vehicle travels on an open or enclosed carrier. You receive the expected transit window and delivery contact.",
      },
      {
        title: "Inspect and hand over",
        body: "We compare the delivery condition with the original report and complete the handover with you or your representative.",
      },
    ],
    faqs: [
      {
        question: "Is the car driven to the destination?",
        answer:
          "No. The default service is carrier transport. In some cases a short driven leg may be needed for collection or delivery, which will be agreed in writing before the move.",
      },
      {
        question: "Should the fuel tank be empty?",
        answer:
          "Keep the tank low, generally under a quarter, and remove personal belongings. The carrier operator will confirm any specific requirements before pickup.",
      },
      {
        question: "Can you move a car and household goods together?",
        answer:
          "We can coordinate both under one move plan, though they may travel on different vehicles. Tell us about both requirements so the dates line up.",
      },
      {
        question: "Is the vehicle insured in transit?",
        answer:
          "Transit protection options and exclusions are confirmed in your quote. The pre-transport condition report is part of every vehicle move.",
      },
    ],
    metaTitle: "Car & Two-Wheeler Transport",
    metaDescription:
      "Door-to-door car and two-wheeler transport with condition reports, open or enclosed carriers, transit updates and delivery inspection.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const processSteps = [
  {
    title: "We survey.",
    short: "Before the move",
    body: "At home or over video, we record every room, access route and awkward item. You get a written plan and a fixed, itemised quote.",
  },
  {
    title: "We pack and plan.",
    short: "Before move day",
    body: "Materials arrive ahead of time. Crews pack, label and stage everything by room, with fragile and high-value items handled first.",
  },
  {
    title: "We move.",
    short: "Move day",
    body: "Loading, transit and delivery are managed by one team. Your move manager shares updates, not guesswork.",
  },
  {
    title: "We settle you in.",
    short: "At the new address",
    body: "Furniture is placed, essentials are unpacked on request, and a handover checklist is signed before the crew leaves.",
  },
];

export const whyPoints = [
  {
    title: "One move manager",
    body: "The same person owns your survey, schedule, crew and handover. No handoffs to a call centre.",
  },
  {
    title: "A written move plan",
    body: "Inventory, access notes, packing scope, dates and costs in one document you can actually use.",
  },
  {
    title: "Crews, not day labour",
    body: "Trained packers work to a room-by-room checklist, with furniture protection treated as a standard, not an extra.",
  },
  {
    title: "Protection, explained",
    body: "Transit protection and the claims process are set out in plain language before you commit.",
  },
];

export const packingStandards = [
  {
    title: "Furniture, wrapped in layers",
    body: "Corner guards, stretch wrap and moving blankets go on before anything leaves the room.",
  },
  {
    title: "Double-wall cartons",
    body: "Heavier board for books, kitchenware and anything with an edge. Smaller boxes for heavier things.",
  },
  {
    title: "Labels that mean something",
    body: "Room, contents and handling notes on every carton. Not just the word fragile.",
  },
  {
    title: "A checklist per room",
    body: "Crews pack to a room-by-room list and check it before sealing. Nothing gets guessed at the other end.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't just move our furniture. They moved our routine — and had it back together by the time the kettle boiled.",
    name: "Ananya Rao",
    initials: "AR",
    city: "Mumbai → Pune",
    service: "3 BHK household move",
    demo: true,
  },
  {
    quote:
      "The office move was finished before Monday. Every monitor, every cable, every chair was where it needed to be.",
    name: "Rohan Mehta",
    initials: "RM",
    city: "Bengaluru",
    service: "Office relocation",
    demo: true,
  },
  {
    quote:
      "I stopped counting boxes after the first hour. The crew had a label for everything, including the things I'd forgotten about.",
    name: "Priya Nair",
    initials: "PN",
    city: "Chennai",
    service: "2 BHK household move",
    demo: true,
  },
];

export const homeFaqs: FAQ[] = [
  {
    question: "How is the estimate calculated?",
    answer:
      "The online estimate combines your locations, home size, floor and lift access, preferred date and the services you select. It is an illustrative number built from sample rates, not a binding quote.",
  },
  {
    question: "Is the estimate final?",
    answer:
      "No. A final quote follows a survey of your inventory and access. The online estimate is there to help you plan a budget before you speak to us.",
  },
  {
    question: "What is included in a full-service move?",
    answer:
      "A full-service move typically includes packing materials, professional packing, furniture protection, loading, transport, unloading, placement and basic unpacking. The exact scope is written into your quote.",
  },
  {
    question: "How far in advance should I plan?",
    answer:
      "For local moves, one to two weeks is usually enough. Intercity moves benefit from three to four weeks, especially at month-end and during school holidays. Earlier is always easier.",
  },
  {
    question: "Do you move fragile items and art?",
    answer:
      "Yes. Fragile and high-value items are identified during the survey and packed with specialist materials. Some pieces may need a custom crate or a dedicated handling plan.",
  },
  {
    question: "Can you move a car or two-wheeler?",
    answer:
      "Yes. Vehicle transport can be added to a household or domestic move, or booked on its own. It includes a condition report at pickup and delivery.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "The template lists 24 base cities across India and intercity moves between them. If your town is not listed, contact us and we will confirm whether a crew can reach you.",
  },
  {
    question: "Do you offer storage?",
    answer:
      "Short-term storage can be added to a move, subject to availability. Tell us the gap between your pickup and delivery dates so we can plan it properly.",
  },
];

export const aboutValues = [
  {
    title: "Care is a method",
    body: "We treat protection as a process — survey, materials, checklist, handover — rather than a promise on a brochure.",
  },
  {
    title: "Clarity over urgency",
    body: "No pressure calls and no mystery line items. You get the scope, the cost and the plan before anything is packed.",
  },
  {
    title: "One accountable team",
    body: "The crew that packs your home is responsible for how it arrives. That simple rule shapes how we staff a move.",
  },
  {
    title: "Respect for the everyday",
    body: "A move is made of small routines. We plan around the kettle, the medicine box and the things a child needs on the first night.",
  },
];

export const coverageNote =
  "Local crews in the cities below. Intercity moves between all of them. If your town is not listed, ask us before you assume it is out of reach.";
