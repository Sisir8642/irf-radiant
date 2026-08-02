'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
};

const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
    // Vision & Mission State
    const [visionData, setVisionData] = useState('');
    const [missionItems, setMissionItems] = useState<string[]>([]);
    const [loadingVision, setLoadingVision] = useState(true);
    const [errorVision, setErrorVision] = useState(null);

    // Recent Achievements State
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [loadingAchievements, setLoadingAchievements] = useState(true);
    const [errorAchievements, setErrorAchievements] = useState(null);

    interface Achievement {
    title: string;
    description: string;
}

    // Fetch Vision & Mission
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Mission`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('Vision & Mission API Response:', data);
                
                let vision = '';
                let mission = '';
                
                if (Array.isArray(data) && data.length > 0) {
                    vision = data[0].vision || data[0].Vision || '';
                    mission = data[0].mission || data[0].Mission || '';
                } else if (data && typeof data === 'object') {
                    vision = data.vision || data.Vision || '';
                    mission = data.mission || data.Mission || '';
                }
                
                if (vision && mission) {
                    setVisionData(vision);
                    const items = mission.split('.').filter(item => item.trim() !== '');
                    setMissionItems(items);
                } else {
                    throw new Error('No vision or mission data found');
                }
                setLoadingVision(false);
            })
            .catch(err => {
                console.error('Vision & Mission Error:', err);
                setErrorVision(err.message);
                setLoadingVision(false);
            });
    }, []);

    // Fetch Recent Achievements
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/RecentAchievement`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('Achievements API Response:', data);
                
                let achievementsList: Achievement[] = [];
                
                if (Array.isArray(data) && data.length > 0) {
                    achievementsList = data.map(item => ({
                        title: item.title || item.Title || '',
                        description: item.description || item.Description || ''
                    }));
                } else if (data && typeof data === 'object') {
                    // If data is a single object
                    achievementsList = [{
                        title: data.title || data.Title || '',
                        description: data.description || data.Description || ''
                    }];
                }
                
                if (achievementsList.length > 0 && achievementsList[0].title) {
                    setAchievements(achievementsList);
                } else {
                    throw new Error('No achievements data found');
                }
                setLoadingAchievements(false);
            })
            .catch(err => {
                console.error('Achievements Error:', err);
                setErrorAchievements(err.message);
                setLoadingAchievements(false);
            });
    }, []);

    // Show loading state if either is loading
    if (loadingVision || loadingAchievements) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">
                {/* HEADER SECTION LOADING */}
                <div className="relative bg-[#1E2A3A] py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="h-4 bg-gray-700 w-32 rounded animate-pulse" />
                        <div className="h-12 bg-gray-700 w-64 rounded animate-pulse mt-6" />
                        <div className="w-full h-px bg-white/70 mt-6" />
                    </div>
                </div>

                {/* INTRO SECTION LOADING */}
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 animate-pulse">
                            <div className="h-6 bg-gray-600 rounded w-full mb-4" />
                            <div className="h-6 bg-gray-600 rounded w-full mb-4" />
                            <div className="h-6 bg-gray-600 rounded w-3/4" />
                        </div>
                    </div>
                </div>

                {/* VISION & MISSION LOADING */}
                <div className="py-24 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="h-4 bg-gray-300 w-32 mx-auto rounded animate-pulse" />
                            <div className="h-10 bg-gray-300 w-64 mx-auto mt-3 rounded animate-pulse" />
                            <div className="w-24 h-1 bg-gray-300 mx-auto mt-5" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-10">
                            <div className="bg-[#1E2A3A] rounded-3xl p-10 animate-pulse">
                                <div className="w-16 h-16 rounded-2xl bg-gray-700 mb-6" />
                                <div className="h-8 bg-gray-700 rounded w-40 mb-6" />
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-700 rounded w-full" />
                                    <div className="h-4 bg-gray-700 rounded w-full" />
                                    <div className="h-4 bg-gray-700 rounded w-3/4" />
                                </div>
                            </div>
                            <div className="bg-white rounded-3xl p-10 animate-pulse">
                                <div className="h-8 bg-gray-200 rounded w-40 mb-8" />
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="flex gap-4 mb-4">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                        <div className="flex-1">
                                            <div className="h-4 bg-gray-200 rounded w-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* REST OF SECTIONS LOADING */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 space-y-20">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 w-48 rounded mb-4" />
                            <div className="w-24 h-1 bg-gray-300 mb-10" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="bg-white p-7 rounded-xl shadow-sm">
                                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gray-200 rounded w-full" />
                                            <div className="h-4 bg-gray-200 rounded w-full" />
                                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1E2A3A] py-10">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="h-6 bg-gray-700 w-96 mx-auto rounded animate-pulse" />
                    </div>
                </div>
            </div>
        );
    }

    // Show error if either API fails
    if (errorVision || errorAchievements) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4] flex items-center justify-center">
                <div className="bg-white rounded-2xl p-12 max-w-md text-center shadow-2xl">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Failed to Load Data</h2>
                    <p className="text-gray-600 mb-6">
                        {errorVision || errorAchievements}
                    </p>
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]">
            {/* HEADER SECTION */}
            <section className="relative bg-[#1E2A3A] py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ABDE4]"
                    >
                        Home / About
                    </motion.p>
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                        About Us
                    </h1>
                    <div className="w-full h-px bg-white/70" />
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-white"
                    >
                        <p className="text-lg leading-relaxed mb-6">
                            The world today is witnessing an era of global uncertainty, marked by great power rivalries,
                            economic realignments, climate risks, and fluid diplomatic engagements. For countries like
                            Nepal, strategically located between China — a rising global power — and India — a regional
                            power — these shifts present both challenges and opportunities. In this complex landscape,
                            timely, informed, and pragmatic policy research is not just valuable, it is vital.
                        </p>
                        <p className="text-lg leading-relaxed">
                            The <span className="font-semibold">Innovate Research Foundation (IRF)</span> is an independent,
                            non-profit think tank based in Kathmandu, Nepal, committed to rigorous research and impactful
                            dialogue in the fields of geopolitics, geo-economics, foreign policy, economic diplomacy, and
                            climate diplomacy. Established in 2025, IRF aspires to become a trusted thought partner for
                            national and international stakeholders seeking grounded insights into regional and global affairs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* VISION & MISSION SECTION - DYNAMIC */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#2B698E] uppercase tracking-[4px] text-sm font-semibold">
                            Purpose & Direction
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A3A] mt-3">
                            Vision & Mission
                        </h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mx-auto mt-5 rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                        {/* Vision Card */}
                        <motion.div
                            variants={leftVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-[#1E2A3A] p-10"
                        >
                            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#7ABDE4]/10" />
                            <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#7ABDE4]/10" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#7ABDE4]/20 flex items-center justify-center mb-6">
                                    <svg
                                        className="w-8 h-8 text-[#7ABDE4]"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M2 12L12 2l10 10-10 10L2 12z" />
                                    </svg>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Our Vision
                                </h3>

                                <p className="text-gray-300 text-lg leading-8">
                                    {visionData}
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            variants={rightVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100"
                        >
                            <h3 className="text-3xl font-bold text-[#1E2A3A] mb-8">
                                Our Mission
                            </h3>

                            <div className="space-y-6">
                                {missionItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 group"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-[#7ABDE4] text-white flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>

                                            {index !== missionItems.length - 1 && (
                                                <div className="w-[2px] flex-1 bg-[#7ABDE4]/30 mt-2" />
                                            )}
                                        </div>

                                        <div className="pb-6">
                                            <p className="text-gray-600 leading-7">
                                                {item.trim()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MESSAGE FROM CHAIRPERSON */}
            <section className="relative py-3 overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ABDE4]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2B698E]/20 rounded-full blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                            backgroundSize: "30px 30px",
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <span className="uppercase tracking-[4px] text-[#7ABDE4] text-sm font-medium">
                            Leadership Message
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-1">
                            Message From The Chairperson
                        </h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mx-auto mt-6 rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[530px_1fr] gap-8 items-center">
                        <motion.div
                            variants={leftVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-[#7ABDE4]/20 rounded-3xl blur-2xl scale-95" />
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/chairman.png"
                                        alt="Gopal Khanal, PhD – Chairman, IRF"
                                        className="w-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 text-center"
                            >
                                <h3 className="text-2xl font-bold text-white">Gopal Khanal, PhD</h3>
                                <p className="text-[#7ABDE4] uppercase tracking-[3px] text-sm mt-2">Chairman, IRF</p>
                            </motion.div>
                        </motion.div>

                        {/* Message Card */}
                        <motion.div
                            variants={rightVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 md:p-12"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ABDE4]/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-52 h-52 bg-white/5 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <motion.div
                                    animate={{ rotate: [0, -5, 5, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    className="mb-6"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-[#7ABDE4]">
                                        <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7H5a3 3 0 0 1 2.17-2.88L7.17 6Zm10 0A5.001 5.001 0 0 0 12 11v7h7v-7h-4a3 3 0 0 1 2.17-2.88V6Z" />
                                    </svg>
                                </motion.div>

                                <p className="text-xl md:text-2xl leading-relaxed font-light text-white mb-8">
                                    At a time when the global landscape is defined by volatility, power transitions, and urgent planetary challenges, Nepal must find its voice not only as an observer but as an active contributor to global discourse.
                                </p>

                                <div className="space-y-5 text-white/80 leading-8">
                                    <p>The Innovate Research Foundation was established with this conviction.</p>
                                    <p>IRF represents more than a think tank: it is a platform for insight, dialogue, and impact. Our mission is to generate ideas that matter, shape policies that endure, and connect Nepal's strategic thinking to regional and global narratives.</p>
                                    <p>As Chairperson, I am proud to lead a team that values intellectual independence, constructive engagement, and purpose-driven research.</p>
                                    <p>We invite scholars, practitioners, and institutions to join us in our journey to inform, innovate, and influence for a better tomorrow.</p>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 80 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                        className="h-[2px] bg-[#7ABDE4] mb-2"
                                    />
                                    <h4 className="text-xl font-semibold text-white">Gopal Khanal, PhD</h4>
                                    <p className="text-[#7ABDE4] tracking-[2px] text-sm uppercase mt-1">Chairman, Innovate Research Foundation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FOCUS AREAS & OTHER SECTIONS */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 space-y-20">
                    {/* Focus Areas */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">Focus Areas</h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Geopolitics */}
                            <div className=" bg-white p-7 rounded-xl shadow-sm border-t-4 border-[#2B698E]
            transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">
                                    Geopolitics and Foreign Policy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    IRF analyzes global and regional power shifts, providing strategic insights into Nepal's role in the Indo-Pacific, evolving great-power dynamics, multilateral diplomacy, and regional cooperation. Special attention is given to China's rise and its implications for Nepal and South Asia.
                                </p>
                            </div>

                            <div className="bg-white p-7 rounded-xl shadow-sm border-t-4 border-[#2B698E] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">Geo-Economics and Economic Diplomacy</h3>
                                <p className="text-gray-600 leading-relaxed">IRF examines how trade, investment, infrastructure, technology, and connectivity influence international relations, helping Nepal strengthen its economic partnerships and strategic engagement in a rapidly changing global economy.</p>
                            </div>

                            <div className="bg-white p-7 rounded-xl shadow-sm border-t-4 border-[#2B698E] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">Climate Diplomacy</h3>
                                <p className="text-gray-600 leading-relaxed">IRF explores climate governance, environmental security, and sustainable development, focusing on how Nepal and Himalayan nations can enhance resilience, influence global climate discussions, and strengthen regional cooperation.</p>
                            </div>

                            <div className="bg-white p-7 rounded-xl shadow-sm border-t-4 border-[#2B698E] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">Tourism Diplomacy</h3>
                                <p className="text-gray-600 leading-relaxed">IRF studies the role of tourism, culture, heritage, and spirituality in advancing Nepal's soft power, strengthening international partnerships, and creating sustainable economic opportunities through global engagement.</p>
                            </div>

                            <div className="bg-white p-7 rounded-xl shadow-sm border-t-4 border-[#2B698E] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">Strategic Policy Engagement</h3>
                                <p className="text-gray-600 leading-relaxed">Beyond research, IRF serves as a platform for policy dialogue and practical engagement, collaborating with government institutions, the private sector, academia, and civil society to transform ideas into actionable policy outcomes.</p>
                            </div>

                            <div className="bg-white p-7 rounded-xl shadow-sm border-t-4 border-[#2B698E] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">Emerging Global Challenges</h3>
                                <p className="text-gray-600 leading-relaxed">IRF monitors emerging trends including technological transformation, cybersecurity, artificial intelligence, migration, energy security, and evolving global governance structures that shape Nepal's future policy landscape.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Identity */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">Our Identity</h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-[#2B698E]">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">Non-Profit</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">IRF is a not-for-profit organization, driven by public service, not commercial interests.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-[#2B698E]">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">Independent</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">We maintain academic and intellectual independence while working constructively with a range of stakeholders.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-[#2B698E]">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">Kathmandu-Based, Globally Oriented</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">While rooted in Nepal, IRF's perspective is regional and international.</p>
                            </div>
                        </div>
                    </div>

                    {/* Flagship Event */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">Flagship Event: The Himalayan Dialogue</h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <div className="bg-gradient-to-r from-[#1E2A3A] to-[#2B698E] rounded-2xl p-8 md:p-12 text-white">
                            <p className="text-lg leading-relaxed mb-6">
                                IRF's hallmark initiative is{" "}
                                <a
                                    href="https://www.himalayandialogue.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-[#7ABDE4] hover:text-white transition-colors duration-300 underline underline-offset-4"
                                >
                                    The Himalayan Dialogue
                                </a>
                                {" "}— a high-level platform to debate pressing regional and global issues through a Himalayan lens.
                            </p>
                            <p className="leading-relaxed mb-8 text-gray-200">
                                On <span className="font-semibold text-white">April 7, 2025</span>, IRF successfully hosted the inaugural Himalayan Dialogue in Kathmandu.
                                The event was inaugurated by Nepal's Prime Minister, <span className="font-semibold text-white">Rt. Hon. KP Sharma Oli</span>, reflecting
                                the national importance of the initiative. Over <span className="font-semibold text-white">200 participants</span> — including diplomats,
                                policymakers, business leaders, academics, and experts — joined from Nepal and abroad.
                            </p>

                            <h3 className="text-lg font-semibold text-[#7ABDE4] mb-4">Key Discussions</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#7ABDE4] mt-2 flex-shrink-0" />
                                    <span>Shifting Global Order: Challenges, Opportunities and Strategies for Nepal</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#7ABDE4] mt-2 flex-shrink-0" />
                                    <span>Exploring Economic Diplomacy: Path to Prosperity</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#7ABDE4] mt-2 flex-shrink-0" />
                                    <span>Foreign Policy of Nepal: Consensus and Commitment</span>
                                </li>
                            </ul>

                            <p className="mt-6 text-gray-300 text-sm">The Himalayan Dialogue has already established itself as a credible forum for shaping regional thinking and fostering Nepal's strategic voice.</p>
                        </div>
                    </div>

                    {/* What We Do */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">What We Do</h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">Research and Policy Analysis</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">IRF produces original research through papers, policy briefs, and strategic notes. We offer deep analysis on current trends, strategic competition, regional diplomacy, and issue-specific challenges such as energy, trade, and climate.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">Strategic Dialogues and Events</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">We host expert roundtables, policy workshops, and conferences to foster dynamic, multi-stakeholder engagement. Our events bring together diverse voices to explore shared solutions.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">Government and Private Sector Engagement</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">IRF shares evidence-based policy research with government and private stakeholders to inform real-world decisions. We offer recommendations rooted in evidence and contextual intelligence.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">International Collaboration</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">IRF partners with global think tanks and institutions through joint research, event partnerships, and institutional exchanges to connect Nepal's perspectives with international knowledge networks.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] md:col-span-2">
                                <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">Training and Capacity Building</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Through policy labs, analytical workshops, and young scholar mentorship programs, IRF develops Nepal's intellectual capacity and future leaders in foreign policy and strategic affairs.</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Achievements - DYNAMIC */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">Recent Achievements</h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Though only recently established in 2025, IRF has already gained national attention and recognition
                            as a rising policy institution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {achievements.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#7ABDE4] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-[#2B698E]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Partner With Us */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">Partner With Us</h2>
                        <div className="w-24 h-1 bg-[#7ABDE4] mb-10" />

                        <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-10">IRF actively collaborates with institutions that share our commitment to informed dialogue, evidence-based policymaking, and international cooperation. Whether through joint research, strategic consultation, policy forums, training programs, or regional initiatives, we welcome partnerships that contribute to meaningful policy impact and knowledge exchange.</p>

                            <h3 className="text-xl font-semibold text-[#2B698E] mb-6">We welcome collaboration from:</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    "International Think Tanks and Research Institutions",
                                    "National and Provincial Governments",
                                    "Private Sector Stakeholders and Chambers of Commerce",
                                    "Universities, Scholars, and Policy Schools",
                                    "Multilateral Organizations and Development Partners",
                                    "Civil Society and Knowledge Networks",
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#2B698E] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#2B698E] mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-[#1E2A3A] mb-2">Let's Build Meaningful Partnerships</h4>
                                    <p className="text-gray-600">Together, we can generate ideas, strengthen dialogue, and contribute to effective policy solutions for Nepal, the region, and beyond.</p>
                                </div>
                                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#2B698E] text-white font-medium rounded-lg transition-all duration-300 hover:bg-[#168dd7] hover:scale-105">Become a Partner →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TAGLINE FOOTER STRIP */}
            <section className="bg-[#1E2A3A] py-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-white text-lg font-medium tracking-wide">IRF: Navigating Complexity. Influencing Policy. Empowering Ideas.</p>
                </div>
            </section>
        </div>
    );
}