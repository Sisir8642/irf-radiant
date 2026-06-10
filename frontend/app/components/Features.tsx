"use client";
import { useEffect, useRef, useState } from "react";
import { Award, Backpack, Globe, Users } from "lucide-react";
import { LucideProps } from "lucide-react";
import { StatCardProps } from "@/types/type";
import { FeatureCardProps } from "@/types/type";

// Counter Animation Hook
const useCountAnimation = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuad(progress));

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
};

// Intersection Observer Hook - Fixed
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.2, ...options });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isInView] as const;
};

// Stat Card Component
const StatCard = ({ icon: Icon, value, suffix = "+", label, delay = 0, isInView }: StatCardProps) => {
  const count = useCountAnimation(value, 2000, isInView);

  return (
    <div 
      className="flex flex-col items-center gap-3 transition-all duration-700 ease-out"
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-gray-900">
          {count}{suffix}
        </div>
        <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide mt-1">
          {label}
        </div>
      </div>
    </div>
  );
};

export default function MissionVisionSection() {
  const [statsRef, statsInView] = useInView();
  const [contentRef, contentInView] = useInView();

  return (
    <div className="w-full bg-red-500">

      <div ref={contentRef} className="container mx-auto px-4 bg-gray-50">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-gray-100 whitespace-nowrap select-none">
              MISSION
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div 
              className="space-y-8 transition-all duration-700 ease-out"
              style={{ 
                transitionDelay: '200ms',
                opacity: contentInView ? 1 : 0,
                transform: contentInView ? 'translateX(0)' : 'translateX(-30px)'
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}