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


export default function Home() {
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

      <section>
        <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-6 p-6">

          {/* LEFT CARD */}
          <Card className="bg-gray-100">
            <CardContent className="h-full">
              <h1 className="text-3xl mt-20 pl-20"> Recent News </h1>
              <br />
              <p className="text-xl ml-20">
                Stay updated with our latest research highlights, policy briefs,
                <br />
                and strateegic dialogues
              </p>
              <Button className="bg-blue-600 rounded hover:bg-blue-700 ml-20 mt-15">
                READ ALL NEWS
              </Button>
            </CardContent>
          </Card>

          {/* RIGHT CARD */}
          <Card className="bg-linear-to-r from-[#2B698E] to-[#7ABDE4]">
            <CardContent className="h-full pl-2">
              <Link href="/himalayan">
                <h1 className="mt-20 text-4xl text-gray-700">
                  IRF Hosts First Himalayan Dialogue
                </h1>
                <br />
                <p className="text-xl">
                  The Innovative Research Foundation successfully hosted the inaugural
                  Himalayan Dialogue on April 7, 2025, in Kathmandu. The high level
                  event gathered over 200 participants including diplomats, policy
                  experts, academics, and business leaders from Nepal and around the world.
                </p>

                <div className="flex justify-end mt-10 mr-4">
                  <Button className="flex items-center gap-2 bg-blue-600 rounded hover:bg-blue-700">
                    READ MORE <ArrowRight size={20} />
                  </Button>
                </div>
              </Link>
            </CardContent>
          </Card>

        </div>
      </section>


    </>
  );
}
