"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Highlight {
  id: number;
  text: string;
}

interface Program {
  id: number;
  title: string;
  category: string;
  image: string | null;
  description: string;
  objective: string;
  participants: string;
  expected_outcome: string;
  date: string;
  status: "current" | "upcoming";
  highlights: Highlight[];
}

const Program = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/program/`);
        if (!res.ok) throw new Error("Failed to fetch programs");
        const data: Program[] = await res.json();
        setPrograms(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const currentPrograms = programs.filter((p) => p.status === "current");
  const upcomingPrograms = programs.filter((p) => p.status === "upcoming");

  if (loading) {
    return (
      <div className="py-24 text-center text-gray-500">Loading programs...</div>
    );
  }

  if (error) {
    return (
      <div className="py-24 text-center text-red-500">Error: {error}</div>
    );
  }

  return (
    <div>
      <section className="relative bg-[#1E2A3A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ABDE4]"
          >
            Home / Events / Programs
          </motion.p>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Programs
          </h1>

          <div className="w-full h-px bg-white/70" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-sm p-10">
            <p className="text-lg text-gray-600 leading-8">
              Through strategic dialogues, policy forums, fellowships, and
              research-driven initiatives, IRF creates platforms that connect
              ideas with action and strengthen Nepal's role in regional and
              global conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="uppercase tracking-[4px] text-[#2B698E] text-sm font-semibold">
              Active Initiatives
            </span>

            <h2 className="text-4xl font-bold text-[#1E2A3A] mt-3">
              Current Programs
            </h2>
          </div>

          {currentPrograms.map((program) => (
            <div
              key={program.id}
              className="grid lg:grid-cols-2 gap-10 items-center mb-20"
            >
              <div>
                {program.image && (
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-3xl shadow-xl"
                  />
                )}
              </div>

              <div>
                <span className="text-[#2B698E] uppercase tracking-[3px] text-sm">
                  {program.category}
                </span>

                <h3 className="text-4xl font-bold text-[#1E2A3A] mt-4 mb-6">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-8">
                  {program.description}
                </p>

                <div className="space-y-4">
                  {program.highlights.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#7ABDE4]" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-[#2B698E] text-sm font-semibold">
              Program Insights
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A3A] mt-3">
              Upcoming Program Details
            </h2>

            <div className="w-24 h-1 bg-[#7ABDE4] mx-auto mt-5 rounded-full" />
          </div>

          <div className="space-y-10">
            {upcomingPrograms.map((program, index) => (
              <div
                key={program.id}
                className="bg-white rounded-3xl shadow-sm overflow-hidden"
              >
                <div className="grid lg:grid-cols-[140px_1fr]">
                  {/* Left Side */}
                  <div className="bg-[#1E2A3A] text-white p-8 flex flex-col justify-center items-center">
                    <p className="text-sm uppercase tracking-[3px] text-[#7ABDE4]">
                      Program
                    </p>

                    <span className="text-5xl font-bold mt-3">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Right Side */}
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#2B698E]/10 text-[#2B698E] rounded-full text-sm">
                        {program.date}
                      </span>

                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        Upcoming
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-[#1E2A3A] mb-5">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">
                      {program.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#2B698E] mb-2">
                          Objective
                        </h4>

                        <p className="text-sm text-gray-600">
                          {program.objective}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#2B698E] mb-2">
                          Participants
                        </h4>

                        <p className="text-sm text-gray-600">
                          {program.participants}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#2B698E] mb-2">
                          Expected Outcome
                        </h4>

                        <p className="text-sm text-gray-600">
                          {program.expected_outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E2A3A] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Why Our Programs Matter
          </h2>

          <p className="text-xl text-gray-300 leading-9">
            IRF's programs are designed to generate informed dialogue,
            strengthen policy capacity, foster international collaboration,
            and position Nepal as an active contributor to regional and
            global discussions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Program;