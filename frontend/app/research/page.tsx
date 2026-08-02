"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass, TrendingUp, Leaf, Mountain,
  Download, ArrowUpRight, Search,
  FileText, BookOpen, Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

declare global { interface Window { $: any } }

const BASE = process.env.NEXT_PUBLIC_BASE_URL
const TTL  = 10 * 60 * 1000; // 10 minutes

function cacheRead(key: string) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts > TTL) { localStorage.removeItem(key); return null; }
    return data;
  } catch { return null; }
}
function cacheWrite(key: string, data: unknown) {
  try { localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data })); } catch {}
}

function apiFetch<T>(endpoint: string): Promise<T> {
  const key = `irf__${endpoint}`;
  const hit = cacheRead(key);
  if (hit) return Promise.resolve(hit as T);
  return new Promise((resolve, reject) => {
    window.$.ajax({
      url: `${BASE}/api${endpoint}`,
      method: "GET",
      dataType: "json",
      success(data: T) { cacheWrite(key, data); resolve(data); },
      error(_xhr: any, _s: string, err: string) { reject(new Error(err || "Request failed")); },
    });
  });
}

// ─── Types ────────────────────────────────────────────────────────────────
interface Theme         { id: number; name: string; description: string }
interface PubType       { id: number; category: string }
interface Publication   { id: number; title: string; excerpt: string; date: string; pdf: string|null; category: number; category_name: string; theme: number; theme_name: string }
interface Book          { id: number; title: string; book_cover: string|null; book: string|null; author: string }
interface GlobalCat     { id: number; category: string }
interface GlobalPower   { id: number; title: string; description: string; pdf: string|null; category: number; category_name: string }
interface ResearchArt   { id: number; title: string; description: string; Cover_image: string|null; file: string|null }

// ─── Static geographic areas (no backend endpoint exists) ──────────────────
const GEO_AREAS = [
  { id: "south-asia",           label: "South Asia",            description: "Regional integration, diplomacy, and development dynamics" },
  { id: "india",                label: "India",                 description: "Foreign policy, economy, and strategic affairs" },
  { id: "china",                label: "China",                 description: "Geopolitics, trade, technology, and regional influence" },
  { id: "asean-and-southeast-asia", label: "ASEAN & Southeast Asia", description: "Connectivity, economic cooperation, and maritime affairs" },
  { id: "europe",               label: "Europe",                description: "Policy developments, diplomacy, and global partnerships" },
];

// ─── Icon pool for themes (cycles by index) ────────────────────────────────
const THEME_ICONS = [Compass, TrendingUp, Leaf, Mountain, Globe];

// ══════════════════════════════════════════════════════════════════════════════
export default function ResearchPage() {

  // ── API data ──
  const [themes,          setThemes]      = useState<Theme[]>([]);
  const [pubTypes,        setPubTypes]    = useState<PubType[]>([]);
  const [publications,    setPubs]        = useState<Publication[]>([]);
  const [books,           setBooks]       = useState<Book[]>([]);
  const [globalCats,      setGlobalCats]  = useState<GlobalCat[]>([]);
  const [globalPowers,    setGlobalPowers]= useState<GlobalPower[]>([]);
  const [article,         setArticle]     = useState<ResearchArt|null>(null);

  // ── UI state ──
  const [activeThemeId,   setActiveThemeId] = useState<number|null>(null);
  const [activePubTypeId, setActivePubTypeId] = useState<number|null>(null);
  const [activeArea,      setActiveArea]   = useState<string|null>(null);
  const [query,           setQuery]        = useState("");
  const [loading,         setLoading]      = useState(true);
  const [error,           setError]        = useState<string|null>(null);

  const jqLoaded = useRef(false);

  // ── Load jQuery once, then fetch all endpoints in parallel ────────────────
  useEffect(() => {
    function fetchAll() {
      Promise.all([
        apiFetch<Theme[]>("/Theme/"),
        apiFetch<PubType[]>("/PublicationType/"),
        apiFetch<Publication[]>("/Publication/"),
        apiFetch<Book[]>("/Book/"),
        apiFetch<GlobalCat[]>("/GlobalCategory/"),
        apiFetch<GlobalPower[]>("/GlobalPower/"),
        apiFetch<ResearchArt[]>("/ResearchArtical/"),
      ])
        .then(([th, pt, pub, bk, gc, gp, ra]) => {
          setThemes(th);
          setPubTypes(pt);
          setPubs(pub);
          setBooks(bk);
          setGlobalCats(gc);
          setGlobalPowers(gp);
          setArticle(ra[0] ?? null);
          // Default active pub-type filter to the first type returned
          if (pt.length > 0) setActivePubTypeId(pt[0].id);
          setLoading(false);
        })
        .catch(err => { setError(err.message); setLoading(false); });
    }

    if (window.$) { fetchAll(); return; }
    if (jqLoaded.current) return;
    jqLoaded.current = true;

    const s = document.createElement("script");
    s.src = "https://code.jquery.com/jquery-3.7.1.min.js";
    s.onload  = fetchAll;
    s.onerror = () => setError("Could not load jQuery");
    document.head.appendChild(s);
  }, []);

  // ── Filter publications by theme + pubType + search query ─────────────────
  const filtered = useMemo(() => {
    return publications.filter(pub => {
      const byTheme   = activeThemeId   === null || pub.theme    === activeThemeId;
      const byType    = activePubTypeId === null || pub.category === activePubTypeId;
      const q = query.trim().toLowerCase();
      const byQuery   = !q || pub.title.toLowerCase().includes(q) || pub.excerpt.toLowerCase().includes(q);
      return byTheme && byType && byQuery;
    });
  }, [publications, activeThemeId, activePubTypeId, query]);

  // ── Group global powers by their category ─────────────────────────────────
  const groupedPowers = useMemo(() =>
    globalCats.map(cat => ({
      ...cat,
      powers: globalPowers.filter(gp => gp.category === cat.id),
    })),
  [globalCats, globalPowers]);

  // ─────────────────────────────────────────────────────────────────────────
  if (loading) return (
    <main className="min-h-screen flex items-center justify-center bg-[#1E2A3A]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#7ABDE4] border-t-transparent" />
        <p className="font-mono text-sm uppercase tracking-widest text-[#7ABDE4]">Fetching research data…</p>
      </div>
    </main>
  );

  if (error) return (
    <main className="min-h-screen flex items-center justify-center bg-[#1E2A3A] px-6">
      <div className="text-center max-w-md">
        <p className="font-serif text-2xl text-white mb-2">Could not load data</p>
        <p className="text-[#7ABDE4] text-sm mb-6">{error}</p>
        <button
          onClick={() => {
            Object.keys(localStorage).filter(k => k.startsWith("irf__")).forEach(k => localStorage.removeItem(k));
            window.location.reload();
          }}
          className="rounded-full bg-[#4D8CB2] px-6 py-2 text-sm text-white hover:bg-[#4D8CB2]/80"
        >
          Retry
        </button>
      </div>
    </main>
  );

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen text-[#1C2B33]">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1E2A3A] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <motion.p initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ABDE4]">
            Home / Research
          </motion.p>
          <motion.h1 initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, delay:.1 }}
            className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Research &amp; Publications
          </motion.h1>
          <div className="w-full h-px bg-white/70 mt-4" />
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, delay:.2 }}
            className="mt-5 max-w-xl text-base text-[#7ABDE4] sm:text-lg">
            Independent analysis on the forces shaping the Himalayan region — from border politics and
            trade corridors to glacial change and mountain economies.
          </motion.p>
        </div>
      </section>

      {/* ── THEMATIC AREAS  →  /api/Theme/ ───────────────────────────────── */}
      <section className="mx-auto max-w-full px-10 py-16 sm:py-20 bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl text-white">Thematic Research Areas</h2>
          {activeThemeId !== null && (
            <button onClick={() => setActiveThemeId(null)}
              className="font-mono text-xs uppercase tracking-wider text-white/70 underline-offset-4 hover:underline">
              Clear filter
            </button>
          )}
        </div>

        {/* Cards — rendered from /api/Theme/ response */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {themes.map((theme, i) => {
            const Icon    = THEME_ICONS[i % THEME_ICONS.length];
            const isActive = activeThemeId === theme.id;
            return (
              <motion.button key={theme.id}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.5, delay: i * .08 }} whileHover={{ y:-4 }}
                onClick={() => setActiveThemeId(isActive ? null : theme.id)}
                className={`group relative overflow-hidden rounded-xl border p-6 text-left transition-all duration-300
                  ${isActive
                    ? "border-white bg-white text-[#1E2A3A] shadow-xl"
                    : "border-white/20 bg-white/10 text-white hover:bg-white/20"}`}>
                <h4 className="font-serif text-lg font-semibold">{theme.name}</h4>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm opacity-80">Explore Area</span>
                  <motion.span animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration:.25 }}>→</motion.span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded description panel */}
        <AnimatePresence mode="wait">
          {activeThemeId !== null && (() => {
            const sel = themes.find(t => t.id === activeThemeId);
            if (!sel) return null;
            const Icon = THEME_ICONS[themes.indexOf(sel) % THEME_ICONS.length];
            return (
              <motion.div key={activeThemeId}
                initial={{ opacity:0, height:0, y:20 }} animate={{ opacity:1, height:"auto", y:0 }}
                exit={{ opacity:0, height:0, y:-20 }} transition={{ duration:.4 }} className="overflow-hidden">
                <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="rounded-2xl bg-[#2B698E]/10 p-4">
                      <Icon className="h-8 w-8 text-[#2B698E]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-semibold text-[#1E2A3A]">{sel.name}</h3>
                      <p className="mt-4 max-w-4xl text-lg leading-8 text-[#1C2B33]/70">{sel.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </section>

      {/* ── GEOGRAPHIC AREAS  (static — no API endpoint) ─────────────────── */}
      <section className="mx-auto max-w-full px-10 py-16 sm:py-20 bg-[#FEFFFF]">
        <h2 className="mb-10 font-serif text-2xl font-semibold sm:text-3xl text-[#1C2B33]">Geographic Research Areas</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {GEO_AREAS.map((area, i) => {
            const isActive = activeArea === area.id;
            return (
              <motion.button key={area.id}
                onClick={() => setActiveArea(isActive ? null : area.id)}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.5, delay: i * .08 }} whileHover={{ y:-4 }} whileTap={{ scale:.98 }}
                className={`group relative flex flex-col rounded-xl border p-6 text-left transition-all duration-300
                  ${isActive
                    ? "border-[#4D8CB2] bg-[#2B698E] text-white shadow-xl"
                    : "border-[#1C2B33]/10 bg-white hover:border-[#4D8CB2]/40"}`}>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 flex-shrink-0" />
                  <h3 className="font-serif text-lg font-semibold">{area.label}</h3>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-sm ${isActive ? "text-white/80" : "text-[#1C2B33]/60"}`}>Explore Region</span>
                  <motion.span animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration:.25 }}>→</motion.span>
                </div>
              </motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          {activeArea && (() => {
            const sel = GEO_AREAS.find(a => a.id === activeArea);
            if (!sel) return null;
            return (
              <motion.div key={activeArea}
                initial={{ opacity:0, height:0, y:20 }} animate={{ opacity:1, height:"auto", y:0 }}
                exit={{ opacity:0, height:0, y:-20 }} transition={{ duration:.4 }} className="overflow-hidden">
                <div className="mt-8 rounded-3xl border border-[#4D8CB2]/20 bg-gradient-to-r from-[#2B698E]/5 to-[#7ABDE4]/10 p-8">
                  <div className="flex items-start gap-6">
                    <div className="rounded-2xl bg-[#2B698E]/10 p-4">
                      <Globe className="h-8 w-8 text-[#2B698E]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-semibold text-[#1E2A3A]">{sel.label}</h3>
                      <p className="mt-4 max-w-4xl text-lg leading-8 text-[#1C2B33]/70">{sel.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </section>

      {/* ── FEATURED RESEARCH ARTICLE  →  /api/ResearchArtical/ ──────────── */}
      <section className="mx-auto max-w-full px-10 pb-16 sm:pb-20 pt-10 bg-[#0F172A]">
        <h2 className="mb-10 font-serif text-2xl font-semibold sm:text-3xl text-white">Research Article</h2>
        {article ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Cover image from Cover_image field */}
            <motion.div initial={{ opacity:0, scale:.98 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ duration:.6 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              {article.Cover_image
                ? <img src={article.Cover_image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
                : <div className="absolute inset-0 bg-gradient-to-br from-[#1C2B33] via-[#2E4555] to-[#C9622D]/60" />
              }
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
                <p className="mt-2 font-serif text-2xl font-semibold text-white">{article.title}</p>
              </div>
            </motion.div>

            {/* Title + description from /api/ResearchArtical/ */}
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:.6, delay:.1 }} className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4D8CB2]">Research Article</span>
              <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl text-white">{article.title}</h3>
              <p className="mt-4 max-w-md text-[#4D8CB2]">{article.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {article.file && (
                  <a href={article.file} target="_blank" rel="noreferrer">
                    <Button className="gap-2 rounded-full bg-[#1C2B33] text-white hover:bg-[#1C2B33]/85">
                      <Download className="h-4 w-4" /> Download PDF
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ) : (
          <p className="text-[#4D8CB2]">No research articles available yet.</p>
        )}
      </section>

      {/* ── GLOBAL POWERS  →  /api/GlobalCategory/ + /api/GlobalPower/ ────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A3A]">Global Powers &amp; Emerging Regions Studies</h2>
            <p className="text-gray-600 mt-4">Click a category to view documents</p>
          </div>

          {/* Accordion — one <details> per GlobalCategory from /api/GlobalCategory/ */}
          <div className="space-y-6">
            {groupedPowers.map(cat => (
              <details key={cat.id} className="bg-white rounded-2xl shadow-sm p-6 group">
                <summary className="cursor-pointer text-xl font-semibold text-[#1E2A3A] flex justify-between items-center list-none">
                  {cat.category}
                  <span className="text-sm text-gray-500 transition-transform group-open:rotate-180">▼</span>
                </summary>

                {/* GlobalPower items for this category from /api/GlobalPower/ */}
                {cat.powers.length > 0 ? (
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {cat.powers.map(power => (
                      <div key={power.id} className="p-4 border rounded-xl hover:bg-gray-50">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1">
                            <p className="font-semibold text-[#1E2A3A] text-sm leading-snug">{power.title}</p>
                            {power.description && (
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{power.description}</p>
                            )}
                          </div>
                          {power.pdf
                            ? <a href={power.pdf} target="_blank" rel="noreferrer"
                                className="flex-shrink-0 text-[#2B698E] text-sm hover:underline">Open →</a>
                            : <span className="flex-shrink-0 text-gray-400 text-sm">No PDF</span>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-gray-400">No items in this category yet.</p>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL PUBLICATIONS  →  /api/Publication/ ───────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20 mt-20">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl">All Publications</h2>

          <div className="flex flex-col gap-3">
            {/* Publication type filter pills — from /api/PublicationType/ */}
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActivePubTypeId(null)}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors
                  ${activePubTypeId === null
                    ? "border-[#1C2B33] bg-[#1C2B33] text-white"
                    : "border-[#1C2B33]/15 bg-white text-[#1C2B33]/70 hover:border-[#1C2B33]/30"}`}>
                All Types
              </button>
              {pubTypes.map(pt => (
                <button key={pt.id} onClick={() => setActivePubTypeId(activePubTypeId === pt.id ? null : pt.id)}
                  className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors
                    ${activePubTypeId === pt.id
                      ? "border-[#1C2B33] bg-[#1C2B33] text-white"
                      : "border-[#1C2B33]/15 bg-white text-[#1C2B33]/70 hover:border-[#1C2B33]/30"}`}>
                  {pt.category}
                </button>
              ))}
            </div>

            {/* Theme filter pills — from /api/Theme/ */}
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveThemeId(null)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors
                  ${activeThemeId === null
                    ? "border-[#4D8CB2] bg-[#4D8CB2] text-white"
                    : "border-[#1C2B33]/15 text-[#1C2B33]/60 hover:border-[#4D8CB2]/40"}`}>
                All Themes
              </button>
              {themes.map(t => (
                <button key={t.id} onClick={() => setActiveThemeId(activeThemeId === t.id ? null : t.id)}
                  className={`rounded-full border px-3 py-1 text-xs transition-colors
                    ${activeThemeId === t.id
                      ? "border-[#4D8CB2] bg-[#4D8CB2] text-white"
                      : "border-[#1C2B33]/15 text-[#1C2B33]/60 hover:border-[#4D8CB2]/40"}`}>
                  {t.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1C2B33]/40" />
              <Input value={query} onChange={e => setQuery(e.target.value)}
                placeholder="Search publications…"
                className="w-full rounded-full border-[#1C2B33]/15 bg-white pl-9 focus-visible:ring-[#4D8CB2]" />
            </div>
          </div>
        </div>

        {/* Publication cards — from /api/Publication/ */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, i) => {
              const Icon = THEME_ICONS[themes.findIndex(t => t.id === pub.theme) % THEME_ICONS.length] ?? Compass;
              return (
                <motion.article key={pub.id} layout
                  initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:-16 }} transition={{ duration:.35 }}
                  className="flex flex-col gap-4 rounded-xl border border-[#1C2B33]/10 bg-white p-5 sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-[#1C2B33]/5">
                    <Icon className="h-6 w-6 text-[#1C2B33]/50" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap gap-2">
                      {/* category_name from Publication API response */}
                      <Badge variant="secondary"
                        className="rounded-full bg-[#1C2B33]/5 font-mono text-[10px] uppercase tracking-wider text-[#1C2B33]/70">
                        {pub.category_name}
                      </Badge>
                      {/* theme_name from Publication API response */}
                      <Badge variant="secondary"
                        className="rounded-full bg-[#C9622D]/10 font-mono text-[10px] uppercase tracking-wider text-[#4D8CB2]">
                        {pub.theme_name}
                      </Badge>
                    </div>
                    <h3 className="font-serif text-lg font-semibold leading-snug">{pub.title}</h3>
                    <p className="mt-1 text-sm text-[#1C2B33]/60">{pub.excerpt}</p>
                    <p className="mt-1 text-xs text-[#1C2B33]/40">{pub.date}</p>
                  </div>

                  <div className="flex flex-shrink-0 flex-row gap-2 sm:flex-col">
                    {pub.pdf ? (
                      <a href={pub.pdf} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="outline"
                          className="gap-1.5 rounded-full border-[#1C2B33]/15 text-[#1C2B33]">
                          <Download className="h-3.5 w-3.5" /> Download
                        </Button>
                      </a>
                    ) : (
                      <Button size="sm" variant="outline" disabled
                        className="gap-1.5 rounded-full border-[#1C2B33]/15 text-[#1C2B33]/40">
                        <Download className="h-3.5 w-3.5" /> No PDF
                      </Button>
                    )}
                    <Button size="sm" variant="ghost"
                      className="gap-1.5 rounded-full text-[#1C2B33]/70 hover:bg-[#1C2B33]/5">
                      Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-[#1C2B33]/15 bg-white py-16 text-center">
              <p className="font-serif text-lg font-semibold">No publications match these filters</p>
              <p className="mt-1 text-sm text-[#1C2B33]/60">Try a different theme, type, or search term.</p>
            </div>
          )}
        </div>

        {filtered.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Button variant="outline"
              className="rounded-full border-[#1C2B33]/15 px-8 text-[#1C2B33]/70 hover:bg-[#1C2B33]/5">
              Load more
            </Button>
          </div>
        )}
      </section>

      {/* ── BOOKS SHELF  →  /api/Book/ ───────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#2B698E] to-[#7ABDE4] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 font-serif text-2xl font-semibold sm:text-3xl text-white">From the IRF library</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Each book rendered from /api/Book/ — title, author, book_cover image, book PDF */}
            {books.map((book, i) => (
              <motion.div key={book.id}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} whileHover={{ y:-6 }}
                transition={{ duration:.5, delay: i * .08 }}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg border border-[#1C2B33]/10">
                {book.book_cover
                  ? <img src={book.book_cover} alt={book.title} className="absolute inset-0 h-full w-full object-cover" />
                  : <div className="absolute inset-0 bg-gradient-to-br from-[#1C2B33] to-[#2E4555]" />
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative p-4">
                  <p className="font-serif text-sm font-semibold leading-tight text-white">{book.title}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/50">{book.author}</p>
                  {book.book && (
                    <a href={book.book} target="_blank" rel="noreferrer"
                      className="mt-2 inline-block font-mono text-[10px] uppercase tracking-wider text-[#7ABDE4] hover:underline">
                      Open →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#1C2B33]/10 bg-[#1C2B33] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="max-w-md font-serif text-2xl font-semibold sm:text-3xl">
              Have data or a story from the region worth investigating?
            </h2>
            <p className="mt-2 max-w-md text-[#4D8CB2]">
              We collaborate with researchers, journalists, and policy practitioners across the Himalayan belt.
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