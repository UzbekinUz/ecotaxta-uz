import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Changer({ lang, setLang, isOpenMenu }) {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
      { code: "uz", name: "O'zbekcha", flag: "🇺🇿" },
      { code: "en", name: "English", flag: "🇺🇸" },
      { code: "ru", name: "Русский", flag: "🇷🇺" },
    ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-emerald-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30"
      >
        <Globe className="w-4 h-4 text-white mr-1" />
        <span className="text-sm font-semibold uppercase">{lang}</span>
        <ChevronDown
          className={`w-4 h-4 white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        isOpenMenu? (
          <div className="absolute right-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in duration-200">
            {languages.map((lan) => (
              <button
                key={lan.code}
                onClick={() => setLang(lan.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-blue-50 ${
                  lang === lan.code
                    ? "text-blue-600 bg-blue-50/50"
                    : "text-gray-700"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">{lan.flag}</span>
                  <span className="font-medium">{lan.name}</span>
                </div>
                {lang === lan.code && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        ) : (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in duration-200">
            {languages.map((lan) => (
              <button
                key={lan.code}
                onClick={() => setLang(lan.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-blue-50 ${
                  lang === lan.code
                    ? "text-blue-600 bg-blue-50/50"
                    : "text-gray-700"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">{lan.flag}</span>
                  <span className="font-medium">{lan.name}</span>
                </div>
                {lang === lan.code && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>)
        )}
    </div>
  );
}

export default Changer;
