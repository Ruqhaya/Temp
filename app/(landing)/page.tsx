"use client";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Features } from "./_components/features";
import { AnimatedBeamMultipleOutputDemo } from "./_components/usp";
import { Team } from "./_components/team";
import Footer from "./_components/footer";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const words = [
    {
      text: "Build",
      className: "text-3xl sm:text-5xl text-center font-extrabold",
    },
    {
      text: "your",
      className: "text-3xl sm:text-5xl text-center font-extrabold",
    },
    {
      text: "AI powered",
      className: "text-3xl sm:text-5xl text-center font-extrabold",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">  
      <ContainerScroll
        titleComponent={
          <div className="w-full mx-auto">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className="flex justify-center items-center h-auto px-4">
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-8 h-[20rem] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
              >
                <h1 className="text-3xl sm:text-4xl text-center font-extrabold">
                  <span className="inline-block">
                    <TypewriterEffectSmooth words={words} />
                  </span>
                  <br />
                  <span className="inline-block dark:text-white text-black">
                    second brain using <Cover>Brain Cloud</Cover>
                  </span>
                  <br />
                  <span className="inline-block mt-2">
                    
                      <button className="text-2xl inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <Link href="/sb">Get Started </Link>
                      </button>
                   
                  </span>
                  <br />
                  <span className="inline-block mb-3"></span>
                </h1>
              </motion.div>
            </div>
          </div>
        }
      >
        <div className="mt-0">
          <Image
            src="/hero.png"
            alt="Hero"
            width={1200}
            height={1200}
            className="mx-auto mt-0"
          />
        </div>
      </ContainerScroll>

      {/* Features Component */}
      <div id="features" className="w-full mx-auto py-16 mt-3 px-4">
        <h1 className="text-5xl font-semibold text-black dark:text-white text-center pb-8">
          Features
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          Explore the key features that make our platform unique and impactful.
        </p>
        <Features />
      </div>

      {/* USP Component */}
      <div className="font-sans">
        <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-8 gap-4 md:gap-8">
          {/* Left content */}
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-black dark:text-white text-center pb-8">
              Why Brain Cloud
            </h2>
            <p className="font-bold text-lg mb-4 text-center pb-8">
              AI powered Second Brain
            </p>
            <ul className="list-none space-y-2 mb-4 text-center pb-8">
              <li>Interactive Canvas with Category Filtering</li>
              <li>Publish saved pages and start threads for discussions</li>
              <li>Graph view for pages</li>
              <li>Smart Search to query pages</li>
            </ul>
            <button className="mt-4 px-6 py-2 pl-8 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition mx-auto block">
              Subscribe
            </button>
          </div>

          {/* USP component */}
          <div className="w-full md:w-2/5 border-4 border-purple-500 shadow-[rgba(128,0,128,0.6)_0px_4px_10px,_rgba(128,0,128,0.6)_0px_6px_15px]">
            <AnimatedBeamMultipleOutputDemo />
          </div>
        </div>
      </div>

      {/* Team Component */}
      <div id="team" className="w-full mx-auto py-16 mt-3 px-4 relative z-10"> {/* Add relative and z-index */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white text-center pb-8">  {/* Updated text size classes */}
          <GradualSpacing
            text="Our Innovators"
            duration={0.5}
            delayMultiple={0.1}
            framerProps={{}}
            className="your-custom-class"
          ></GradualSpacing>
        </h1>

        <Team />
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}