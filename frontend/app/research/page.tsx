"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  TrendingUp,
  Leaf,
  Mountain,
  Download,
  ArrowUpRight,
  Search,
  FileText,
  BookOpen,
  Newspaper,
  Layers,
  Globe,
  MapPinned,
  Landmark,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: "global-powers",
    title: "Global Powers",
    pdfs: [
      { name: "US Foreign Policy Overview", url: "/pdfs/us-policy.pdf" },
      { name: "China Strategic Influence", url: "/pdfs/china-strategy.pdf" },
      { name: "EU Governance Structure", url: "/pdfs/eu-governance.pdf" },
    ],
  },]


const GEOGRAPHIC_AREAS = [
  {
    id: "south-asia",
    label: "South Asia",
    description: "Regional integration, diplomacy, and development dynamics",
    icon: Globe,
  },
  {
    id: "india",
    label: "India",
    description: "Foreign policy, economy, and strategic affairs",
    icon: Globe,
  },
  {
    id: "china",
    label: "China",
    description: "Geopolitics, trade, technology, and regional influence",
    icon: Globe,
  },
  {
    id: "asean-and-southeast-asia",
    label: "ASEAN and Southeast Asia",
    description: "Connectivity, economic cooperation, and maritime affairs",
    icon: Globe,
  },
  {
    id: "europe",
    label: "Europe",
    description: "Policy developments, diplomacy, and global partnerships",
    icon: Globe,
  },
];

const THEMES = [
  {
    id: "foreign-policy-and-diplomacy",
    label: "Foreign Policy and Diplomacy",
    description: "Research examining bilateral and multilateral relations, diplomatic engagement, regional cooperation frameworks, conflict resolution mechanisms, and the evolving strategic interests shaping international affairs across South Asia and beyond.",
    icon: Compass,
  },
  {
    id: "geopolitics-and-strategic-affairs",
    label: "Geopolitics and Strategic Affairs",
    description: "Trade corridors, connectivity & cross-border investment",
    icon: TrendingUp,
  },
  {
    id: "economic-diplomacy-and-development-cooperation",
    label: "Economic Diplomacy and Development Cooperation",
    description: "Glacial systems, water security & climate resilience",
    icon: Leaf,
  },
  {
    id: "climate-and-environmental-diplomacy",
    label: "Climate and Environmental Diplomacy",
    description: "Sustainable travel, heritage & local livelihoods",
    icon: Mountain,
  },
  {
    id: "technology,AI-and-data-diplomacy",
    label: "Technology, AI and Data Diplomacy",
    description: "Trade corridors, connectivity & cross-border investment",
    icon: TrendingUp,
  },
] as const;

type ThemeId = (typeof THEMES)[number]["id"] | "all";

const TYPE_FILTERS = [
  // { id: "all", label: "All", icon: Layers },
  { id: "papers", label: "Papers", icon: FileText },
  // { id: "briefs", label: "Briefs", icon: Newspaper },
  { id: "books", label: "Books", icon: BookOpen },
] as const;

type TypeId = (typeof TYPE_FILTERS)[number]["id"];

const PUBLICATIONS = [
  {
    title: "Redrawing the Map: Border Diplomacy in the Eastern Himalaya",
    excerpt:
      "An assessment of shifting territorial postures and confidence-building measures along contested frontiers.",
    type: "papers" as TypeId,
    theme: "geopolitics" as ThemeId,
    date: "May 2026",
  },
  {
    title: "The BBIN Corridor: Five Years of Cross-Border Trade Data",
    excerpt:
      "Quantitative review of freight movement and tariff harmonization across the Bangladesh-Bhutan-India-Nepal subregion.",
    type: "papers" as TypeId,
    theme: "geo-economics" as ThemeId,
    date: "April 2026",
  },
  {
    title: "Glacial Retreat and Downstream Water Security",
    excerpt:
      "Field-based brief on accelerating ice loss in the Koshi basin and implications for agricultural planning.",
    type: "briefs" as TypeId,
    theme: "climate" as ThemeId,
    date: "March 2026",
  },
  {
    title: "Trekking Economies: Who Benefits in the Annapurna Circuit",
    excerpt:
      "A community-level study of revenue distribution in high-footfall trekking corridors.",
    type: "briefs" as TypeId,
    theme: "tourism" as ThemeId,
    date: "February 2026",
  },
  {
    title: "Power Politics: Hydropower Diplomacy in South Asia",
    excerpt:
      "Examines how energy-sharing agreements are reshaping bilateral relations between riparian states.",
    type: "papers" as TypeId,
    theme: "geo-economics" as ThemeId,
    date: "January 2026",
  },
  {
    title: "Mapping Influence: A Decade of Regional Alignments",
    excerpt:
      "Long-form study tracing the realignment of strategic partnerships across the subcontinent since 2016.",
    type: "books" as TypeId,
    theme: "geopolitics" as ThemeId,
    date: "December 2025",
  },
];

const BOOKS = [
  { title: "Mapping Influence", author: "IRF Research Collective" },
  { title: "The Water Frontier", author: "A. Thapa & R. Sharma" },
  { title: "Corridors of Power", author: "IRF Research Collective" },
  { title: "Ridgeline Futures", author: "P. Karki" },
];

// const STATS = [
//   { value: "40+", label: "Research outputs" },
//   { value: "4", label: "Focus areas" },
//   { value: "25+", label: "Contributing scholars" },
// ];

// function RidgelineDivider() {
//   return (
//     <div className="relative h-20 w-full overflow-hidden sm:h-28">
//     <svg
//   viewBox="0 0 1440 160"
//   preserveAspectRatio="none"
//   className="absolute bottom-0 left-0 h-full w-full"
// >
//   <defs>
//     <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
//       <stop offset="0%" stopColor="#0F172A" />
//       <stop offset="100%" stopColor="#2563EB" />
//     </linearGradient>

//     <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
//       <stop offset="0%" stopColor="#38BDF8" />
//       <stop offset="100%" stopColor="#7DD3FC" />
//     </linearGradient>
//   </defs>

//   <motion.path
//     d="M0,160 L0,90 L120,55 L260,100 L400,40 L520,85 L660,20 L800,75 L940,45 L1080,95 L1220,35 L1360,80 L1440,55 L1440,160 Z"
//     fill="url(#wave1)"
//     initial={{ opacity: 0, y: 24 }}
//     whileInView={{ opacity: 0.25, y: 0 }}
//   />

//   <motion.path
//     d="M0,160 L0,120 L150,80 L300,130 L450,70 L600,115 L760,55 L920,110 L1080,75 L1240,125 L1440,90 L1440,160 Z"
//     fill="url(#wave2)"
//     initial={{ opacity: 0, y: 24 }}
//     whileInView={{ opacity: 0.2, y: 0 }}
//   />
// </svg>
//     </div>
//   );
// }

export default function ResearchPage() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("all");
  const [activeType, setActiveType] = useState<TypeId>("all");
  const [query, setQuery] = useState("");
const [activeArea, setActiveArea] = useState<string | null>(null);
  const filtered = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const themeMatch = activeTheme === "all" || pub.theme === activeTheme;
      const typeMatch = activeType === "all" || pub.type === activeType;
      const queryMatch =
        query.trim() === "" ||
        pub.title.toLowerCase().includes(query.toLowerCase()) ||
        pub.excerpt.toLowerCase().includes(query.toLowerCase());
      return themeMatch && typeMatch && queryMatch;
    });
  }, [activeTheme, activeType, query]);

  const featured = PUBLICATIONS[0];

  return (
    <main className="min-h-screen  text-[#1C2B33]">
      <section className=" bg-[#1E2A3A] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ABDE4]"
          >
            Home / Research
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Research &amp; Publications
          </motion.h1>
          <div className="w-full h-px bg-white/70" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base text-[#7ABDE4] sm:text-lg"
          >
            Independent analysis on the forces shaping the Himalayan region —
            from border politics and trade corridors to glacial change and
            mountain economies.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8"
          > */}
            {/* {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-[#7ABDE4] pl-4"
              >
                <p className="font-serif text-3xl font-semibold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#7ABDE4] ">{stat.label}</p>
              </div>
            ))} */}
          {/* </motion.div> */}
        </div>
      </section>

      {/* <RidgelineDivider /> */}

      <section className="mx-auto max-w-full px-30 py-16 sm:py-20 bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl text-white">
            Thematic Research Areas
          </h2>
          {activeTheme !== "all" && (
            <button
              onClick={() => setActiveTheme("all")}
              className="font-mono text-xs uppercase tracking-wider text-[#4D8CB2] underline-offset-4 hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {THEMES.map((theme, i) => {
            const Icon = theme.icon;
            const isActive = activeTheme === theme.id;
            return (
              <motion.button
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-xl border p-6 text-left transition-all duration-300
  ${
    isActive
      ? "border-white bg-white text-[#1E2A3A] shadow-xl"
      : "border-white/20 bg-white/10 text-white hover:bg-white/20"
  }`}
                  onClick={() =>
  setActiveTheme(isActive ? "all" : theme.id)
}
              >
                <div className="flex items-center gap-3">

                  <h4 className="font-serif text-lg font-semibold">
                    {theme.label}
                  </h4>
                </div>

               <div className="mt-3 flex items-center justify-between">
  <span className="text-sm opacity-80">
    Explore Area
  </span>

  <motion.span
    animate={{ rotate: isActive ? 90 : 0 }}
    transition={{ duration: 0.25 }}
  >
    →
  </motion.span>
</div>
              </motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
  {activeTheme !== "all" && (
    <motion.div
      key={activeTheme}
      initial={{ opacity: 0, height: 0, y: 20 }}
      animate={{ opacity: 1, height: "auto", y: 0 }}
      exit={{ opacity: 0, height: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      {(() => {
        const selectedTheme = THEMES.find(
          (t) => t.id === activeTheme
        );

        if (!selectedTheme) return null;

        return (
          <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="rounded-2xl bg-[#2B698E]/10 p-4">
                <selectedTheme.icon className="h-8 w-8 text-[#2B698E]" />
              </div>

              <div>
                <h3 className="font-serif text-3xl font-semibold text-[#1E2A3A]">
                  {selectedTheme.label}
                </h3>

                <p className="mt-4 max-w-4xl text-lg leading-8 text-[#1C2B33]/70">
                  {selectedTheme.description}
                </p>
              </div>
            </div>
          </div>
        );
      })()}
    </motion.div>
  )}
</AnimatePresence>
      </section>

      <section className="mx-auto max-w-full px-30 py-16 sm:py-20 bg-[#FEFFFF]">
        <div className="mb-10">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl text-[#1C2B33]">
            Geographic Research Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {GEOGRAPHIC_AREAS.map((area, i) => {
            const Icon = area.icon;

            return (
              <motion.button
  key={area.id}
  onClick={() =>
    setActiveArea(activeArea === area.id ? null : area.id)
  }
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: i * 0.08 }}
  whileHover={{ y: -4 }}
  whileTap={{ scale: 0.98 }}
  className={`group relative flex flex-col rounded-xl border p-6 text-left transition-all duration-300
    ${
      activeArea === area.id
        ? "border-[#4D8CB2] bg-[#2B698E] text-white shadow-xl"
        : "border-[#1C2B33]/10 bg-white hover:border-[#4D8CB2]/40"
    }`}
>
                {/* Flex container for icon and heading - now side by side */}
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#1C2B33]/5 text-[#1C2B33] group-hover:bg-[#4D8CB2]/15 group-hover:text-[#4D8CB2] transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold">
                    {area.label}
                  </h3>
                </div>

               <div className="mt-4 flex items-center justify-between">
  <span
    className={`text-sm ${
      activeArea === area.id
        ? "text-white/80"
        : "text-[#1C2B33]/60"
    }`}
  >
    Explore Region
  </span>

  <motion.span
    animate={{
      rotate: activeArea === area.id ? 90 : 0,
    }}
    transition={{ duration: 0.25 }}
    className="text-lg"
  >
    →
  </motion.span>
</div>
              </motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
  {activeArea && (
    <motion.div
      key={activeArea}
      initial={{ opacity: 0, height: 0, y: 20 }}
      animate={{ opacity: 1, height: "auto", y: 0 }}
      exit={{ opacity: 0, height: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      {(() => {
        const selectedArea = GEOGRAPHIC_AREAS.find(
          (a) => a.id === activeArea
        );

        if (!selectedArea) return null;

        const AreaIcon = selectedArea.icon;

        return (
          <div className="mt-8 rounded-3xl border border-[#4D8CB2]/20 bg-gradient-to-r from-[#2B698E]/5 to-[#7ABDE4]/10 p-8">
            <div className="flex items-start gap-6">
              <div className="rounded-2xl bg-[#2B698E]/10 p-4">
                <AreaIcon className="h-8 w-8 text-[#2B698E]" />
              </div>

              <div>
                <h3 className="font-serif text-3xl font-semibold text-[#1E2A3A]">
                  {selectedArea.label}
                </h3>

                <p className="mt-4 max-w-4xl text-lg leading-8 text-[#1C2B33]/70">
                  {selectedArea.description}
                </p>
              </div>
            </div>
          </div>
        );
      })()}
    </motion.div>
  )}
</AnimatePresence>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Featured research */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto max-w-full px-50 pb-16 sm:pb-20 pt-10 bg-[#0F172A]">
        <h2 className="mb-10 font-serif text-2xl font-semibold sm:text-3xl text-white">
          Research Article
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#1C2B33]/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C2B33] via-[#2E4555] to-[#C9622D]/60" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                Cover · 2026
              </span>
              <p className="mt-2 font-serif text-2xl font-semibold text-white">
                Eastern Himalaya Report
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4D8CB2]">
              Geopolitics · {featured.date}
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl text-white">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-md text-[#4D8CB2]">
              {featured.excerpt} Drawing on field interviews and satellite
              survey data, the report maps how recent diplomatic exchanges
              have shifted the security posture of three border districts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="gap-2 rounded-full bg-[#1C2B33] text-white hover:bg-[#1C2B33]/85">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full border-[#1C2B33]/20 text-black hover:bg-white"
              >
                Read summary
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A3A]">
              Global Powers & Emerging Regions Studies
            </h2>
            <p className="text-gray-600 mt-4">
              Click a category to view PDFs
            </p>
          </div>

          {/* ACCORDION LIST */}
          <div className="space-y-6">
            {data.map((cat) => (
              <details
                key={cat.id}
                className="bg-white rounded-2xl shadow-sm p-6 group"
              >
                <summary className="cursor-pointer text-xl font-semibold text-[#1E2A3A] flex justify-between items-center">
                  {cat.title}
                  <span className="text-sm text-gray-500 group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  {cat.pdfs.map((pdf, i) => (
                    <a
                      key={i}
                      href={pdf.url}
                      target="_blank"
                      className="p-4 border rounded-xl hover:bg-gray-50 flex justify-between"
                    >
                      <span>{pdf.name}</span>
                      <span className="text-[#2B698E] text-sm">Open →</span>
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* All publications */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20 mt-20">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
            All publications
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-2">
              {TYPE_FILTERS.map((t) => {
                const Icon = t.icon;
                const isActive = activeType === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveType(t.id)}
                    className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors ${isActive
                        ? "border-[#1C2B33] bg-[#1C2B33] text-white"
                        : "border-[#1C2B33]/15 bg-white text-[#1C2B33]/70 hover:border-[#1C2B33]/30"
                      }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1C2B33]/40" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search publications…"
                className="w-56 rounded-full border-[#1C2B33]/15 bg-white pl-9 focus-visible:ring-[#4D8CB2]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub) => {
              const theme = THEMES.find((t) => t.id === pub.theme);
              const ThemeIcon = theme?.icon ?? Layers;
              return (
                <motion.article
                  key={pub.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-4 rounded-xl border border-[#1C2B33]/10 bg-white p-5 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-[#1C2B33]/5">
                    <ThemeIcon className="h-6 w-6 text-[#1C2B33]/50" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="rounded-full bg-[#1C2B33]/5 font-mono text-[10px] uppercase tracking-wider text-[#1C2B33]/70"
                      >
                        {pub.type}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="rounded-full bg-[#C9622D]/10 font-mono text-[10px] uppercase tracking-wider text-[#4D8CB2]"
                      >
                        {theme?.label}
                      </Badge>
                    </div>
                    <h3 className="font-serif text-lg font-semibold leading-snug">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#1C2B33]/60">
                      {pub.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-shrink-0 flex-row gap-2 sm:flex-col">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 rounded-full border-[#1C2B33]/15 text-[#1C2B33]"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-1.5 rounded-full text-[#1C2B33]/70 hover:bg-[#1C2B33]/5"
                    >
                      Details
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-[#1C2B33]/15 bg-white py-16 text-center">
              <p className="font-serif text-lg font-semibold">
                No publications match these filters
              </p>
              <p className="mt-1 text-sm text-[#1C2B33]/60">
                Try a different theme, type, or search term.
              </p>
            </div>
          )}
        </div>

        {filtered.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border-[#1C2B33]/15 px-8 text-[#1C2B33]/70 hover:bg-[#1C2B33]/5"
            >
              Load more
            </Button>
          </div>
        )}
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Books shelf */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gradient-to-br from-[#2B698E] to-[#7ABDE4] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 font-serif text-2xl font-semibold sm:text-3xl text-white">
            From the IRF library
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {BOOKS.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg border border-[#1C2B33]/10 bg-gradient-to-br from-[#1C2B33] to-[#2E4555] p-4"
              >
                <p className="font-serif text-sm font-semibold leading-tight text-white">
                  {book.title}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/50">
                  {book.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA band */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-[#1C2B33]/10 bg-[#1C2B33] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="max-w-md font-serif text-2xl font-semibold sm:text-3xl">
              Have data or a story from the region worth investigating?
            </h2>
            <p className="mt-2 max-w-md text-[#4D8CB2]">
              We collaborate with researchers, journalists, and policy
              practitioners across the Himalayan belt.
            </p>
          </div>
          <Button className="rounded-full bg-[#4D8CB2] px-8 text-white hover:bg-[#4D8CB2]/90">
            Work with us
          </Button>
        </div>
      </section>
    </main>
  );
}