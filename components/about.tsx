"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  
  const { ref } = useSectionInView("Hakkımda");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Hakkımda</SectionHeading>
      <p className="mb-3">
        Merhaba ben <span className="font-medium">Hüseyin</span>. Teknoloji başta 
        olmak üzere yeni şeyleri araştırmak ve öğrenmekten zevk alıyorum, bu yüzden 
        <span className="font-medium">yazılımcı</span> olmaya karar verdim. 
        Öğrencilik dönemimden bu yana <span className="font-medium">sosyal çalışmalarda bulundum</span>, 
        bulunmaya da devam ediyorum. Bu sayede <span className="italic">etkili iletişim, iş ahlakı </span> 
        ve <span className="italic">liderlik</span> gibi becerilerimi geliştirdim.
      </p>

      <p>
        Yazılımla <span className="underline">lisede tanıştım</span>, farklı alanlarda 
        teknik bilgi edindikten sonra üniversitenin sonunda <span className="font-medium">
        web alanında kariyer çizmeye karar verdim</span>. Stajlarımda {" "}
        <span className="font-medium">Spring Boot</span> üzerine eğitimler aldım ve {" "}
        <span className="font-medium">backend alanına yoğunlaştım</span>, çalışma 
        hayatım süresince de <span className="font-medium">CRM ve fintech projelerinde yer aldım</span>. 
        İleride <span className="font-medium">insanlığa faydalı projeler üreten bir yazılım geliştiricisi </span> 
        olmak istiyorum.
      </p>
    </motion.section>
  );
}