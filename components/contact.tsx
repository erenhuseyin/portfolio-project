"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView, useTranslations } from "@/lib/hooks";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("İletişim");
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const t = useTranslations().contact;

  const validate = (email: string, message: string) => {
    const newErrors: { email?: string; message?: string } = {};
    if (!email) {
      newErrors.email = t.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t.emailInvalid;
    }
    if (message.trim().length < 5) {
      newErrors.message = t.messageRequired;
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current!;
    const email = (form.elements.namedItem("senderEmail") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const validationErrors = validate(email, message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setPending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success(t.successMsg);
      form.reset();
    } catch {
      toast.error(t.errorMsg);
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.heading}</SectionHeading>

      <p className="text-gray-700 -mt-4 dark:text-white/80">
        {t.description}{" "}
        <a className="underline" href="mailto:huseyineren404@gmail.com">
          huseyineren404@gmail.com
        </a>{" "}
        {t.or}
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col text-left">
          <input
            className={`h-14 px-4 rounded-lg borderBlack dark:bg-white/10 dark:text-white dark:placeholder:text-white/50 transition-all dark:outline-none ${
              errors.email ? "border-red-500 border" : ""
            }`}
            name="senderEmail"
            type="email"
            maxLength={500}
            placeholder={t.emailPlaceholder}
            onChange={() => setErrors((prev) => ({ ...prev, email: undefined }))}
          />
          {errors.email && (
            <span className="mt-1 ml-1 text-sm text-red-500">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col text-left mt-3">
          <textarea
            className={`h-52 rounded-lg borderBlack p-4 dark:bg-white/10 dark:text-white dark:placeholder:text-white/50 transition-all dark:outline-none ${
              errors.message ? "border-red-500 border" : ""
            }`}
            name="message"
            placeholder={t.messagePlaceholder}
            maxLength={5000}
            onChange={() => setErrors((prev) => ({ ...prev, message: undefined }))}
          />
          {errors.message && (
            <span className="mt-1 ml-1 text-sm text-red-500">{errors.message}</span>
          )}
        </div>

        <div className="mt-3">
          <SubmitBtn pending={pending} label={t.submit} />
        </div>
      </form>
    </motion.section>
  );
}
