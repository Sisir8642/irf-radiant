'use client';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from 'lucide-react';

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const buttomVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const page = () => {

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#2B698E] to-[#7ABDE4]'>
      {/* HEADER SECTION */}
      <section className='relative bg-[#1E2A3A] py-24'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-white text-5xl md:text-6xl font-bold mb-6'>
            HIMALAYAN DIALOGUE
          </h1>
          <div className="w-full h-px bg-white/70" />
        </div>
      </section>

      <section className="py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-6 p-6 min-h-87.5 md:min-h-125 lg:min-h-150">

          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="bg-gray-100 h-full">
              <CardContent className="h-full flex items-center justify-center">
                <img
                  src="/images/kp.png"
                  alt="about sec"
                  className="max-w-full h-full"
                />
              </CardContent>
            </Card>
          </motion.div>


          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Card className="bg-gradient-to-r from-[#2B698E] to-[#7ABDE4] min-h-[350px] md:min-h-[500px]">
              <CardContent className="h-full flex flex-col justify-center text-white space-y-4 p-6">

                <span className="text-sm uppercase tracking-wide opacity-90">
                  Event Completed
                </span>

                <h1 className="text-3xl font-bold">
                  Himalayan Dialogue 2025
                </h1>

                <p className="text-lg font-semibold text-white/90">
                  The second iteration is coming soon!
                </p>

                <div className="space-y-1 text-white/90">
                  <p><span className="font-semibold">Time:</span> 12:00 PM – 6:30 PM</p>
                  <p><span className="font-semibold">Date:</span> 7th April, 2025</p>
                  <p><span className="font-semibold">Venue:</span> Everest Hotel, Kathmandu</p>
                </div>

                <div className="pt-4 border-t border-white/30 text-sm text-white/80">
                  <p>
                    Note: The inaugural Himalayan Dialogue has been successfully completed.
                    The date for the next iteration will be announced soon.
                  </p>
                </div>

              </CardContent>
            </Card>

          </motion.div>
           </div>

           <div>

          {/* button message  */}
          <motion.div
  variants={buttomVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-md p-8 md:p-12
                    flex flex-col md:flex-row gap-8">

      {/* LEFT COLUMN */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          The Himalayan Dialogue – Strategic Voices from the Himalayas
        </h1>

        <p className="text-gray-600 leading-relaxed">
          The Himalayan Dialogue is the flagship annual event of Innovate Research Foundation—bringing together
          leading voices from diplomacy, academia, policy, and business to examine pressing global and regional
          challenges from a Himalayan perspective.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Held for the first time on April 7, 2025, the inaugural event was inaugurated by
          <span className="font-medium text-gray-800"> Rt. Hon. Prime Minister KP Sharma Oli </span>
          and attended by over 200 national and international participants.
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Key Themes Discussed
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Shifting Global Order: Challenges, Opportunities & Strategies for Nepal</li>
          <li>Exploring Economic Diplomacy: A Path to Prosperity</li>
          <li>Nepal’s Foreign Policy: Building Consensus & Commitment</li>
        </ul>

        <p className="text-gray-600 leading-relaxed pt-2 border-t">
          The Himalayan region stands at the crossroads of major geopolitical transformations.
          Through this platform, IRF fosters dialogue and collaboration to shape Nepal’s strategic
          role in regional and global affairs.
        </p>
      </div>

    </div>
  </div>
</motion.div>

        </div>
      </section>

      {/* vedio section  */}

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">

  {/* Top Large Video */}
  <div className="w-full aspect-video">
    <iframe
      className="w-full h-full rounded-lg shadow-md"
      src="https://www.youtube.com/embed/eHyz79SsRgg"
      title="PM KP Sharma Oli’s Powerful Speech at Himalayan Dialogue 2025 | Opening Address"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>

  {/* Middle Row: Two Medium Videos */}
  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
    <div className="flex-1 aspect-video">
      <iframe
        className="w-full h-full rounded-lg shadow-md"
        src="https://www.youtube.com/embed/_u0vRDtRPdM"
        title="Gopal Khanal’s Insightful Speech | CEO, Foreign Affairs Media | Himalayan Dialogue 2025"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
    <div className="flex-1 aspect-video">
      <iframe
        className="w-full h-full rounded-lg shadow-md"
        src="https://www.youtube.com/embed/9MY3l_cbqmk"
        title="Mohan Gajurel’s Insightful Speech | CEO, Brand Worth Media | Himalayan Dialogue 2025"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  </div>

  {/* Bottom Row: Three Smaller Videos */}
  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
    <div className="flex-1 aspect-video max-w-200 mx-auto sm:mx-0">
      <iframe
        className="w-full h-full rounded-lg shadow-md"
        src="https://www.youtube.com/embed/Pa-NrIjs9Js"
        title="Himalayan Dialogue 2025 | Shifting Global Order: Challenges &amp; Strategies for Nepal | Session 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
    <div className="flex-1 aspect-video max-w-200 mx-auto sm:mx-0">
      <iframe
        className="w-full h-full rounded-lg shadow-md"
        src="https://www.youtube.com/embed/_YVW5yOtaK0"
        title="Himalayan Dialogue 2025 | Nepal’s Path to Prosperity through Economic Diplomacy | Session 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
    <div className="flex-1 aspect-video max-w-200 mx-auto sm:mx-0">
      <iframe
        className="w-full h-full rounded-lg shadow-md"
        src="https://www.youtube.com/embed/3EhXpKw64MY"
        title="Himalayan Dialogue 2025|Nepal’s Foreign Policy: Political Consensus &amp; Commitment|Session 3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  </div>
<div className="cursor-pointer text-center p-6 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition">
  <a
    href="https://www.himalayandialogue.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <h1 className="text-2xl font-semibold text-[#2B698E] hover:underline">
      Visit Himalayan Dialogue Website
    </h1>
    <p className="mt-2 text-gray-700">
      Discover insights, voices, and ideas shaping the Himalayan region’s strategic future.
    </p>
  </a>
</div>

</div>

 {/* <section className='relative bg-[#1E2A3A] py-24'>
        <div className='max-w-8xl mx-auto px-6'>
          <h1 className='text-white text-5xl md:text-6xl font-bold mb-6'>
            CONTACT US
          </h1>
          <div className="w-full h-px bg-white/70" />
        </div>
      </section> */}

    </div>
  )
}

export default page