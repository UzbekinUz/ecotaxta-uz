import { Clock, Mail, Phone } from "lucide-react";
import ProductSlideBar from "../helper/productSlideBar";
import contactTxt from "../language/contactTxt.json";
function ContactPage({ page, setPage, lang }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" md:max-w-7xl w-full lg:col-span-3">
            <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000 bg-red-50 rounded-2xl md:p-10 p-3 shadow-sm border border-gray-100 overflow-hidden relative">
              <div className="absolute h-full inset-0 opacity-3 ">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              <section className="pt-0  border-t border-gray-100 relative z-10">
                <h3 className="text:[16px] md:text-xl font-black text-gray-900 mb-3 md:mb-8 uppercase tracking-tight flex items-center">
                  <Clock size={20} className="mr-2 text-[#F58220]" /> {Lang(contactTxt.tit1)}
                </h3>

                <div className="bg-[#F58220] rounded-2xl md:p-6 p-3 relative">
                  <div className="flex justify-between text-[11px] font-bold text-white uppercase mb-4 px-1">
                    <span>Пн</span>
                    <span>Вт</span>
                    <span>Ср</span>
                    <span>Чт</span>
                    <span>Пт</span>
                    <span className="text-black">Сб</span>
                    <span className="text-black">Вс</span>
                  </div>

                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden flex shadow-inner">
                    <div className="w-[71.4%] h-full bg-linear-to-r from-green-400 to-green-600 relative">
                      <div className="absolute inset-0 bg-blue-700 animate-pulse"></div>
                    </div>
                    <div className="w-[28.6%] h-full bg-red-100"></div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <div className="w-[70%] flex flex-col items-center">
                      <span className="text:[15px] md:text-lg font-black text-blue-800">
                        9:00 — 17:30
                      </span>
                      <span className="text-[10px] font-bold text-green-600 uppercase">
                        {Lang(contactTxt.day)}
                      </span>
                    </div>
                    <div className="w-[30%] flex flex-col items-center border-l border-gray-200">
                      <span className="text-[12px] md:text-lg font-black text-gray-800 italic">
                        {Lang(contactTxt.holi)}
                      </span>
                      <span className="text-[10px] font-bold text-white uppercase">
                        {Lang(contactTxt.mini)}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative  z-10">
                <div className="inline-block px-3 py-1 bg-orange-50 text-[#F58220] text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-4">
                  {Lang(contactTxt.callMe)}
                </div>
                <h2 className="mb-4 md:mb-8 text-2xl md:text-5xl font-black text-gray-900 tracking-tighter">
                  {Lang(contactTxt.contact)}
                </h2>

                <div className="space-y-8">
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Phone
                        size={24}
                        className="text-[#F58220] group-hover:text-white"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                        {Lang(contactTxt.phone)}
                      </p>
                      <div className="flex md:flex-row flex-col gap-1 md:gap-8">
                        <span className="text-[12px] md:text-xl font-bold text-gray-800 hover:text-[#F58220] transition-colors">
                          +998 99 123 45 67 
                        </span>
                        <span className="text-[12px] md:text-xl font-bold text-gray-800 hover:text-[#F58220] transition-colors">
                          +998 99 123 45 67
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Mail
                        size={24}
                        className="text-[#F58220] group-hover:text-white"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                        {Lang(contactTxt.email)}
                      </p>
                      <span className="text-xl font-bold text-[#F58220] underline decoration-orange-200 underline-offset-4 hover:decoration-[#F58220] transition-all">
                        ecotaxta@mail.ru
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              
            </div>
          </div>

          {/* YON PANEL - MAHSULOTLAR RO'YXATI (O'ng tomon) */}
          <ProductSlideBar
            page={page}
            setPage={setPage}
            lang={lang}
            Lang={Lang}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
