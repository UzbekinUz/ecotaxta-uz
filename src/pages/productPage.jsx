import products from "../data/products.json";
function ProductPage({ lang, page, setPage }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" md:max-w-4xl w-full lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {products.map((product) => {
                if (product._id === page.id) {
                  return (
                    <>
                      <div className="flex flex-col md:flex-row">
                        {/* Mahsulot rasmi */}
                        <div className="md:max-w-100 w-full  flex items-center justify-center bg-gray-100">
                          <img
                            src={product.img}
                            alt={Lang(product.name)}
                            className="max-w-100  object-cover min-h-35 max-h-100"
                          />
                        </div>

                        {/* Mahsulot qisqa ma'lumoti */}
                        <div className="md:w-1/2 p-8 flex flex-col justify-between">
                          <div>
                            <nav className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
                              {lang === "uz"
                                ? "Mahsulot tafsiloti"
                                : lang === "ru"
                                  ? "Детали продукта"
                                  : "Product Details"}
                            </nav>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                              {Lang(product.name)}
                            </h1>
                            <p className="text-gray-600 leading-relaxed mb-6">
                              {Lang(product.content)}
                            </p>
                          </div>

                          <div className="flex flex-col gap-4">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 shadow-lg shadow-blue-200 active:scale-[0.98]">
                              {lang === "uz"
                                ? "Sotib olish"
                                : lang === "ru"
                                  ? "Купить сейчас"
                                  : "Buy Now"}
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
                    </>
                  );
                }
              })}
            </div>
          </div>

          {/* YON PANEL - MAHSULOTLAR RO'YXATI (O'ng tomon) */}
          <div className="md:max-x-3xl w-full lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
                {lang === "uz"
                  ? "Boshqa mahsulotlar"
                  : lang === "ru"
                    ? "Другие товары"
                    : "Other Products"}
              </h3>

              <div className="space-y-3">
                {products.map((item) => (
                  <button
                    key={item._id}
                    onClick={() => setPage({status:"product", id:item._id})}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left border
                      ${
                        item._id === page.id
                          ? "bg-blue-50 border-blue-200 ring-2 ring-blue-100"
                          : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-200"
                      }`}
                  >
                    <img
                      src={item.img}
                      className="w-12 h-12 rounded-lg object-cover"
                      alt=""
                    />
                    <div className="flex flex-col overflow-hidden">
                      <span
                        className={`text-sm font-semibold truncate ${item._id === page.id ? "text-blue-700" : "text-gray-800"}`}
                      >
                        {Lang(item.name)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-linear-to-br from-blue-600 to-indigo-700 rounded-xl text-white">
                <p className="text-xs opacity-80 mb-1">
                  {lang === "uz" ? "Yordam kerakmi?" : "Нужна помощь?"}
                </p>
                <p className="font-bold text-sm mb-3">+998 90 123 45 67</p>
                <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-xs font-semibold backdrop-blur-sm transition">
                  {lang === "uz" ? "Bog'lanish" : "Связаться"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
