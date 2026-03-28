import { FileText, ShieldCheck, X } from "lucide-react";
import ProductSlideBar from "../helper/productSlideBar";
import documentTxt from "../language/documentTxt.json";

function Document({ page, setPage, lang,  product, category }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="md:max-w-7xl w-full lg:col-span-3">
            <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000 bg-red-50 rounded-2xl md:p-10 p-5 shadow-sm border border-gray-100 overflow-hidden relative">
              <X
                onClick={() => {
                  setPage({ status: "home", id: "" });
                }}
                className="h-8 w-8 absolute top-4 cursor-pointer z-20 right-4 text-gray-500 hover:text-gray-800"
              />

              {/* Orqa fondagi naqsh */}
              <div className="absolute h-full inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="pattern-doc"
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
                  <rect width="100%" height="100%" fill="url(#pattern-doc)" />
                </svg>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter mb-8">
                  {Lang(documentTxt.title)}
                </h2>

                <div className="space-y-10">
                  {/* Kompaniya haqida qismi */}
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <ShieldCheck className="text-[#F58220]" size={28} />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {Lang(documentTxt.about_title)}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed md:text-lg">
                      {Lang(documentTxt.about_text)}
                    </p>
                  </section>

                  {/* Sertifikatlar qismi */}
                  <section className="bg-white/50 p-6 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="text-[#F58220]" size={28} />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {Lang(documentTxt.certs_title)}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {Lang(documentTxt.certs_text)}
                    </p>
                  </section>

                  {/* Vizual element - dilerlik belgisi */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="inline-flex items-center px-6 py-3 bg-[#F58220] text-white font-bold rounded-lg shadow-lg">
                      OFFICIAL DISTRIBUTOR - ECOTAXTA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* YON PANEL - MAHSULOTLAR RO'YXATI */}
          <ProductSlideBar
            page={page}
            setPage={setPage}
            scrollToTop={scrollToTop}
            lang={lang}
            Lang={Lang}
            category={category}
            product={product}
          />
        </div>
      </div>
    </section>
  );
}

export default Document;