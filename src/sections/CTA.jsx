import { Phone } from "lucide-react";

function CTA() {
    return ( 
        <section className="bg-emerald-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Katta hajmdagi buyurtma uchun chegirmalar
          </h2>
          <p className="mt-4 text-xl leading-6 text-emerald-200 max-w-2xl mx-auto">
            Qurilish kompaniyalari va doimiy mijozlar uchun maxsus takliflarimiz bor. Qo'ng'iroq qiling va kelishamiz!
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
            <a href="tel:+998900809000" className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-emerald-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-400/20">
              <Phone className="w-5 h-5 mr-2" />
              90 080-90-00
            </a>
            <a href="tel:+998907122080" className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-emerald-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-400/20">
              <Phone className="w-5 h-5 mr-2" />
              90 712-20-80
            </a>
          </div>
        </div>
      </section>
     );
}

export default CTA;