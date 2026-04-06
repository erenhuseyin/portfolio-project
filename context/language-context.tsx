"use client";

import React, { useState, createContext, useContext, useEffect } from "react";

type Language = "tr" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    const saved = window.localStorage.getItem("language") as Language | null;
    if (saved) setLanguage(saved);
  }, []);

  const toggleLanguage = () => {
    const next = language === "tr" ? "en" : "tr";
    setLanguage(next);
    window.localStorage.setItem("language", next);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }
  return context;
}