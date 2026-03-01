import {
  ChevronRight,
  Smartphone,
  MapPin,
  Mail,
} from "lucide-react";
import footerTxt from "../language/footerTxt.json";
import catalog from "../data/categories.json";
import products from "../data/products.json";
function Footer({ lang, setPage }) {
  
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
    <footer className="bg-[#333333] text-white pt-16 pb-8 px-4 md:px-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-flow-row-dense lg:grid-cols-4 grid-rows-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5   ">
          {/* Column 1: Plywood */}
          {catalog.map((item, key) => (
            <div
              key={key}
              className="relative min-h-10 flex flex-col items-start gap-1 h-full z-10 "
            >
              <a
              href="#"
                onClick={() => {
                  setPage({ status: "category", id: item._id });
                  scrollToTop();
                }}
                className="text-lg cursor-pointer font-bold mb-6 text-start border-b border-gray-700 pb-2"
              >
                {Lang(item.title)}
              </a>
              <div className="ml-1 mb-3 flex  flex-col items-start justify-start p-0 gap-1 space-y-3">
                {products.map(
                  (d, key) =>
                    d.category === item._id && (
                      <a
                        key={key}
                        href="#"
                        onClick={() => {
                          setPage({ status: "product",id: d._id });
                          scrollToTop();
                        }}
                        className="text-gray-400 hover:text-[#F58220] hover:underline text-sm flex items-center group"
                      >
                        {Lang(d.name)}
                      </a>
                    ),
                )}
              </div>
            </div>
          ))}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Связаться с нами
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-gray-800 p-2 rounded-sm text-[#F58220]">
                  <Smartphone size={18} />
                </div>
                <div>
                  <a
                    href="tel:+998900809000"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    +998 90 080 90 00
                  </a>
                  <a
                    href="tel:+998907122080"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    +998 90 712 20 80
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-gray-800 p-2 rounded-sm text-[#F58220]">
                  <MapPin size={18} />
                </div>
                <p className="text-gray-300">Узбекистан, Ташкент</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-gray-800 p-2 rounded-sm text-[#F58220]">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:ecotaxta@mail.ru"
                  className="text-gray-300 hover:text-[#F58220] transition-colors border-b border-gray-700"
                >
                  ecotaxta@mail.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="pt-8 border-t border-green-200 flex justify-center items-start text-xs font-medium text-gray-500">
        <p className="uppercase tracking-wider">
          {Lang(footerTxt.title)}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
