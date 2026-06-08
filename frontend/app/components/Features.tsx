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

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, delay = 0, isInView }: FeatureCardProps) => {
  return (
    <div 
      className="flex flex-col items-center gap-4 transition-all duration-700 ease-out"
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)'
      }}
    >
      <div className="w-20 h-20 flex items-center justify-center">
        <Icon className="w-16 h-16 text-blue-900" strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
  );
};

export default function MissionVisionSection() {
  const [statsRef, statsInView] = useInView();
  const [contentRef, contentInView] = useInView();

  return (
    <div className="w-full bg-white">
      {/* Stats Section */}
      <div ref={statsRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <StatCard
            icon={Award}
            value={200}
            label="Policy Experts Engaged"
            delay={0}
            isInView={statsInView}
          />
          <StatCard
            icon={Backpack}
            value={10}
            label="Research Outputs Shared"
            delay={100}
            isInView={statsInView}
          />
          <StatCard
            icon={Globe}
            value={3}
            label="Global Partnerships"
            delay={200}
            isInView={statsInView}
          />
          <StatCard
            icon={Users}
            value={50}
            label="Young Scholars Mentored"
            delay={300}
            isInView={statsInView}
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div ref={contentRef} className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="relative">
          {/* Large Background Text */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our Mission & Vision
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  At Innovate Research Foundation, our <span className="font-semibold text-gray-900">mission</span> is to
                  generate policy-relevant research that addresses the
                  pressing global and regional challenges of our time.
                </p>

                <p>
                  Our <span className="font-semibold text-gray-900">vision</span> is to amplify Nepal&apos;s strategic voice on the world
                  stage and become South Asia&apos; premier hub for policy
                  innovation, global dialogue, and knowledge exchange.
                </p>
              </div>

              <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded transition-colors duration-300 text-base uppercase tracking-wide">
                Explore Himalayan Dialogue
              </button>
            </div>

            {/* Right Content - Feature Grid */}
            <div 
              className="grid grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ease-out"
              style={{ 
                transitionDelay: '400ms',
                opacity: contentInView ? 1 : 0,
                transform: contentInView ? 'translateX(0)' : 'translateX(30px)'
              }}
            >
              <FeatureCard
                icon={({ className, strokeWidth }: LucideProps) => (
                  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
                    <path d="M9 2v4M15 2v4M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <circle cx="12" cy="14" r="3" />
                  </svg>
                )}
                title="Research"
                delay={0}
                isInView={contentInView}
              />
              <FeatureCard
                icon={({ className, strokeWidth }: LucideProps) => (
                  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h8M8 14h4" />
                  </svg>
                )}
                title="Dialogue"
                delay={100}
                isInView={contentInView}
              />
              <FeatureCard
                icon={({ className, strokeWidth }: LucideProps) => (
                  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                )}
                title="Climate Policy"
                delay={200}
                isInView={contentInView}
              />
              <FeatureCard
                icon={({ className, strokeWidth }: LucideProps) => (
                  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                )}
                title="Regional Engagement"
                delay={300}
                isInView={contentInView}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}