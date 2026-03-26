import { ChevronRight, Smartphone, MapPin, Mail } from "lucide-react";
import footerTxt from "../language/footerTxt.json";
import title from "../static/title.png";

function Footer({ lang, setPage, category }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Silliq harakat
    });
  };

  const footerLabels = {
    categories:
      lang === "uz"
        ? "Kategoriyalar"
        : lang === "ru"
          ? "Категории"
          : "Categories",
    contact:
      lang === "uz"
        ? "Bog'lanish"
        : lang === "ru"
          ? "Связаться с нами"
          : "Contact us",
    description:
      lang === "uz"
        ? "Sifatli yog‘och mahsulotlari va qulay xizmatlar bilan mijozlarga ishonchli yechimlar taklif qilamiz."
        : lang === "ru"
          ? "Предлагаем надежные решения с качественной древесной продукцией и удобным сервисом."
          : "We provide reliable solutions with quality wood products and convenient service.",
    address:
      lang === "uz"
        ? "O‘zbekiston, Toshkent"
        : lang === "ru"
          ? "Узбекистан, Ташкент"
          : "Uzbekistan, Tashkent",
  };

  const visibleCategories = category.slice(0, 8);

  return (
    <footer className="bg-[#2b2b2b] text-white pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="space-y-5">
            <div className="mb-10">
              <div
                onClick={() => {
                  setPage({ status: "home", id: "" });
                  scrollToTop();
                }}
                className="shrink-0 h-8 flex items-center cursor-pointer mb-3"
              >
                <img className="w-50 md:w-75" src={title} alt="logo" />
              </div>
            </div>
            <p className="text-sm md:text-base leading-7 text-gray-300 max-w-md">
              {footerLabels.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="tel:+998900809000"
                className="inline-flex items-center px-4 py-2 text-sm text-gray-200 hover:text-[#F58220] transition-colors"
              >
                +998 90 080 90 00
              </a>
              <a
                href="tel:+998958082080"
                className="inline-flex items-center px-4 py-2 text-sm text-gray-200 hover:text-[#F58220] transition-colors"
              >
                +998 95 808 20 80
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 pb-2">
              {footerLabels.categories}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visibleCategories.map((item) => (
                <a
                  key={item._id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage({ status: "category", id: item._id });
                    scrollToTop();
                  }}
                  className="group flex items-center justify-between py-2 text-sm text-gray-300 hover:text-[#F58220] transition-all"
                >
                  <span className="truncate pr-3">{Lang(item.title)}</span>
                  <ChevronRight
                    size={16}
                    className="text-[#F58220] transition-transform group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 pb-2">
              {footerLabels.contact}
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 text-[#F58220]">
                  <Smartphone size={18} />
                </div>
                <div>
                  <a
                    href="tel:+998900809000"
                    className="block text-gray-200 hover:text-white transition-colors"
                  >
                    +998 90 080 90 00
                  </a>
                  <a
                    href="tel:+998958082080"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    +998 95 808 20 80
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 text-[#F58220]">
                  <MapPin size={18} />
                </div>
                <p className="text-gray-300">{footerLabels.address}</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 text-[#F58220]">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:ecotaxta@mail.ru"
                  className="text-gray-300 hover:text-[#F58220] transition-colors break-all"
                >
                  ecotaxta@mail.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 mt-8 flex justify-center items-start text-xs font-medium text-gray-500">
        <p className="uppercase tracking-wider text-center">
          {Lang(footerTxt.title)}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
