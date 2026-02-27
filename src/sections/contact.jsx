import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-emerald-600 font-bold tracking-wide uppercase">
            Aloqa
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Biz bilan bog'lanish
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Savollaringiz bormi yoki buyurtma bermoqchimisiz? Formani to'ldiring
            yoki bizga qo'ng'iroq qiling.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="bg-emerald-800 p-10 text-white lg:col-span-2 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-700 rounded-full opacity-50 blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Kontakt Ma'lumotlari
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm text-emerald-200 font-medium mb-1">
                      Telefon raqamlar:
                    </p>
                    <p className="font-semibold text-lg">+998 90 080-90-00</p>
                    <p className="font-semibold text-lg">+998 90 712-20-80</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm text-emerald-200 font-medium mb-1">
                      Elektron pochta:
                    </p>
                    <p className="font-semibold text-lg">ecotaxta@mail.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm text-emerald-200 font-medium mb-1">
                      Manzil:
                    </p>
                    <p className="font-semibold text-base leading-relaxed">
                      Toshkent shahri, O'zbekiston.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Xabar qoldirish
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Ismingiz
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Ali Valiyev"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefon raqamingiz
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mavzu / Mahsulot
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    placeholder="Laminatsiyalangan fanera sotib olmoqchiman"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Xabaringiz
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                    placeholder="Qo'shimcha ma'lumotlar..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                  >
                    Jo'natish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
