import products from "../data/products.json";
import ProductSlideBar from "../helper/productSlideBar";
function ProductPage({ lang, page, setPage }) {
  
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
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" md:max-w-7xl w-full lg:col-span-3 ">
            <div className="bg-red-50 rounded-2xl p-10 shadow-sm border border-gray-100 overflow-hidden relative">
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
              {products.map((product,key) => {
                
                if (product._id === page.id) {
                  return (
                    <div key={key}>
                      <div className="flex flex-col md:flex-row relative z-10">
                        {/* Mahsulot rasmi */}
                        <div className="md:max-w-100 w-full h-70 flex items-center justify-center bg-red-100">
                          <img
                            src={product.img}
                            alt={Lang(product.name)}
                            className="md:max-w-full max-w-70  object-cover  md:max-h-100"
                          />
                        </div>

                        {/* Mahsulot qisqa ma'lumoti */}
                        <div className="md:w-1/2 p-8  flex flex-col justify-between">
                          <div>
                            <nav className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
                              {lang === "uz"
                                ? "Mahsulot tafsiloti"
                                : lang === "ru"
                                  ? "Детали продукта"
                                  : "Product Details"}
                            </nav>

                            <h1 className=" md:text-3xl text-xl font-bold text-gray-900 mb-4">
                              {Lang(product.name)}
                            </h1>
                            <p className="text-gray-600 md:text-xl text-[16px] leading-relaxed mb-6">
                              {Lang(product.content)}
                            </p>
                          </div>

                          <div className="flex flex-col gap-4">
                            <button onClick={()=>{setPage({status:"contact",id:""})}} className="w-full bg-red-400 hover:bg-red-700 cursor-pointer text-white font-bold py-4 px-6 rounded-xl transition duration-200 shadow-lg shadow-blue-200 active:scale-[0.98]">
                              {lang === "uz"
                                ? "Buyurtma berish"
                                : lang === "ru"
                                  ? "Заказать"
                                  : "Order Now"}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 border-t border-gray-50 bg-gray-50/30">
                        <div
                          className="prose max-w-none text-gray-700"
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
          />
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
