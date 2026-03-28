import { StepBack } from "lucide-react";
import ProductSlideBar from "../helper/productSlideBar";
function ProductPage({
  lang,
  page,
  setPage,
  back,
  setBack,
  product,
  category,
}) {
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
    <section className="min-h-screen bg-gray-50 py-6 md:py-12 px-4 sm:px-6 relative lg:px-8">
      <div className="absolute h-full inset-0 opacity-3 ">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" md:max-w-7xl w-full lg:col-span-3 ">
            <div className="bg-red-50 rounded-2xl p-3 md:p-10 shadow-sm border border-gray-100 overflow-hidden relative">
              {product.map((product, key) => {
                if (product._id === page.id) {
                  return (
                    <div key={key}>
                      <div className="flex flex-col md:flex-row relative z-10">
                        {/* Mahsulot rasmi */}
                        <div className="md:max-w-100 w-full h-70 flex rounded-2xl items-center justify-center bg-white">
                          <img
                            src={product.img}
                            alt={Lang(product.name)}
                            className="md:max-w-full max-w-70  object-cover  md:max-h-100"
                          />
                        </div>

                        {/* Mahsulot qisqa ma'lumoti */}
                        <div className="md:w-1/2 p-3 md:p-8  flex flex-col justify-between">
                          <div>
                            <nav className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
                              {lang === "uz"
                                ? "Mahsulot tafsiloti"
                                : lang === "ru"
                                  ? "Детали продукта"
                                  : "Product Details"}
                            </nav>

                            <h1 className=" md:text-3xl text-xl font-bold text-[#F58220] mb-4">
                              {Lang(product.name)}
                            </h1>
                            <p className="text-gray-600 md:text-[18px] text-[15px] leading-relaxed mb-6">
                              {Lang(product.content)}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => {
                                setBack({ status: "product", id: product._id });
                                setPage({ status: "contact", id: "" });
                                scrollToTop();
                              }}
                              className="w-full bg-[#F58220] hover:bg-red-700 cursor-pointer text-white font-bold py-3 px-6 rounded-sm transition duration-200 shadow-lg shadow-blue-200 active:scale-[0.98]"
                            >
                              {lang === "uz"
                                ? "Buyurtma berish"
                                : lang === "ru"
                                  ? "Запрос на расчет"
                                  : "Order Now"}
                            </button>
                            <button
                              onClick={() => {
                                setBack;
                                setPage({ status: back.status, id: back.id });
                                scrollToTop();
                              }}
                              className="w-full cursor-pointer text-amber-800 font-bold py-2 px-6 rounded-sm transition duration-200 border active:scale-[0.98]"
                            >
                              {lang === "uz"
                                ? "Qaytish"
                                : lang === "ru"
                                  ? "Назад"
                                  : "Back"}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 md:p-8 border-t border-gray-50 bg-gray-50/30">
                        <div
                          className="prose text-[12px] md:text-[15px] max-w-none text-gray-700"
                          dangerouslySetInnerHTML={{
                            __html: Lang(product.description),
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* YON PANEL - MAHSULOTLAR RO'YXATI (O'ng tomon) */}
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

export default ProductPage;
