import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import title from "../static/title.png";
import header from "../language/header.json";
import TopBar from "./topBar";
function Navbar({ lang, setPage, page, setBack,category, product,setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Silliq harakat
    });
  };
  return (
    <nav className="bg-[#333333] shadow-md sticky top-0 z-50">
      <TopBar lang={lang} setLang={setLang} />
      <div className="absolute h-full inset-0 opacity-30 ">
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
            <div
              onClick={() => {
                setPage({ status: "home", id: "" });
                setIsMenuOpen(false);
                scrollToTop();
              }}
              className="shrink-0 flex items-center cursor-pointer"
            >
              <img className="w-50 md:w-75" src={title} alt="logo" />
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
                    setBack({status:"home",id:""});
                    setPage({ status: "category", id: item._id });
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-amber-100 group-hover:text-blue-600 transition-colors"
                >
                  {Lang(item.title)}
                  <ChevronDown className="w-4 h-4 m-0 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu Box */}
                <div className="absolute  top-full left-0 w-80 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className=" shadow-2xl  overflow-hidden">
                    <div className="grid grid-cols-1 gap-1  ">
                      {product.map(
                        (d, key) =>
                          d.category === item._id && (
                            <div key={key}>
                              <button
                                onClick={() => {
                                  setPage({ status: "product", id: d._id });
                                  setIsMenuOpen(false);
                                  setBack({status:"home",id:""});
                                  scrollToTop();
                                }}
                                className={`w-full cursor-pointer flex items-center gap-3 p-3 border-red-50 ring-2 ring-red-100 hover:bg-red-200  transition-all duration-200 text-left border
                              ${
                                d.category === page.id || d._id === page.id
                                  ? "bg-red-50 border-red-50 ring-2 ring-red-100 hover:bg-red-200"
                                  : "bg-white border-transparent hover:bg-gray-200 "
                              }`}
                              >
                                <div className="flex flex-col overflow-hidden">
                                  <span
                                    className={`text-sm font-semibold truncate ${d._id === page.id ? "text-blue-700" : d.category === page.id ? "text-red-700" : "text-gray-800"}`}
                                  >
                                    {Lang(d.name)}
                                  </span>
                                </div>
                              </button>
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <a
              href="#"
              onClick={() => {
                setBack({status:"home",id:""});
                setPage({ status: "delivery", id: "" });
                setIsMenuOpen(false);
                scrollToTop();
              }}
              className="text-amber-100 lg:text-sm hover:text-blue-600 font-medium transition-colors"
            >
              {Lang(header.links.delivery)}
            </a>
            <a
              href="#"
              onClick={() => {
                setBack({status:"home",id:""});
                setPage({ status: "contact", id: "" });
                setIsMenuOpen(false);
                scrollToTop();
              }}
              className="text-amber-100 lg:text-sm ml-4 hover:text-blue-600 font-medium transition-colors"
            >
              {Lang(header.links.contact)}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden relative">
            <button
              onClick={toggleMenu}
              className="text-green-500 hover:text-emerald-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8 " />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t min-h-screen border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            {category.map((item, key) => (
              <div
                key={key}
                className="relative  grid grid-cols-1 gap-1 h-full items-center z-10 "
              >
                <button
                  onClick={() => {
                    setBack("home");
                    setPage({ status: "category", id: item._id });
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="flex  items-center gap-1 px-4 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  {Lang(item.title)}
                  <ChevronDown className="w-4 h-4 " />
                </button>
                <div className="ml-5 grid grid-cols-1 gap-1 ">
                  {product.map(
                    (d, index) =>
                      d.category === item._id && (
                        <button
                          key={index}
                          onClick={() => {
                            setBack({status:"home",id:""});
                            setPage({ status: "product", id: d._id });
                            setIsMenuOpen(false);
                            scrollToTop();
                          }}
                          className="flex items-start  gap-4 py-1 px-3 hover:bg-red-200 transition-colors "
                        >
                          <div className="hover:bg-red-200">
                            <p className="text-[14px] font-bold text-gray-900 hover:text-black-700">
                              {Lang(d.name)}
                            </p>
                          </div>
                        </button>
                      ),
                  )}
                </div>
              </div>
            ))}
            <a
              href=""
              onClick={() => {
                setBack({status:"home",id:""});
                setPage({ status: "delivery", id: "" });
                setIsMenuOpen(false);
                scrollToTop();
              }}
              className="block px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              {Lang(header.links.delivery)}
            </a>
            <a
              href=""
              onClick={() => {
                setPage({ status: "contact", id: "" });
                setIsMenuOpen(false);
                setBack({status:"home",id:""});
                scrollToTop();
              }}
              className="block px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"
            >
              {Lang(header.links.contact)}
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
