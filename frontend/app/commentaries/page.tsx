// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';

// const commentaries = [
//   {
//     id: 1,
//     number: '01',
//     title: "Trump–Putin–Xi Triangle: Power Rebalancing and Global Fluidity",
//     tag: "Geopolitics",
//     excerpt:
//       "The recent diplomatic engagements involving U.S. President Donald Trump's visit to China and parallel high-level interactions between President Vladimir Putin and Chinese leadership reflect a broader reconfiguration in global power relations.",
//     body: [
//       "The recent diplomatic engagements involving U.S. President Donald Trump's visit to China and parallel high-level interactions between President Vladimir Putin and Chinese leadership reflect a broader reconfiguration in global power relations. While not a formal trilateral arrangement, the sequencing of these meetings highlights China's growing role as a central node in global diplomacy amid intensifying major-power competition.",
//       "President Trump's visit to Beijing was marked by symbolic political optics and limited substantive breakthroughs. Reports indicate that discussions touched upon trade, strategic communication, and crisis management channels, but key structural disputes—including Taiwan, technological decoupling, and global security alignments—remain unresolved. In contrast, Russia's engagement with China continues to deepen in a more structured and long-term strategic direction, particularly in energy cooperation, defense alignment, and coordination in multilateral forums.",
//       "The broader significance lies in the evolving nature of global order. Rather than a rigid bipolar system, the current phase reflects a fluid and networked configuration where major powers simultaneously compete and cooperate. China's position is increasingly that of a balancing actor, engaging multiple poles without full alignment, while maximizing strategic autonomy and influence.",
//       "The United States continues to rely on personalized, leader-driven diplomacy, prioritizing deal-making over institutional consensus. However, the durability of such outcomes remains uncertain in the absence of broader structural agreements. Russia, on the other hand, continues to leverage its strategic alignment with China to offset Western pressure and sustain geopolitical relevance.",
//       "For smaller and middle states, this environment introduces both uncertainty and selective opportunity. While economic and diplomatic diversification becomes more feasible, strategic unpredictability increases due to shifting alignments and transactional diplomacy among major powers.",
//       "Overall, the Trump–Putin–Xi dynamic reflects not an alliance system but a pattern of competitive coexistence, where global order is increasingly defined by flexibility, ambiguity, and negotiated influence.",
//     ],
//   },
//   {
//     id: 2,
//     number: '02',
//     title: "US–Iran Talks: Coercive Diplomacy and Fragile Engagement",
//     tag: "Diplomacy",
//     excerpt:
//       "The ongoing diplomatic engagement between the United States and Iran represents a highly fragile attempt to manage one of the most enduring geopolitical tensions in the Middle East.",
//     body: [
//       "The ongoing diplomatic engagement between the United States and Iran represents a highly fragile attempt to manage one of the most enduring geopolitical tensions in the Middle East. Recent developments suggest that while both sides remain open to negotiation, the process is deeply constrained by mutual distrust, regional security calculations, and intermittent escalation dynamics.",
//       "Statements from U.S. officials, including Secretary of State Marco Rubio, indicate that negotiations remain active, though accompanied by strong deterrent signaling. References to maintaining open maritime routes and ensuring regional stability underscore a dual-track approach combining diplomacy with coercive pressure. This reflects a broader pattern in contemporary international politics where negotiation and strategic signaling operate simultaneously rather than sequentially.",
//       "Iran's position remains centered on sanctions relief, sovereignty concerns, and recognition of its regional role. However, domestic political constraints and external pressures limit its flexibility in negotiations. At the same time, periodic military incidents and retaliatory rhetoric contribute to cycles of escalation that weaken trust between the parties.",
//       "Unlike earlier frameworks such as the JCPOA, current discussions appear less institutionally anchored and more dependent on direct bargaining and external facilitation. This reduces predictability and increases vulnerability to political shifts and external shocks.",
//       "The implications extend beyond the immediate parties. The stability of the Gulf region remains central to global energy flows, maritime security, and international trade routes. Even limited disruptions in negotiations can produce broader volatility in energy markets and global economic confidence.",
//       "For the wider international system, the US–Iran engagement reflects a pattern of \"managed instability,\" where conflict is contained but not fully resolved. Diplomacy proceeds, but under constant pressure from security concerns and strategic mistrust.",
//     ],
//   },

// ];

// const tagColors: Record<string, string> = {
//   Geopolitics: "bg-[#2B698E]/10 text-[#2B698E]",
//   Diplomacy: "bg-emerald-50 text-emerald-700",
//   "Foreign Policy": "bg-amber-50 text-amber-700",
//   "Indo-Pacific": "bg-sky-50 text-sky-700",
//   "Global Governance": "bg-violet-50 text-violet-700",
// };

// export default function CommentariesPage() {
//   const [openId, setOpenId] = useState<number | null>(null);

//   const toggle = (id: number) => setOpenId(openId === id ? null : id);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">

//       {/* HEADER */}
//       <section className="relative bg-[#1E2A3A] py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.p
//                       initial={{ opacity: 0, y: 8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ABDE4] mb-20"
//                     >
//                       Home / Commentaries
//                     </motion.p>
//           <p className="text-[#7ABDE4] text-sm uppercase tracking-widest font-medium mb-3">
//             Innovate Research Foundation
//           </p>
//           <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
//             Commentaries
//           </h1>
//           <div className="w-full h-px bg-white/20" />
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="py-14">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="text-white/90 text-lg leading-relaxed max-w-3xl"
//           >
//             IRF's policy commentaries offer timely, independent analysis on unfolding global and regional developments —
//             examining major-power dynamics, diplomatic engagements, and strategic shifts through a grounded, Nepal-aware lens.
//           </motion.p>
//         </div>
//       </section>

//       {/* ACCORDION LIST */}
//       <section className="pb-24">
//         <div className="max-w-7xl mx-auto px-6 space-y-4">
//           {commentaries.map((item, index) => {
//             const isOpen = openId === item.id;

//             return (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.08,
//                 }}
//                 whileHover={!isOpen ? { y: -4 } : undefined}
//                 className={`
//         relative overflow-hidden rounded-3xl
//         border transition-all duration-500
//         ${isOpen
//                     ? "border-[#2B698E]/30 shadow-[0_20px_60px_rgba(43,105,142,0.15)]"
//                     : "border-gray-200 hover:border-[#2B698E]/20 hover:shadow-xl"
//                   }
//       `}
//               >
//                 {/* LEFT ACCENT BAR */}
//                 <div
//                   className={`
//           absolute left-0 top-0 h-full w-1 transition-all duration-500
//           ${isOpen ? "bg-[#2B698E]" : "bg-transparent"}
//         `}
//                 />

//                 {/* HEADER */}
//                 <button
//                   onClick={() => toggle(item.id)}
//                   className={`
//           w-full text-left px-8 py-8 flex gap-8
//           transition-all duration-300
//           ${isOpen
//                       ? "bg-[#1E2A3A] text-white"
//                       : "bg-white text-[#1E2A3A]"
//                     }
//         `}
//                 >
//                   {/* WATERMARK NUMBER */}
//                   <div className="relative hidden md:block">
//                     <span
//                       className={`
//               text-8xl font-black leading-none
//               transition-all duration-500
//               ${isOpen
//                           ? "text-white/10"
//                           : "text-[#1E2A3A]/5"
//                         }
//             `}
//                     >
//                       {item.number}
//                     </span>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="flex-1 min-w-0">
//                     <div className="flex flex-wrap items-center gap-3 mb-4">
//                       <span
//                         className={`
//                 inline-flex items-center
//                 uppercase tracking-[0.2em]
//                 text-[10px]
//                 font-semibold
//                 px-3 py-1
//                 rounded-full
//                 border
//                 ${isOpen
//                             ? "border-white/10 bg-white/5 text-[#7ABDE4]"
//                             : "border-[#2B698E]/15 bg-[#2B698E]/5 text-[#2B698E]"
//                           }
//               `}
//                       >
//                         {item.tag}
//                       </span>

//                       <span
//                         className={`text-xs ${isOpen ? "text-gray-400" : "text-gray-500"
//                           }`}
//                       >
//                         Commentary
//                       </span>

//                       <span
//                         className={`w-1 h-1 rounded-full ${isOpen ? "bg-gray-500" : "bg-gray-400"
//                           }`}
//                       />

//                       <span
//                         className={`text-xs ${isOpen ? "text-gray-400" : "text-gray-500"
//                           }`}
//                       >
//                         5 min read
//                       </span>
//                     </div>

//                     <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-4xl">
//                       {item.title}
//                     </h2>

//                     {!isOpen && (
//                       <p className="mt-4 text-gray-500 leading-relaxed max-w-3xl">
//                         {item.excerpt}
//                       </p>
//                     )}
//                   </div>

//                   {/* CHEVRON */}
//                   <div
//                     className={`
//             shrink-0 mt-1 transition-all duration-500
//             ${isOpen ? "rotate-180 text-[#7ABDE4]" : "text-[#2B698E]"}
//           `}
//                   >
//                     <ChevronDown size={24} />
//                   </div>
//                 </button>

//                 {/* BODY */}
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{
//                         height: "auto",
//                         opacity: 1,
//                       }}
//                       exit={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       transition={{
//                         duration: 0.45,
//                       }}
//                       className="overflow-hidden"
//                     >
//                       <div className="bg-gradient-to-b from-[#1E2A3A] to-[#243648] px-8 py-12 border-t border-white/10">
//                         <div className="max-w-3xl mx-auto">
//                           {/* SECTION LABEL */}
//                           <div className="flex items-center gap-4 mb-10">
//                             <div className="h-px flex-1 bg-white/10" />

//                             <span className="uppercase tracking-[0.35em] text-xs text-[#7ABDE4] font-medium">
//                               Analysis
//                             </span>

//                             <div className="h-px flex-1 bg-white/10" />
//                           </div>

//                           {/* CONTENT */}
//                           <div className="space-y-7">
//                             {item.body.map((para, i) => (
//                               <motion.p
//                                 key={i}
//                                 initial={{
//                                   opacity: 0,
//                                   y: 10,
//                                 }}
//                                 animate={{
//                                   opacity: 1,
//                                   y: 0,
//                                 }}
//                                 transition={{
//                                   duration: 0.35,
//                                   delay: i * 0.05,
//                                 }}
//                                 className="
//                         text-gray-200
//                         text-[1.05rem]
//                         leading-8
//                         tracking-[0.01em]
//                       "
//                               >
//                                 {para}
//                               </motion.p>
//                             ))}
//                           </div>

//                           {/* FOOTER */}
//                           <div className="mt-12 pt-6 border-t border-white/10">
//                             <button
//                               onClick={() => toggle(item.id)}
//                               className="
//                       inline-flex items-center gap-2
//                       text-[#7ABDE4]
//                       hover:text-white
//                       transition-colors
//                       text-sm
//                       uppercase
//                       tracking-wider
//                     "
//                             >
//                               <ChevronDown
//                                 size={16}
//                                 className="rotate-180"
//                               />
//                               Collapse Analysis
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>

//     </div>
//   );
// }

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
    fetch('http://127.0.0.1:8000/api/Commentaries')
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