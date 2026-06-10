"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sessions = [
  {
    id: 1,
    title: "SHIFTING GLOBAL ORDER",
    subtitle: "NAVIGATING NEW GEOPOLITICAL REALITIES",
    image: "/images/dummy.png"
  },
  {
    id: 2,
    title: "NEPAL'S PATH TO PROSPERITY:",
    subtitle: "EXPLORING ECONOMIC DIPLOMACY",
    image: "/images/dummy.png"
  },
  {
    id: 3,
    title: "NEPAL'S FOREIGN POLICY:",
    subtitle: "CHARTING AN INDEPENDENT COURSE",
    image: "/images/dummy.png"
  },
  
];

export default function HimalayanDialogueSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSession, setHoveredSession] = useState<number | null>(null);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="w-full bg-[#3d6b8c] relative overflow-hidden py-20">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-[#2d5570] opacity-50 whitespace-nowrap select-none pt-12">
          HIGHLIGHT
        </h2>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-2xl mb-16 max-w-8xl mx-auto">
          {/* Left Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              The Himalayan Dialogue
            </h2>
            
            <p className="text-gray-700 mb-4 italic leading-relaxed">
              IRF&apos; flagship platform for strategic dialogue on geopolitics,
              diplomacy, and regional cooperation in the Himalayan region.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The inaugural edition, held on April 7, 2025, brought
              together 200+ diplomats, policymakers, and experts to
              explore Nepal&apos; role in an evolving global landscape.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                </div>
                <span className="text-gray-800 font-medium">Shifting Global Order</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                </div>
                <span className="text-gray-800 font-medium">Economic Diplomacy for Prosperity</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                </div>
                <span className="text-gray-800 font-medium">Foreign Policy:</span>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 mb-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="h-1 flex-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: currentSlide === index ? '#1e3a5f' : '#d1d5db',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative bg-gray-200 min-h-100 lg:min-h-125">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[0, 1, 2].map((index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img
                      src="/images/dummy.png"
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-8 right-8">
                      <button className="bg-[#1e3a5f] hover:bg-[#2d5570] text-white font-semibold px-8 py-3 rounded transition-colors duration-300 text-sm uppercase tracking-wide">
                        View Event Page
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Sessions Background Text */}
        <div className="absolute left-0 right-0 flex items-center justify-center overflow-hidden pointer-events-none -mt-8">
          <h3 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-bold text-[#2d5570] opacity-30 whitespace-nowrap select-none">
            SESSIONS
          </h3>
        </div>

        {/* Sessions Grid */}
        <div className="relative z-10 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredSession(session.id)}
                onMouseLeave={() => setHoveredSession(null)}
              >
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300"
                  style={{
                    transform: hoveredSession === session.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                    zIndex: hoveredSession === session.id ? 20 : 10,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-100 overflow-hidden">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1 leading-tight">
                        {session.title}
                      </h3>
                      <p className="text-sm opacity-90 font-medium">
                        {session.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className="absolute inset-0 border-4 border-white rounded-lg transition-opacity duration-300"
                    style={{
                      opacity: hoveredSession === session.id ? 1 : 0,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}