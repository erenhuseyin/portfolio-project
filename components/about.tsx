"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView, useTranslations } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Hakkımda");
  const t = useTranslations().about;

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t.heading}</SectionHeading>
      <p className="mb-3">{t.p1}</p>
      <p>{t.p2}</p>
    </motion.section>
  );
}
