"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Computer Science</span> from the{" "}
        <span className="font-medium">National University of Sciences and Technology (NUST)</span>, Islamabad
        in 2023. As a{" "}
        <span className="font-medium">Full Stack Developer</span>, I'm experienced in
        building practical, scalable solutions that enhance user experience and meet business needs.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. My core stack includes{" "}
        <span className="font-medium">
          Laravel, React, and Vue.js
        </span>
        . I have strong problem-solving skills and am resilient and articulate in my approach
        to development challenges.
      </p>

      <p>
        Throughout my career, I've worked on diverse projects ranging from POS systems and
        logistics platforms to merchandise automation and payment integrations. I'm also multilingual,
        speaking{" "}
        <span className="font-medium">English, German, and Arabic</span>, which helps me
        collaborate effectively with international teams.
      </p>
    </motion.section>
  );
}
