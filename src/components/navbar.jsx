import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import title from "../static/title.png";
import category from "../data/categories.json";
import products from "../data/products.json";

import header from "../language/header.json";
import Changer from "../helper/languageChanger";
function Navbar({ lang, setLang, setOpenInfo, setOpenCat}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="absolute h-full inset-0 opacity-3 ">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0H20L0 20M40 40V20L20 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center cursor-pointer">
              <img className="w-75" src={title} alt="logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex md:items-center lg:space-x-2">
            {category.map((item, key) => (
              <div
                key={key}
                className="relative group h-full flex items-center"
              >
                <button
                  onClick={() => {
                    setOpenCat({ status: true, id: item._id });
                  }}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors"
                >
                  {Lang(item.title)}
                  <ChevronDown className="w-4 h-4 m-0 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu Box */}
                <div className="absolute top-full left-0 w-80 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
                    <div className="grid grid-cols-1 gap-1 ">
                      {products.map(
                        (d, index) =>
                          d.category === item._id && (
                            <a
                              key={index}
                              href="#"
                              onClick={() => {
                                setOpenInfo({ status: true, id: d._id });
                              }}
                              className="flex border items-start gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors group/item"
                            >
                              <div>
                                <p className="text-sm font-bold text-gray-900 group-hover/item:text-blue-700">
                                  {Lang(d.name)}
                                </p>
                              </div>
                            </a>
                          ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <a
              href="#delivery"
              className="text-gray-600 lg:text-sm hover:text-emerald-600 font-medium transition-colors"
            >
              {Lang(header.links.delivery)}
            </a>
            <a
              href="#contact"
              className="text-gray-600 lg:text-sm ml-4 hover:text-emerald-600 font-medium transition-colors"
            >
              {Lang(header.links.contact)}
            </a>
            <Changer setLang={setLang} lang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden relative">
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
            <Changer setLang={setLang} lang={lang} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            {category.map((item, key) => (
              <div
                key={key}
                className="relative  grid grid-cols-1 gap-1 h-full items-center z-10 "
              >
                <button
                  onClick={() => {
                    setOpenCat({ status: true, id: item._id });
                  }}
                  className="flex  items-center gap-1 px-4 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  {Lang(item.title)}
                  <ChevronDown className="w-4 h-4 " />
                </button>
                <div className="ml-5 grid grid-cols-1 gap-1 ">
                  {products.map(
                    (d, index) =>
                      d.category === item._id && (
                        <a
                          key={index}
                          href="#"
                          onClick={() => {
                            setOpenInfo({ status: true, id: d._id });
                          }}
                          className="flex items-start  gap-4 py-1 px-3 hover:bg-red-200 transition-colors "
                        >
                          <div className="hover:bg-red-200">
                            <p className="text-[14px] font-bold text-gray-900 hover:text-black-700">
                              {Lang(d.name)}
                            </p>
                          </div>
                        </a>
                      ),
                  )}
                </div>
              </div>
            ))}
            <a
              href="#delivery"
              className="block px-3 py-1 text-[16px] font-medium text-black hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              {Lang(header.links.delivery)}
            </a>
            <a
              href="#contact"
              className="block px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              {Lang(header.links.contact)}
            </a>
            <Changer isMenuOpen={isMenuOpen} setLang={setLang} lang={lang} />
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
