import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import title from "../static/title.png";
import header from "../language/header.json";
import TopBar from "./topBar";

function Navbar({ lang, setPage, setBack, category, setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const labels = {
    products: {
      uz: "Mahsulotlar",
      en: "Products",
      ru: "Продукция",
    },
    documents: {
      uz: "Dokumentlar",
      en: "Documents",
      ru: "Документы",
    },
  };

  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigateTo = (nextPage, backPage = { status: "home", id: "" }) => {
    setBack(backPage);
    setPage(nextPage);
    setIsMenuOpen(false);
    scrollToTop();
  };

  const desktopLinks = [
    {
      label: Lang(labels.documents),
      action: () => navigateTo({ status: "document", id: "" }),
    },
    {
      label: Lang(header.links.delivery),
      action: () => navigateTo({ status: "delivery", id: "" }),
    },
    {
      label: Lang(header.links.contact),
      action: () => navigateTo({ status: "contact", id: "" }),
    },
  ];

  return (
    <nav className="bg-[#333333] shadow-md sticky top-0 z-50">
      <TopBar lang={lang} setLang={setLang} />

      <div className="absolute inset-0 h-full opacity-30 pointer-events-none">
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
            <button
              type="button"
              onClick={() => navigateTo({ status: "home", id: "" })}
              className="shrink-0 flex items-center cursor-pointer"
            >
              <img className="w-50 md:w-75" src={title} alt="EcoTaxta logo" />
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <div className="relative group h-full flex items-center">
              <button
                type="button"
                onClick={() => navigateTo({ status: "products", id: "" })}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-amber-100 group-hover:text-blue-600 transition-colors"
              >
                {Lang(labels.products)}
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute bg-white top-full left-0 w-80 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 gap-1">
                    {category.map((item) => (
                      <button
                        key={item._id}
                        type="button"
                        onClick={() =>
                          navigateTo(
                            { status: "category", id: item._id },
                            { status: "home", id: "" },
                          )
                        }
                        className="flex cursor-pointer items-center gap-1 px-4 py-2 text-sm font-medium text-amber-950 hover:text-blue-600 transition-colors text-left"
                      >
                        {Lang(item.title)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {desktopLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.action}
                className="text-amber-100 lg:text-sm px-4 py-2 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center lg:hidden relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-green-500 hover:text-emerald-600 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t min-h-screen border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              type="button"
              onClick={() => navigateTo({ status: "products", id: "" })}
              className="block w-full text-left px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
            >
              {Lang(labels.products)}
            </button>

            {category.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-1 gap-1 h-full items-center z-10"
              >
                <button
                  type="button"
                  onClick={() =>
                    navigateTo(
                      { status: "category", id: item._id },
                      { status: "home", id: "" },
                    )
                  }
                  className="flex items-center justify-between gap-1 px-4 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  {Lang(item.title)}
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => navigateTo({ status: "delivery", id: "" })}
              className="block w-full text-left px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
            >
              {Lang(header.links.delivery)}
            </button>

            <button
              type="button"
              onClick={() => navigateTo({ status: "contact", id: "" })}
              className="block w-full text-left px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
            >
              {Lang(header.links.contact)}
            </button>

            <button
              type="button"
              onClick={() => navigateTo({ status: "document", id: "" })}
              className="block w-full text-left px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
            >
              {Lang(labels.documents)}
            </button>

            <div className="mt-4 px-3 py-2 border-t border-gray-100">
              <p className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                +998 90 080-90-00
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
