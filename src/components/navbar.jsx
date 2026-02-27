import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import title from "../static/title.png";
import  category from "../data/categories.json";
import header from "../language/header.json";
import Changer from "../helper/languageChanger";
function Navbar({ lang, setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function Lang (address){
    return lang === "ru" ? address.ru : lang==="uz"? address.uz: address.en
    
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="absolute h-full inset-0 opacity-3 ">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center cursor-pointer">
              <img className="w-75" src={title} alt="" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex md:items-center lg:space-x-8">
            {category.map((item) => (
              <a
                key={item._id}
                href={`#`}
                className="text-gray-600 lg:text-sm xl:text-[16px] hover:text-emerald-600 font-medium transition-colors"
              >
                {lang === "ru" ? item.title.ru : lang==="uz"? item.title.uz: item.title.en}
              </a>
            ))}
            <a
              href="#delivery"
              className="text-gray-600 lg:text-sm xl:text-[16px] hover:text-emerald-600 font-medium transition-colors"
            >
              {Lang(header.links.delivery)}
            </a>
            <a
              href="#contact"
              className="text-gray-600 lg:text-sm xl:text-[16px] hover:text-emerald-600 font-medium transition-colors"
            >
              {Lang(header.links.contact)}
            </a>
            <Changer setLang={setLang} lang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-emerald-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              onClick={toggleMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              Asosiy
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              Biz haqimizda
            </a>
            <a
              href="#products"
              onClick={toggleMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              Mahsulotlar
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              Aloqa
            </a>
            <div className="mt-4 px-3 py-2 border-t border-gray-100">
              <p className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 mr-2 text-emerald-600" /> +998 90
                080-90-00
              </p>
              <p className="flex items-center text-sm font-medium text-gray-700">
                <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                ecotaxta@mail.ru
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
