'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
};

const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
};

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">

            {/* HEADER SECTION */}
            <section className="relative bg-[#1E2A3A] py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                        About Us
                    </h1>
                    <div className="w-full h-px bg-white/70" />
                </div>
            </section>

            {/* MESSAGE SECTION */}
            <section className="py-20">
                <div className=" grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-6 p-6 ">

                    {/* LEFT CARD – Image from LEFT */}
                    <motion.div
                        variants={leftVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Card className="bg-gray-100 h-full">
                            <CardContent className="h-full flex items-center justify-center">
                                <img
                                    src="/images/chairman.png"
                                    alt="about sec"
                                    className="max-w-full h-auto"
                                />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* RIGHT CARD – Text from RIGHT */}
                    <motion.div
                        variants={rightVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    >
                        <Card className="bg-gradient-to-r from-[#2B698E] to-[#7ABDE4] h-full">
                            <CardContent className="h-full pl-2 text-white space-y-4">
                                <h1 className="text-2xl font-semibold">
                                    Message from Chairperson
                                </h1>

                                <p>
                                    At a time when the global landscape is defined by volatility,
                                    power transitions, and urgent planetary challenges, Nepal must
                                    find its voice not only as an observer but as an active
                                    contributor to global discourse. The Innovate Research
                                    Foundation was established with this conviction.
                                </p>

                                <p>
                                    IRF represents more than a think tank, it is a platform for
                                    insight, dialogue, and impact. Our mission is to generate ideas
                                    that matter, shape policies that endure, and connect Nepal’s
                                    strategic thinking to regional and global narratives. As
                                    Chairperson, I am proud to lead a team that values intellectual
                                    independence, constructive engagement, and purpose-driven
                                    research.
                                </p>

                                <p>
                                    We invite scholars, practitioners, and institutions to join us
                                    in our journey to inform, innovate, and influence for a better
                                    tomorrow.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 space-y-20">

                    {/* Focus Areas */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">
                            Focus Areas
                        </h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Card */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Geopolitics and Foreign Policy
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
IRF analyzes global and regional power shifts, offering insights into Nepal’s role in the Indo-Pacific, China’s Belt and Road Initiative, and multilateral diplomacy.                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Geo-Economics and Economic Diplomacy
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    IRF analyzes how trade, investment, technology, and connectivity shape diplomacy, supporting Nepal’s strategic economic engagement regionally and globally.
                                </p>       
                                 </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Climate Diplomacy
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    IRF examines how Nepal and Himalayan countries can strengthen climate resilience, shape global climate negotiations, and advance environmental sustainability through regional and international cooperation. </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Tourism Diplomacy
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    IRF explores how Nepal leverages tourism, culture, and heritage to boost soft power and create economic opportunities.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Strategic Policy Engagement
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Bridging research and decision-making with evidence-based policy and advisory initiatives.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* What We Do */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">
                            What We Do
                        </h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Research and Policy Analysis
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    IRF produces original research through papers, policy briefs, and
                                    strategic notes. We offer deep analysis on current trends,
                                    strategic competition, regional diplomacy, and issue-specific
                                    challenges such as energy, trade, and climate.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Strategic Dialogues and Events
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We host expert roundtables and workshops to foster multi-stakeholder dialogue and shared solutions.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Government and Private Sector Engagement
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    IRF shares evidence-based policy research with government and private stakeholders to inform decisions.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    International Collaboration
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    IRF partners with global think tanks and institutions to connect Nepal’s perspectives with international knowledge networks.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm md:col-span-2">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                    Training and Capacity Building
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                   Through training programs, policy labs, and mentorship, IRF develops Nepal’s future leaders in diplomacy and strategic affairs.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}
