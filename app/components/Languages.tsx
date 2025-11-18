"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Initialize Google Translate after script loads
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn,ar,zh-CN,hi,es,ja",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Load Google Translate script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Hidden Google container */}
      <div
        className="absolute bottom-20 left-20"
        id="google_translate_element"
      ></div>
    </div>
  );
}
