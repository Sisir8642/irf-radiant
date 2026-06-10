'use client'
import { ArrowRight } from "lucide-react";
import Features from "./components/Features"
import Focus from "./components/Focus"
import Highlight from "./components/Highlight"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const commentaries = [
  {
    id: 1,
    title: 'Trump–Putin–Xi Triangle: Power Rebalancing and Global Fluidity',
    content:
      'The recent diplomatic engagements involving U.S. President Donald Trump, Vladimir Putin, and Chinese leadership reflect a broader reconfiguration in global power relations. The current international system is increasingly characterized by strategic flexibility, competitive coexistence, and negotiated influence.',
  },
  {
    id: 2,
    title: 'US–Iran Talks: Coercive Diplomacy and Fragile Engagement',
    content:
      'Recent diplomatic engagement between the United States and Iran remains fragile, constrained by mutual distrust, regional security concerns, and intermittent escalation. Diplomacy continues alongside strategic pressure and deterrence.',
  },
  {
    id: 3,
    title: 'Rubio in India: Strategic Adjustment in a Complex Partnership',
    content:
      'Marco Rubio’s visit to India highlights an evolving relationship shaped by strategic convergence, trade concerns, and Indo-Pacific cooperation. The partnership continues to balance shared interests with strategic autonomy.',
  },
];

export default function Home() {
   const [openId, setOpenId] = useState<number | null>(null);

  return (
    <>
      <header
        className="flex h-screen items-center justify-center px-6 mt-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/irf.jpg')"
        }}
      >        {/* Animated container */}
        <div className="hero-box max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-semibold text-white md:text-5xl">
            Navigating Complexity. Empowering Ideas. Shaping Policy.
          </h1>

<br />
          <p className="mb-8 text-base text-gray-300 md:text-lg">
            Innovate Research Foundation (IRF) is advancing strategic thinking
            in geopolitics, climate diplomacy, and global governance from the
            heart of the Himalayas.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">


            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/Himalayan-Dialogue/61573782821345/" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/HimalayanD_" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.youtube.com/@HimalayanDialogue" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://www.instagram.com/himalayandialogue/" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </nav>
          <div className="flex flex-row justify-center">
            <Link href={'/about'}>
              <button className="flex items-center gap-2 bg-amber-300 m-10 p-3 rounded">
                About us
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

        </div>
      </header>


      {/* Animation styles */}
      <style jsx global>{`
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-box {
          animation: scaleIn 0.8s ease-out forwards;
          transform-origin: center;
        }
      `}</style>

      <section>
        <Features />
      </section>

      <section>
        <Highlight />
      </section>

      <section>
        <Focus />
      </section>

       <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6">

        {/* LEFT SIDE */}
        <Card className="bg-[#2B698E] border-0">
          <CardContent className="p-10 flex flex-col justify-center h-full">
            <h2 className="text-4xl font-bold text-white mb-4">
              Commentaries
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              IRF's policy commentaries provide timely analysis on major
              geopolitical developments, diplomatic engagements, and emerging
              strategic trends shaping regional and global affairs.
            </p>
          </CardContent>
        </Card>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {commentaries.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border"
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openId === item.id && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>


    </>
  );
}
