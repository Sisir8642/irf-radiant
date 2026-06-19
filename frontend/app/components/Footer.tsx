import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (

    <footer className="bg-[#23253A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/images/image.png" alt="logofooter " className="mb-5" />
            <p className="text-gray-400">Promoting policy innovation, dialogue, and global cooperation from the heart of the Himalayas.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-2xl">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/himalayan_dialogue" className="hover:text-white transition-colors">Himalayan_Dialogue</a></li>
              <li><a href="/gallary" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-2xl">Follow Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.facebook.com/people/Himalayan-Dialogue/61573782821345/" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Facebook size={24} />
              </a></li>
              <li><a href="https://x.com/HimalayanD_" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Twitter size={24} />
              </a></li>
              <li><a href="https://www.youtube.com/@HimalayanDialogue" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Youtube size={24} />
              </a></li>
              <li><a href="https://www.instagram.com/himalayandialogue/" target="_blank" rel="noopener noreferrer" className="text-[#2B698E] hover:text-[#7ABDE4] transition-colors">
                <Instagram size={24} />
              </a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-2xl">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+977 985-1085096</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>himalayandialogue.com@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Subidhanagar, Tinkune, KTM, M8PV+5R Kathmandu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; IRF@2025. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
}