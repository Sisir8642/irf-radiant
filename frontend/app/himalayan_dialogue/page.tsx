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
                  src="/images/himalayan-dialogue-2026.png"
                  alt="Himalayan Dialogue 2026"
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
        <div className="h-full rounded-2xl shadow-xl bg-gradient-to-br from-[#1f5f85] via-[#2B698E] to-[#7ABDE4] text-white p-8 flex flex-col justify-between">

          <div className="space-y-6">

            {/* badge */}
            <span className="inline-flex items-center text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full backdrop-blur">
              Upcoming Event • 2026
            </span>

            {/* title */}
            <div>
              <h1 className="text-4xl font-bold leading-tight">
                Himalayan Dialogue 2026
              </h1>
              <p className="mt-2 text-lg text-white/85">
                Nepal in a Changing World
              </p>
            </div>

            {/* event meta */}
            <div className="grid gap-2 text-sm text-white/90 bg-white/10 p-4 rounded-xl backdrop-blur">
              <p><span className="font-semibold">Date:</span> 28 June 2026</p>
              <p><span className="font-semibold">Venue:</span> Himalaya Hotel, Lalitpur</p>
              <p><span className="font-semibold">Time:</span> 1:00 PM – 4:30 PM</p>
              <p><span className="font-semibold">Organized by:</span> Innovate Research Foundation (IRF)</p>
            </div>

            {/* guests */}
            <div className="space-y-1 text-sm text-white/85 border-t border-white/20 pt-4">
              <p><span className="font-semibold text-white">Chief Guest: </span>Shishir Khanal </p>
              <p><span className="font-semibold text-white">Chair: </span> Dr. Gopal Khanal </p>
            </div>

          </div>

          {/* supporters */}
          <div className="mt-8 pt-4 border-t border-white/20 text-xs text-white/80">
            Supported by Nepal Foreign Affairs Media Pvt. Ltd. & Brandworth Pvt. Ltd.
          </div>

        </div>
      </motion.div>

    </div>

        {/* INTRO DESCRIPTION */}
        <motion.div
          variants={bottomVariant}
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
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  The Himalayan Dialogue – Strategic Voices from the Himalayas
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The Himalayan Dialogue is the flagship policy forum of the Innovate Research Foundation — bringing together
                  policymakers, diplomats, scholars, political leaders, security experts, entrepreneurs, researchers, youth
                  leaders, and media professionals to exchange ideas on Nepal's evolving role in the international system.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Against the backdrop of a new and stable government, enriched by youthful energy and a strong parliamentary
                  mandate, Himalayan Dialogue 2026 aims to provide a meaningful platform to support informed policy innovation,
                  strategic policy shifts, and their effective implementation in an evolving global environment.
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Key Themes for 2026
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nepal's National Interest, Identity &amp; Narratives</li>
                  <li>Nepal's Development Diplomacy: Trade, Investment &amp; Infrastructure</li>
                  <li>AI, Changing Global Order &amp; Nepal's Foreign Policy</li>
                </ul>
                <p className="text-gray-600 leading-relaxed pt-2 border-t">
                  Building on the success of the inaugural 2025 dialogue, Himalayan Dialogue 2026 deepens policy discussions
                  by focusing on national narratives, foreign policy consensus, development diplomacy, and youth innovation
                  in a rapidly changing global environment.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* PROGRAM SCHEDULE */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Program Schedule</h2>
            <div className="w-24 h-1 bg-white/60 mb-10" />

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <div className="bg-[#1E2A3A] px-8 py-5">
                <p className="text-white font-semibold text-lg">Date: 28 June 2026 &nbsp;|&nbsp; Venue: Himalaya Hotel, Lalitpur &nbsp;|&nbsp; Time: 1:00 PM – 4:30 PM</p>
              </div>

              <div className="divide-y divide-white/10">

                <div className="flex flex-col md:flex-row px-8 py-6 gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-white font-bold text-sm bg-[#2B698E] px-3 py-1 rounded-full">1:00 PM – 1:20 PM</span>
                  </div>
                  <div className="text-white space-y-1">
                    <h3 className="font-bold text-lg">Inaugural Session</h3>
                    <p className="text-white/80 text-sm">Welcome Remarks: Mohan Gajurel, CEO, IRF</p>
                    <p className="text-white/80 text-sm">Chair: Dr. Gopal Khanal, Chairman, IRF</p>
                    <p className="text-white/80 text-sm">Chief Guest Address: Shishir Khanal, Minister for Foreign Affairs</p>
                    <p className="text-white/80 text-sm">Opening Remarks / Inauguration of Himalayan Dialogue – 2026</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row px-8 py-6 gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-white font-bold text-sm bg-[#2B698E] px-3 py-1 rounded-full">1:20 PM – 2:20 PM</span>
                  </div>
                  <div className="text-white space-y-1">
                    <h3 className="font-bold text-lg">Session I: Nepal's National Interest, Identity &amp; Narratives</h3>
                    <p className="text-white/80 text-sm">Panel Discussion</p>
                    <p className="text-white/80 text-sm">Moderator: Anil Giri</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row px-8 py-6 gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-white font-bold text-sm bg-[#2B698E] px-3 py-1 rounded-full">2:20 PM – 3:20 PM</span>
                  </div>
                  <div className="text-white space-y-1">
                    <h3 className="font-bold text-lg">Session II: Nepal's Development Diplomacy – Trade, Investment &amp; Infrastructure</h3>
                    <p className="text-white/80 text-sm">Panel Discussion</p>
                    <p className="text-white/80 text-sm">Moderator: Sama Thapa</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row px-8 py-6 gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-white font-bold text-sm bg-[#2B698E] px-3 py-1 rounded-full">3:20 PM – 4:20 PM</span>
                  </div>
                  <div className="text-white space-y-1">
                    <h3 className="font-bold text-lg">Session III: AI, Changing Global Order &amp; Nepal's Foreign Policy</h3>
                    <p className="text-white/80 text-sm">Panel Discussion</p>
                    <p className="text-white/80 text-sm">Moderator: Koshraj Koirala</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row px-8 py-6 gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-white font-bold text-sm bg-[#2B698E] px-3 py-1 rounded-full">4:20 PM – 4:30 PM</span>
                  </div>
                  <div className="text-white space-y-1">
                    <h3 className="font-bold text-lg">Closing &amp; High Tea</h3>
                    <p className="text-white/80 text-sm">Closing Interaction / Remarks</p>
                    <p className="text-white/80 text-sm">Networking &amp; High Tea</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SESSIONS DETAIL */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-10">

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Sessions</h2>
            <div className="w-24 h-1 bg-white/60 mb-10" />
          </motion.div>

          {/* Session I */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-sm p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#2B698E] text-white text-sm font-bold px-4 py-1.5 rounded-full">Session I</span>
              <span className="text-gray-400 text-sm">1:20 PM – 2:20 PM</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4">Nepal's National Interest, Identity &amp; Narratives</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              In the contemporary international system, national influence is increasingly shaped not only by economic or military strength
              but also by identity, culture, values, and strategic communication. Nepal's civilizational heritage, Himalayan identity,
              democratic evolution, and cultural diversity provide a strong foundation for shaping a coherent national narrative.
              This session explores how Nepal can strengthen its international image and national confidence through soft power, cultural
              diplomacy, and strategic communication.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#2B698E] mb-3">Panelists</h4>
                <ul className="text-gray-600 text-sm space-y-1.5">
                  <li>• Former Ambassador Prof. Dr. Shridhar Khatri</li>
                  <li>• Former Ambassador Shankar Sharma</li>
                  <li>• Prof. Dr. Khadga KC</li>
                  <li>• Major General (Retd.) Dr. Purna Bahadur Silwal (Security Expert)</li>
                  <li>• Chandra Dev Bhatta (Geopolitical Expert)</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3"><span className="font-medium text-gray-700">Moderator:</span> Anil Giri</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#2B698E] mb-3">Key Focus Areas</h4>
                <ul className="text-gray-600 text-sm space-y-1.5">
                  <li>• National identity and state narrative</li>
                  <li>• Nepal's civilizational and Himalayan identity</li>
                  <li>• Soft power and cultural diplomacy</li>
                  <li>• Strategic communication and global image-building</li>
                  <li>• Media, security, and national cohesion</li>
                  <li>• Nepal's role in regional understanding and cooperation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Session II */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-sm p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#2B698E] text-white text-sm font-bold px-4 py-1.5 rounded-full">Session II</span>
              <span className="text-gray-400 text-sm">2:20 PM – 3:20 PM</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4">Nepal's Development Diplomacy: Trade, Investment &amp; Infrastructure</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              In an increasingly interconnected global economy, development diplomacy has emerged as a central pillar of Nepal's foreign policy.
              Sustained economic growth and structural transformation depend not only on domestic reforms but also on effective engagement with
              international partners in trade, investment, infrastructure development, and connectivity. This session explores how Nepal can
              strengthen its development diplomacy to mobilize foreign investment, expand trade opportunities, and accelerate infrastructure development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#2B698E] mb-3">Panelists</h4>
                <ul className="text-gray-600 text-sm space-y-1.5">
                  <li>• Rameshwor Khanal, Former Minister</li>
                  <li>• Dr. Biswo Poudel, Governor, Nepal Rastra Bank</li>
                  <li>• Dr. Achyut Wagle, Former Vice-Chancellor, Kathmandu University</li>
                  <li>• Gyan Chandra Acharya, Former Ambassador</li>
                  <li>• Anjan Kumar Shrestha, President, FNCCI</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3"><span className="font-medium text-gray-700">Moderator:</span> Sama Thapa</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#2B698E] mb-3">Key Focus Areas</h4>
                <ul className="text-gray-600 text-sm space-y-1.5">
                  <li>• Development diplomacy as a driver of national transformation</li>
                  <li>• Trade expansion and export competitiveness</li>
                  <li>• Foreign direct investment and private sector engagement</li>
                  <li>• Infrastructure development and regional connectivity</li>
                  <li>• Energy cooperation and cross-border infrastructure linkages</li>
                  <li>• Institutional coordination for effective economic diplomacy</li>
                  <li>• Long-term vision for investment-led economic growth</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Session III */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-sm p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#2B698E] text-white text-sm font-bold px-4 py-1.5 rounded-full">Session III</span>
              <span className="text-gray-400 text-sm">3:20 PM – 4:20 PM</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4">AI, Changing Global Order &amp; Nepal's Foreign Policy</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The global order is undergoing a profound transformation shaped by rapid technological change, particularly in artificial intelligence,
              digital infrastructure, and emerging strategic technologies. For Nepal, situated between major powers and deeply integrated into regional
              and global systems, the rise of AI and digital geopolitics presents both opportunities and challenges. This session explores how Nepal
              can position itself in a technology-driven global order while safeguarding its strategic interests and enhancing its diplomatic capacity
              in the digital age.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#2B698E] mb-3">Panelists</h4>
                <ul className="text-gray-600 text-sm space-y-1.5">
                  <li>• Ajaya Bhadra Khanal, Analyst</li>
                  <li>• Lok Bahadur Paudel Chhetri, Ministry of Foreign Affairs</li>
                  <li>• Dr. Lila Nyachai</li>
                  <li>• Young MPs &amp; Commentators</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3"><span className="font-medium text-gray-700">Moderator:</span> Koshraj Koirala</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#2B698E] mb-3">Key Focus Areas</h4>
                <ul className="text-gray-600 text-sm space-y-1.5">
                  <li>• Artificial intelligence and the reshaping of global power</li>
                  <li>• Technology and the future of geopolitics</li>
                  <li>• Digital sovereignty and data governance</li>
                  <li>• Cybersecurity and national security implications</li>
                  <li>• Emerging technologies and development diplomacy</li>
                  <li>• Nepal's preparedness for the digital and AI era</li>
                  <li>• Strategic positioning of Nepal in the global tech order</li>
                  <li>• Opportunities for innovation-led foreign policy engagement</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* HIMALAYAN DIALOGUE 2025 – PAST EVENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          <div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-4">Himalayan Dialogue 2025</h2>
            <div className="w-24 h-1 bg-[#7ABDE4] mb-4" />
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-10">Past Event – Completed</p>
          </div>

          {/* 2025 summary card */}
          <motion.div
            variants={bottomVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-xl border border-gray-200 shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-8"
          >
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                The Inaugural Himalayan Dialogue
              </h3>
              <div className="space-y-1 text-gray-600 text-sm">
                <p><span className="font-semibold text-gray-800">Date:</span> 7th April, 2025</p>
                <p><span className="font-semibold text-gray-800">Time:</span> 12:00 PM – 6:30 PM</p>
                <p><span className="font-semibold text-gray-800">Venue:</span> Everest Hotel, Kathmandu</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The inaugural Himalayan Dialogue was inaugurated by
                <span className="font-medium text-gray-800"> Rt. Hon. Prime Minister KP Sharma Oli </span>
                and attended by over 200 national and international participants — including diplomats, policymakers,
                business leaders, academics, and experts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The dialogue successfully established itself as an emerging intellectual platform in Nepal for strategic
                and international relations discourse, highlighting the importance of balanced diplomacy, peaceful regional
                cooperation, economic connectivity, and Nepal's constructive engagement in global affairs.
              </p>
            </div>

            <div className="md:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Key Themes Discussed</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Shifting Global Order: Challenges, Opportunities &amp; Strategies for Nepal</li>
                <li>Exploring Economic Diplomacy: A Path to Prosperity</li>
                <li>Nepal's Foreign Policy: Building Consensus &amp; Commitment</li>
              </ul>
              <p className="text-gray-600 leading-relaxed pt-2 border-t">
                The Himalayan region stands at the crossroads of major geopolitical transformations.
                Through this platform, IRF fosters dialogue and collaboration to shape Nepal's strategic
                role in regional and global affairs.
              </p>
            </div>
          </motion.div>

          {/* VIDEO SECTION */}
          <div className="space-y-12">

            {/* Top Large Video */}
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/eHyz79SsRgg"
                title="PM KP Sharma Oli's Powerful Speech at Himalayan Dialogue 2025 | Opening Address"
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
                  title="Gopal Khanal's Insightful Speech | CEO, Foreign Affairs Media | Himalayan Dialogue 2025"
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
                  title="Mohan Gajurel's Insightful Speech | CEO, Brand Worth Media | Himalayan Dialogue 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            {/* Bottom Row: Three Smaller Videos */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex-1 aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/Pa-NrIjs9Js"
                  title="Himalayan Dialogue 2025 | Shifting Global Order: Challenges & Strategies for Nepal | Session 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="flex-1 aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/_YVW5yOtaK0"
                  title="Himalayan Dialogue 2025 | Nepal's Path to Prosperity through Economic Diplomacy | Session 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="flex-1 aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/3EhXpKw64MY"
                  title="Himalayan Dialogue 2025 | Nepal's Foreign Policy: Political Consensus & Commitment | Session 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            <div className="cursor-pointer text-center p-6 bg-white rounded-md shadow-sm hover:bg-gray-100 transition">
              <a
                href="https://www.himalayandialogue.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="text-2xl font-semibold text-[#2B698E] hover:underline">
                  Visit Himalayan Dialogue Website
                </h2>
                <p className="mt-2 text-gray-700">
                  Discover insights, voices, and ideas shaping the Himalayan region's strategic future.
                </p>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default page