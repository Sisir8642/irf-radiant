'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CommentaryItem {
  id: number;
  title: string;
  body: string[]; 
}

export default function CommentariesPage() {
  const [commentaries, setCommentaries] = useState<CommentaryItem[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Commentaries`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('========== FULL API RESPONSE ==========', data);
        
        let rawItems: any[] = [];
        if (Array.isArray(data)) {
          rawItems = data;
        } else if (data && typeof data === 'object') {
          rawItems = data.data || data.commentaries || data.results || (data.title ? [data] : []);
        }
        
        const commentariesList: CommentaryItem[] = rawItems.map((item: any, index: number) => {
          let parsedBody: string[] = [];
          const rawBody = item.body || item.Body || item.content || item.Content || item.paragraphs || item.excerpt || item.description;
          
          if (Array.isArray(rawBody)) {
            parsedBody = rawBody;
          } else if (typeof rawBody === 'string') {
            parsedBody = rawBody.split(/\n+/).filter((p: string) => p.trim() !== '');
          }

          return {
            id: item.id !== undefined && item.id !== null ? Number(item.id) : index,
            title: item.title || item.Title || item.headline || 'Untitled Commentary',
            body: parsedBody
          };
        });
        
        if (commentariesList.length > 0) {
          setCommentaries(commentariesList);
        } else {
          setCommentaries([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Commentaries Error:', err);
        setError(err.message || 'An unknown error occurred');
        setLoading(false);
      });
  }, []);

  const toggle = (id: number) => {
    setOpenId(prevOpenId => (prevOpenId === id ? null : id));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">
        <section className="relative bg-[#1E2A3A] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-4 bg-gray-700 w-32 rounded animate-pulse" />
            <div className="h-4 bg-gray-700 w-48 rounded animate-pulse mt-6" />
            <div className="h-12 bg-gray-700 w-64 rounded animate-pulse mt-3" />
            <div className="w-full h-px bg-white/20 mt-6" />
          </div>
        </section>
        <section className="pb-24 mt-12">
          <div className="max-w-7xl mx-auto px-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-12 max-w-md text-center shadow-2xl">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Failed to Load Data</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#2B698E] text-white px-6 py-3 rounded-lg hover:bg-[#1E2A3A] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (commentaries.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">
        <section className="relative bg-[#1E2A3A] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[#7ABDE4] text-sm uppercase tracking-widest font-medium mb-3">
              Innovate Research Foundation
            </p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
              Commentaries
            </h1>
            <div className="w-full h-px bg-white/20" />
          </div>
        </section>
        <div className="flex items-center justify-center py-20">
          <div className="bg-white rounded-2xl p-12 max-w-md text-center shadow-2xl">
            <div className="text-yellow-500 text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Commentaries Available</h2>
            <p className="text-gray-600">No commentaries data found in the database.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">
      {/* HEADER */}
      <section className="relative bg-[#1E2A3A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ABDE4] mb-20"
          >
            Home / Commentaries
          </motion.p>
          <p className="text-[#7ABDE4] text-sm uppercase tracking-widest font-medium mb-3">
            Innovate Research Foundation
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Commentaries
          </h1>
          <div className="w-full h-px bg-white/20" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white/90 text-lg leading-relaxed max-w-3xl"
          >
            IRF's policy commentaries offer timely, independent analysis on unfolding global and regional developments —
            examining major-power dynamics, diplomatic engagements, and strategic shifts through a grounded, Nepal-aware lens.
          </motion.p>
        </div>
      </section>

      {/* ACCORDION LIST */}
      {/* ACCORDION LIST */}
<section className="pb-24">
  <div className="max-w-7xl mx-auto px-6 space-y-4">
    {commentaries.map((item, index) => {
      const isOpen = openId === item.id;

      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: Math.min(index * 0.08, 0.4),
          }}
          whileHover={!isOpen ? { y: -4 } : undefined}
          className={`
            relative overflow-hidden rounded-3xl
            border transition-all duration-500 bg-white
            ${isOpen
              ? "border-[#2B698E]/30 shadow-[0_20px_60px_rgba(43,105,142,0.15)]"
              : "border-gray-200 hover:border-[#2B698E]/20 hover:shadow-xl"
            }
          `}
        >
          {/* LEFT ACCENT BAR */}
          <div
            className={`
              absolute left-0 top-0 h-full w-1 transition-all duration-500 z-10
              ${isOpen ? "bg-[#2B698E]" : "bg-transparent"}
            `}
          />

          {/* ACCORDION HEADER TRIGGER */}
          <button
            onClick={() => toggle(item.id)}
            className={`
              w-full text-left px-8 py-6
              transition-all duration-300 relative
              ${isOpen
                ? "bg-[#1E2A3A] text-white"
                : "bg-white text-[#1E2A3A]"
              }
            `}
          >
            <div className="flex items-center justify-between gap-8">
              <div className="flex-1 min-w-0">
                {/* CHANGED: Swapped text-2xl md:text-3xl to text-lg md:text-xl & reduced font-bold to font-semibold */}
                <h2 className="text-lg md:text-xl font-semibold tracking-wide capitalize transition-colors duration-300">
                  {item.title}
                </h2> 
              </div>

              {/* CHEVRON INDICATOR */}
              <div
                className={`
                  shrink-0 transition-all duration-500
                  ${isOpen ? "rotate-180 text-[#7ABDE4]" : "text-[#2B698E]"}
                `}
              >
                <ChevronDown size={20} />
              </div>
            </div>
          </button>

          {/* EXPANDABLE DROP-DOWN BODY */}
          <AnimatePresence initial={false}>
            {isOpen && item.body.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut"
                }}
                className="overflow-hidden"
              >
                <div className="bg-gradient-to-b from-[#1E2A3A] to-[#243648] px-8 py-12 border-t border-white/10">
                  <div className="max-w-3xl mx-auto">
                    {/* SECTION SEPARATOR LABEL */}
                    <div className="flex items-center gap-4 mb-10">
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="uppercase tracking-[0.35em] text-xs text-[#7ABDE4] font-medium">
                        Analysis
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* TEXT CONTENT CONTENT */}
                    <div className="space-y-7">
                      {item.body.map((para, i) => (
                        <p
                          key={i}
                          className="text-gray-200 text-[1.05rem] leading-8 tracking-[0.01em]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* FOOTER COLLAPSE TRIGGER */}
                    <div className="mt-12 pt-6 border-t border-white/10">
                      <button
                        onClick={() => toggle(item.id)}
                        className="
                          inline-flex items-center gap-2
                          text-[#7ABDE4]
                          hover:text-white
                          transition-colors
                          text-sm
                          uppercase
                          tracking-wider
                        "
                      >
                        <ChevronDown
                          size={16}
                          className="rotate-180"
                        />
                        Collapse Analysis
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    })}
  </div>
</section>
    </div>
  );
}