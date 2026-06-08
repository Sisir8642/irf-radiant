'use client';
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-[#23253A] shadow-md sticky top-0 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 h-22`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex justify-between items-center py-4">

          <div className="flex items-center gap-3 ">
            <Link href="/">
              <Image
                src="/images/image.png"
                alt="Passion Logo"
                height={112}
                width={200}
                className="h-17 w-auto" />

            </Link>
          </div>

          <div className="flex items-center gap-6">

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-[#7ABDE4] font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#49a8df] hover:border-2 hover:rounded-2xl hover:border-[#4e56b5]">HOME</Link>
              <Link href="/about" className="text-[#7ABDE4] font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#49a8df]  hover:border-2 hover:rounded-2xl hover:border-[#4e56b5]">ABOUT US</Link>             
             <div className="relative group">
                <button
                  className="text-[#7ABDE4] font-medium px-3 py-1 rounded-2xl border-2 border-transparent transition-all duration-300
             hover:text-[#49a8df] hover:border-[#4e56b5] cursor-pointer"
                >
                  EVENTS
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-[#7ABDE4]  border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link
                    href="/himalayan_dialogue"
                    className="block w-full text-left px-3 py-1 rounded-10 border-2 border-transparent text-white-700 font-medium
             transition-all duration-300 hover:text-[#010c12] hover:border-[#d5d6e3]"
                  >
                    Himalayan Dialogue
                  </Link>
                  <Link
                    href="/commentaries"
                    className="block w-full text-left px-3 py-1 rounded-10 border-2 border-transparent text-white-700 font-medium
             transition-all duration-300 hover:text-[#010c12] hover:border-[#d5d6e3]"
                  >
                    Commentaries
                  </Link>
                  <Link
                    href="/himalayan_dialogue"
                    className="block w-full text-left px-3 py-1 rounded-10 border-2 border-transparent text-white-700 font-medium
             transition-all duration-300 hover:text-[#010c12] hover:border-[#d5d6e3]"
                  >
                    India Diplomacy
                  </Link>



                </div>
              </div>
              <Link href="/contact" className="text-[#7ABDE4]  font-medium px-3 py-1 rounded transition-all duration-300 
              hover:border-2 hover:rounded-2xl hover:text-[#7ABDE4] hover:border-[#4e56b5]">CONTACT US</Link>
            </nav>


            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu  color="white" size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
  <div className="md:hidden border border-gray-300 bg-white rounded-b-xl shadow-lg mx-4 mb-2">
    <nav className="px-4 py-4 space-y-3">
      <Link href="/" className="block text-gray-700 hover:text-[#2B698E] font-medium">Home</Link>
      <Link href="/about" className="block text-gray-700 hover:text-[#2B698E] font-medium">About Us</Link>
      <Link href="/himalayan_dialogue" className="block text-gray-700 hover:text-[#2B698E] font-medium">Himalayan Dialogue</Link>
      <Link href="/contact" className="block text-gray-700 hover:text-[#2B698E] font-medium">Contact</Link>
    </nav>
  </div>
)}
    </header>
  );
}
