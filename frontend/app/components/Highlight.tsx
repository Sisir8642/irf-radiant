"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Session {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  order: number;
}

interface HighlightData {
  id: number;
  title: string;
  tagline: string;
  description: string;
  button_text: string;
  button_url: string;
  slide_image_1: string;
  slide_image_2: string;
  slide_image_3: string;
  sessions: Session[];
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

export default function HimalayanDialogueSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSession, setHoveredSession] = useState<number | null>(null);
  const [data, setData] = useState<HighlightData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchHighlight = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/api/highlight/`);

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const result: HighlightData | HighlightData[] =
        await response.json();

      setData(Array.isArray(result) ? result[0] : result);
    } catch (err) {
      console.error(err);
      setError("Failed to load highlight data.");
    } finally {
      setLoading(false);
    }
  };

  fetchHighlight();
}, []);

  const slides = data
    ? [data.slide_image_1, data.slide_image_2, data.slide_image_3].filter(Boolean)
    : [];

  const slideCount = slides.length || 1;

  // Auto-advance slider
  useEffect(() => {
    if (slideCount <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const sortedSessions = data?.sessions
    ? [...data.sessions].sort((a, b) => a.order - b.order)
    : [];

  if (loading) {
    return (
      <div className="w-full bg-[#3d6b8c] py-20 flex items-center justify-center">
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full bg-[#3d6b8c] py-20 flex items-center justify-center">
        <p className="text-white text-lg font-medium">{error || "No data available."}</p>
      </div>
    );
  }

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
              {data.title}
            </h2>

            <p className="text-gray-700 mb-4 italic leading-relaxed">
              {data.tagline}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {data.description}
            </p>

            <div className="space-y-3 mb-8">
              {sortedSessions.map((session) => (
                <div key={session.id} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                  </div>
                  <span className="text-gray-800 font-medium">{session.title}</span>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="h-1 flex-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: currentSlide === index ? "#1e3a5f" : "#d1d5db",
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
                {slides.map((image, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <Link href={data.button_url || "/programs"}>
                      <div className="absolute bottom-8 left-8 right-8">
                        <button className="bg-[#1e3a5f] hover:bg-[#2d5570] text-white font-semibold px-8 py-3 rounded transition-colors duration-300 text-sm uppercase tracking-wide">
                          {data.button_text || "View Event Page"}
                        </button>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
              <>
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
              </>
            )}
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
            {sortedSessions.map((session) => (
              <div
                key={session.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredSession(session.id)}
                onMouseLeave={() => setHoveredSession(null)}
              >
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300"
                  style={{
                    transform:
                      hoveredSession === session.id
                        ? "translateY(-12px) scale(1.02)"
                        : "translateY(0) scale(1)",
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