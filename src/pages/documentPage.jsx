import { FileText, ShieldCheck, X } from "lucide-react";
import ProductSlideBar from "../helper/productSlideBar";
import documentTxt from "../language/documentTxt.json";
import { useState } from "react";
import { Award, Calendar, Search, CheckCircle2, Maximize2 } from "lucide-react";
function Document({ page, setPage, lang, product, category }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
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
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

                  {/* SVEZA Official Certificate IMAGE Section */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-2 bg-orange-100 rounded-lg text-[#F58220]">
                        <Award size={28} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {lang === "ru"
                          ? "Сертификат официального дилера"
                          : "Rasmiy dilerlik sertifikati"}
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 items-start">
                      {/* Certificate Visual */}
                      <div className="md:col-span-2 relative group">
                        <div
                          onClick={() => setIsModalOpen(true)}
                          className="relative cursor-zoom-in bg-white p-2 rounded-xl shadow-2xl border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                        >
                          {/* Placeholder for the certificate image */}
                          <div className="aspect-[1/1.41] bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-lg">
                            {/* Asl rasm url'i bo'lsa shu yerga <img /> qo'yiladi */}
                            <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-gray-200">
                              <img src="/sertificat.jpg" alt="" />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                              <div className="bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                                <Maximize2
                                  size={24}
                                  className="text-gray-900"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 text-center text-sm text-gray-500 font-medium italic">
                          {lang === "ru"
                            ? "Нажмите, чтобы увеличить"
                            : "Kattalashtirish uchun bosing"}
                        </p>
                      </div>

                      {/* Certificate Details */}
                      {/* <div className="md:col-span-3 space-y-6 pt-2">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                          <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                            <CheckCircle2
                              className="text-green-500"
                              size={20}
                            />
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                              Status: Active Partner
                            </span>
                          </div>

                          <div>
                            <p className="text-xs text-gray-400 font-bold uppercase">
                              Company:
                            </p>
                            <p className="text-xl font-black text-gray-900">
                              OOO "ECO TAXTA"
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-gray-400 font-bold uppercase">
                                Valid Until:
                              </p>
                              <p className="font-bold text-gray-800 flex items-center gap-1">
                                <Calendar size={14} /> 31.12.2026
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 font-bold uppercase">
                                Region:
                              </p>
                              <p className="font-bold text-gray-800 tracking-wide">
                                Uzbekistan
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 flex flex-wrap gap-2">
                            <button
                              onClick={() => setIsModalOpen(true)}
                              className="flex-1 min-w-35 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                            >
                              <Search size={18} /> View
                            </button>
                          </div>
                        </div>

                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                          <p className="text-xs text-blue-800 leading-relaxed">
                            {lang === "ru"
                              ? 'Данный сертификат подтверждает право ООО "ECO TAXTA" на реализацию продукции бренда SVEZA на территории Республики Узбекистан.'
                              : 'Ushbu sertifikat "ECO TAXTA" MCHJning O\'zbekiston Respublikasi hududida SVEZA brendi mahsulotlarini sotish huquqini tasdiqlaydi.'}
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </section>
                  {/* Vizual element - dilerlik belgisi */}
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
        {/* Image Modal (Zoom View) */}
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors"
            >
              <X size={40} />
            </button>
            <div className="max-w-4xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-y-auto p-4 md:p-8">
              <div className="aspect-[1/1.41] w-full max-w-2xl mx-auto bg-white shadow-inner relative flex flex-col items-center justify-center">
                {/* Haqiqiy sertifikat rasmini shu yerga qo'ying */}
                <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-gray-200">
                  <img src="/sertificat.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Document;
