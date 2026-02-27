import { Banknote, CheckCircle, ShieldCheck, Truck } from "lucide-react";

function About() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start">
            <div className="shrink-0 p-3 bg-emerald-100 rounded-lg text-emerald-600">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900">
                Kafolatlangan Sifat
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Barcha mahsulotlarimiz xalqaro standartlarga javob beradi va
                sertifikatlangan.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="shrink-0 p-3 bg-emerald-100 rounded-lg text-emerald-600">
              <Banknote className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900">
                Eng Yaxshi Narxlar
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Biz ishlab chiqaruvchilarning to'g'ridan-to'g'ri vakilimiz,
                vositachilarsiz narxlar.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="shrink-0 p-3 bg-emerald-100 rounded-lg text-emerald-600">
              <Truck className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900">
                Tezkor Yetkazish
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Toshkent shahri va viloyatlar bo'ylab qisqa muddatlarda yetkazib
                beramiz.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="shrink-0 p-3 bg-emerald-100 rounded-lg text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900">
                Katta Assortiment
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Barcha turdagi yog'och qoplamalari va qurilish anjomlari doim
                omborda mavjud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
