function Footer() {
    return ( <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center mb-4 cursor-pointer">
          <span className="text-3xl font-black text-emerald-500 tracking-tighter">
            ECO
          </span>
          <span className="text-3xl font-black text-white tracking-tighter ml-1">
            TAXTA
          </span>
        </div>
        <p className="text-sm text-gray-400 max-w-xs">
          OOO ECO TAXTA - qurilish va mebel sanoati uchun yuqori sifatli yog'och
          materiallarini ulgurji sotishga ixtisoslashgan yetakchi kompaniya.
        </p>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
          Kompaniya
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#home"
              className="hover:text-emerald-400 transition-colors"
            >
              Asosiy
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-emerald-400 transition-colors"
            >
              Biz haqimizda
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-emerald-400 transition-colors"
            >
              Mahsulotlar
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Aloqa
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
          Mahsulotlar
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#products"
              className="hover:text-emerald-400 transition-colors"
            >
              Laminatsiyalangan Fanera
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-emerald-400 transition-colors"
            >
              Qayin Fanerasi
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-emerald-400 transition-colors"
            >
              OSB Plitalari
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-emerald-400 transition-colors"
            >
              DSP va DVP
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} OOO ECO TAXTA. Barcha huquqlar
        himoyalangan.
      </p>
      <p className="mt-2 md:mt-0">Toshkent, O'zbekiston</p>
    </div>
  </div>
</footer>
 );
}

export default Footer;