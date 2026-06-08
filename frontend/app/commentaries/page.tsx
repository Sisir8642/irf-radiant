'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const commentaries = [
  {
    id: 1,
    number: '01',
    title: "Trump–Putin–Xi Triangle: Power Rebalancing and Global Fluidity",
    tag: "Geopolitics",
    excerpt:
      "The recent diplomatic engagements involving U.S. President Donald Trump's visit to China and parallel high-level interactions between President Vladimir Putin and Chinese leadership reflect a broader reconfiguration in global power relations.",
    body: [
      "The recent diplomatic engagements involving U.S. President Donald Trump's visit to China and parallel high-level interactions between President Vladimir Putin and Chinese leadership reflect a broader reconfiguration in global power relations. While not a formal trilateral arrangement, the sequencing of these meetings highlights China's growing role as a central node in global diplomacy amid intensifying major-power competition.",
      "President Trump's visit to Beijing was marked by symbolic political optics and limited substantive breakthroughs. Reports indicate that discussions touched upon trade, strategic communication, and crisis management channels, but key structural disputes—including Taiwan, technological decoupling, and global security alignments—remain unresolved. In contrast, Russia's engagement with China continues to deepen in a more structured and long-term strategic direction, particularly in energy cooperation, defense alignment, and coordination in multilateral forums.",
      "The broader significance lies in the evolving nature of global order. Rather than a rigid bipolar system, the current phase reflects a fluid and networked configuration where major powers simultaneously compete and cooperate. China's position is increasingly that of a balancing actor, engaging multiple poles without full alignment, while maximizing strategic autonomy and influence.",
      "The United States continues to rely on personalized, leader-driven diplomacy, prioritizing deal-making over institutional consensus. However, the durability of such outcomes remains uncertain in the absence of broader structural agreements. Russia, on the other hand, continues to leverage its strategic alignment with China to offset Western pressure and sustain geopolitical relevance.",
      "For smaller and middle states, this environment introduces both uncertainty and selective opportunity. While economic and diplomatic diversification becomes more feasible, strategic unpredictability increases due to shifting alignments and transactional diplomacy among major powers.",
      "Overall, the Trump–Putin–Xi dynamic reflects not an alliance system but a pattern of competitive coexistence, where global order is increasingly defined by flexibility, ambiguity, and negotiated influence.",
    ],
  },
  {
    id: 2,
    number: '02',
    title: "US–Iran Talks: Coercive Diplomacy and Fragile Engagement",
    tag: "Diplomacy",
    excerpt:
      "The ongoing diplomatic engagement between the United States and Iran represents a highly fragile attempt to manage one of the most enduring geopolitical tensions in the Middle East.",
    body: [
      "The ongoing diplomatic engagement between the United States and Iran represents a highly fragile attempt to manage one of the most enduring geopolitical tensions in the Middle East. Recent developments suggest that while both sides remain open to negotiation, the process is deeply constrained by mutual distrust, regional security calculations, and intermittent escalation dynamics.",
      "Statements from U.S. officials, including Secretary of State Marco Rubio, indicate that negotiations remain active, though accompanied by strong deterrent signaling. References to maintaining open maritime routes and ensuring regional stability underscore a dual-track approach combining diplomacy with coercive pressure. This reflects a broader pattern in contemporary international politics where negotiation and strategic signaling operate simultaneously rather than sequentially.",
      "Iran's position remains centered on sanctions relief, sovereignty concerns, and recognition of its regional role. However, domestic political constraints and external pressures limit its flexibility in negotiations. At the same time, periodic military incidents and retaliatory rhetoric contribute to cycles of escalation that weaken trust between the parties.",
      "Unlike earlier frameworks such as the JCPOA, current discussions appear less institutionally anchored and more dependent on direct bargaining and external facilitation. This reduces predictability and increases vulnerability to political shifts and external shocks.",
      "The implications extend beyond the immediate parties. The stability of the Gulf region remains central to global energy flows, maritime security, and international trade routes. Even limited disruptions in negotiations can produce broader volatility in energy markets and global economic confidence.",
      "For the wider international system, the US–Iran engagement reflects a pattern of \"managed instability,\" where conflict is contained but not fully resolved. Diplomacy proceeds, but under constant pressure from security concerns and strategic mistrust.",
    ],
  },
  {
    id: 3,
    number: '03',
    title: "Rubio in India: Strategic Adjustment in a Complex Partnership",
    tag: "Foreign Policy",
    excerpt:
      "The visit of U.S. Secretary of State Marco Rubio to India highlights an important phase of adjustment in bilateral relations shaped by both strategic convergence and emerging friction.",
    body: [
      "The visit of U.S. Secretary of State Marco Rubio to India highlights an important phase of adjustment in bilateral relations shaped by both strategic convergence and emerging friction. While the partnership continues to be framed within a long-term strategic context, recent developments reveal areas of divergence, particularly in trade, tariffs, and regional policy priorities.",
      "Discussions during the visit focused on economic cooperation, defense collaboration, energy security, and Indo-Pacific stability. However, the tone of engagement suggests an effort to stabilize and recalibrate rather than to announce major breakthroughs. The relationship increasingly reflects a balance between strategic necessity and transactional pragmatism.",
      "A key feature of the current phase is the growing emphasis on issue-based cooperation rather than broad ideological alignment. Trade access, technology transfer, and defense procurement are becoming central drivers of engagement, while broader geopolitical alignment is managed with caution.",
      "At the same time, India continues to pursue a multi-aligned foreign policy strategy, maintaining engagement with multiple global power centers. This creates both flexibility and complexity in its external relations, particularly in balancing partnerships across competing geopolitical frameworks.",
      "For the United States, India remains a critical partner in broader Indo-Pacific calculations. However, policy inconsistencies in trade and regional engagement have introduced elements of uncertainty. For India, the challenge lies in preserving strategic autonomy while deepening selective cooperation with major powers.",
      "For the broader international system, such recalibrations among major democracies influence regional stability and economic integration patterns. They also shape the strategic environment for middle and smaller states, which are affected by fluctuations in major-power coordination.",
      "In essence, the visit reflects not a transformation of the partnership, but an effort to manage differences within an evolving and increasingly complex global order.",
    ],
  },
  {
    id: 4,
    number: '04',
    title: "India's Quad Diplomacy and the Logic of Strategic Convergence",
    tag: "Indo-Pacific",
    excerpt:
      "The recent Quad Foreign Ministers' Meeting in New Delhi once again reflected the growing relevance of minilateral groupings in contemporary geopolitics, underscoring shared priorities in maritime security, critical minerals, and Indo-Pacific connectivity.",
    body: [
      "The recent Quad Foreign Ministers' Meeting in New Delhi once again reflected the growing relevance of minilateral groupings in contemporary geopolitics. Bringing together India, the United States, Japan, and Australia, the meeting underscored shared priorities in maritime security, critical minerals, resilient supply chains, energy cooperation, and Indo-Pacific connectivity.",
      "Rather than functioning as a formal alliance, the Quad continues to evolve as a flexible platform for policy coordination. This design aligns well with India's broader foreign policy orientation, which seeks structured cooperation without rigid security commitments. In this sense, India's participation reflects a careful balance between deepening strategic engagement and preserving autonomy in decision-making.",
      "Prime Minister Narendra Modi's leadership has been central to this approach. India has positioned the Quad not as an exclusive bloc, but as an open and issue-based mechanism that contributes to regional stability and public goods in the Indo-Pacific. This framing has allowed India to strengthen partnerships with advanced economies while maintaining engagement with other major power centers.",
      "External Affairs Minister S. Jaishankar has consistently articulated this model of diplomacy as one grounded in realism and national interest, where partnerships are diversified rather than concentrated. His emphasis on issue-based cooperation has helped normalize India's simultaneous engagement with multiple strategic groupings, including BRICS and other Global South platforms.",
      "The significance of the latest Quad engagement extends beyond security cooperation. Increasing focus on critical minerals, technology supply chains, clean energy, and infrastructure resilience reflects a broader shift in global geopolitics, where economic security is becoming inseparable from strategic stability. India's active role in shaping this agenda highlights its growing influence in defining the contours of Indo-Pacific cooperation.",
      "As global polarization intensifies, India's approach through the Quad illustrates a broader diplomatic logic: engagement without exclusivity, cooperation without dependency, and alignment without alignment politics.",
    ],
  },
  {
    id: 5,
    number: '05',
    title: "BRICS Chairship and India's Effort to Shape a More Inclusive Global Order",
    tag: "Global Governance",
    excerpt:
      "India's current role within BRICS comes at a time when debates over global governance reform and the voice of the Global South are gaining renewed attention, with New Delhi emphasizing resilience, sustainability, and institutional reform.",
    body: [
      "India's current role within BRICS comes at a time when debates over global governance reform and the voice of the Global South are gaining renewed attention. Under its chairship, New Delhi has sought to emphasize themes such as resilience, sustainability, development cooperation, and institutional reform.",
      "The recent BRICS Foreign Ministers' Meeting, chaired by External Affairs Minister S. Jaishankar, reflected this direction. Discussions centered on strengthening economic cooperation, enhancing coordination among emerging economies, and advancing reforms in global institutions to make them more representative of contemporary power realities.",
      "India's approach to BRICS is notable for its attempt to balance continuity with adaptation. While the grouping has expanded and diversified, New Delhi has consistently advocated a pragmatic agenda focused on development cooperation, financial stability, and technology collaboration rather than ideological alignment.",
      "Prime Minister Narendra Modi's broader foreign policy framework situates BRICS alongside other major platforms such as the G20 and the Quad, reflecting India's multi-vector diplomacy. This approach allows India to engage both established and emerging power structures simultaneously, while maintaining policy flexibility.",
      "External Affairs Minister S. Jaishankar has repeatedly highlighted that global governance must reflect present-day realities rather than post-war structures. India's emphasis on institutional reform therefore aligns with a wider demand from developing countries for a more balanced international system.",
      "India's position within the Global South is strengthened by its ability to combine diplomatic advocacy with practical cooperation. Initiatives in digital public infrastructure, development partnerships, disaster response, and capacity building have contributed to India's image as a provider of scalable and adaptable development solutions.",
      "In this evolving geopolitical environment, India's BRICS engagement reflects a broader diplomatic effort: to contribute to a more inclusive global order while maintaining constructive relations across different geopolitical groupings.",
    ],
  },
];

const tagColors: Record<string, string> = {
  Geopolitics: "bg-[#2B698E]/10 text-[#2B698E]",
  Diplomacy: "bg-emerald-50 text-emerald-700",
  "Foreign Policy": "bg-amber-50 text-amber-700",
  "Indo-Pacific": "bg-sky-50 text-sky-700",
  "Global Governance": "bg-violet-50 text-violet-700",
};

export default function CommentariesPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">

      {/* HEADER */}
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
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {commentaries.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              >
                <div
                  className={`rounded-2xl overflow-hidden transition-shadow duration-300 ${
                    isOpen ? 'shadow-2xl' : 'shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* ACCORDION HEADER */}
                  <button
                    onClick={() => toggle(item.id)}
                    className={`w-full text-left px-8 py-7 flex items-start gap-6 transition-colors duration-300 ${
                      isOpen
                        ? 'bg-[#1E2A3A] text-white'
                        : 'bg-white hover:bg-gray-50 text-[#1E2A3A]'
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`text-4xl font-bold leading-none flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                        isOpen ? 'text-[#7ABDE4]' : 'text-[#2B698E]/20'
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                            isOpen
                              ? 'bg-white/10 text-[#7ABDE4]'
                              : tagColors[item.tag]
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold leading-snug">
                        {item.title}
                      </h2>
                      {!isOpen && (
                        <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {item.excerpt}
                        </p>
                      )}
                    </div>

                    {/* Chevron */}
                    <span
                      className={`flex-shrink-0 mt-1 transition-transform duration-400 ${
                        isOpen ? 'rotate-180 text-[#7ABDE4]' : 'text-[#2B698E]'
                      }`}
                    >
                      <ChevronDown size={24} />
                    </span>
                  </button>

                  {/* ACCORDION BODY */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#1E2A3A] px-8 pt-2 pb-10 border-t border-white/10">
                          <div className="max-w-4xl space-y-5">
                            {item.body.map((para, i) => (
                              <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: i * 0.05 }}
                                className="text-gray-300 leading-relaxed text-[0.97rem]"
                              >
                                {para}
                              </motion.p>
                            ))}
                          </div>

                          {/* Close hint */}
                          <button
                            onClick={() => toggle(item.id)}
                            className="mt-8 text-sm text-[#7ABDE4] hover:text-white flex items-center gap-1.5 transition-colors"
                          >
                            <ChevronDown size={16} className="rotate-180" />
                            Collapse
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}