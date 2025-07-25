'use client'
import React, { useEffect, useState } from 'react'
import { FileUpload } from "@/components/ui/file-upload";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ButtonAnimated } from "@/components/ui/stateful-button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";

const HeroSection = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="relative w-full mx-auto mt-10 flex flex-col items-center justify-center">
      <div className="px-4 pb-10 md:pb-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {hydrated
            ? "Land More Interviews with AI-Powered Resume Insights"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))
            : "Land More Interviews with AI-Powered Resume Insights"}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Upload your resume and job description — get a smart analysis with
          match score, skill gaps, and improvement tips. Powered by OpenAI.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <FileUpload />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="flex items-center justify-center mt-10"
        >
          <Textarea placeholder="Paste the job description here" className="h-48"/>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="flex items-center justify-center mt-10"
        >
          <ButtonAnimated>Analyze</ButtonAnimated>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection