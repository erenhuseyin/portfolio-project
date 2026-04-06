"use client";

import React from "react";
import { useTranslations } from "@/lib/hooks";

export default function Footer() {
  const t = useTranslations().footer;

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Huseyin Eren. {t.rights}
      </small>
    </footer>
  );
}
