import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import slides from "../data/slides.json";
function Home({ lang, setPage }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Har 5 soniyada slayd almashadi
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gray-900 h-150 flex items-center overflow-hidden"
    >
      {/* Background Images Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.image}
            alt="Yog'och materiallari"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
            {lang === "ru" ? "Оптовая торговля из первых рук" : lang === "uz" ? "Birinchi qo'ldan ulgurji savdo" : "First-hand wholesale sales"}
          </div>

          <div className="min-h-40">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-500">
              {Lang(slides[currentSlide].titlePart1)}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {Lang(slides[currentSlide].subtitle)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 relative z-20">
            <a
              href="#products"
              className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-md text-white bg-[#F58220] hover:bg-[#9f4e07] shadow-lg shadow-emerald-600/30 transition-all"
            >
              {lang === "ru" ? "Каталог продукции" : lang === "uz" ? "Mahsulotlar katalogi" : "Product Catalog"}
            </a>
            <a
              href="#"
              onClick={()=>{setPage({status:"contact",id:''})}}
              className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-white/20 text-base font-bold rounded-md text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {lang === "ru" ? "Связаться с нами" : lang === "uz" ? "Biz bilan bog'lanish" : "Contact Us"}
            </a>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute z-20 bottom-8 left-0 right-0 flex justify-center items-center space-x-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-all backdrop-blur-sm"
          aria-label="Oldingi slayd"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-emerald-500 w-8" : "bg-white/50 w-2.5 hover:bg-white"}`}
              aria-label={`Slayd ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-all backdrop-blur-sm"
          aria-label="Keyingi slayd"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default Home;
