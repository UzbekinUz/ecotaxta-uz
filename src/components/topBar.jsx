import { Mail, MapPin, Phone } from "lucide-react";

function TopBar({ lang,setLang }) {
  const languages = [
    { code: "uz", name: "O'z" },
    { code: "ru", name: "Ру" },
    { code: "en", name: "En" }
  ];
  return (
    <div className="bg-emerald-900 text-white py-2 text-sm block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap md:grid-cols-2 gap-0 justify-between items-center">
        <div className="flex space-x-4">
          <span className="flex items-center font-semibold text-[10px]">
            <Phone className="w-4 h-4 mr-2 text-emerald-400" />
            +998 90 080-90-00
          </span>
          <span className="flex items-center font-semibold text-[10px]">
            <Phone className="w-4 h-4 mr-2 text-emerald-400" />
            +998 90 712-20-80
          </span>
        </div>
        <div className="flex space-x-6">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={()=>{setLang(language.code)}}
              className={language.code === lang ? "text-emerald-400 font-bold" : "text-white hover:text-emerald-400 transition-colors"}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
