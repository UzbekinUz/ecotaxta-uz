import Product from "../data/products.json";
import productTxt from "../language/productTitle.json";
import categories from "../data/categories.json";
function Products({ lang }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start w-full mx-auto mb-16">
          <h2 className="text-base text-emerald-600 font-bold tracking-wide uppercase">
            {Lang(productTxt.start)}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {Lang(productTxt.title)}
          </p>
          <p className="mt-4 w-full text-xl text-gray-500 mx-auto">
            {Lang(productTxt.description)}
          </p>
        </div>

        <div className="flex flex-wrap sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((ctg, key) => (
            <div key={key}>
              <h2 className="text-base text-emerald-600 font-bold tracking-wide uppercase">
                {Lang(ctg.title)}
              </h2>
              <div
                
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {Product.map((product, key) => {
                  if (product.category === ctg._id) {
                    return (
                      <div
                        key={key}
                        className="bg-red-50 relative rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                      >
                        
                        <div className="h-64 overflow-hidden relative z-10">
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
                            <rect
                              width="100%"
                              height="100%"
                              fill="url(#pattern)"
                            />
                          </svg>
                        </div>
                          <div className="w-full relative z-10 flex items-center justify-center h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <img
                              src={product.img}
                              alt={Lang(product.name)}
                              className="w-[50%] object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {lang === "ru"
                              ? "Доступно для продажи"
                              : lang === "uz"
                                ? "Sotuvda mavjud"
                                : "Available for sale"}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {Lang(product.name)}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                            {Lang(product.content)}
                          </p>
                          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                            <a
                              href="#contact"
                              className="text-emerald-600 hover:text-emerald-800 font-bold p-2 bg-emerald-50 rounded-lg transition-colors"
                            >
                              {Lang(productTxt.button)}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}

                {/* CTA in Grid */}
              </div>
            </div>
          ))}

          {/* CTA in Grid */}
          <div className="bg-emerald-600 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center p-8 text-center sm:col-span-2 lg:col-span-2 relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Boshqa o'lcham yoki turdagi mahsulot kerakmi?
              </h3>
              <p className="text-emerald-100 mb-8 max-w-md mx-auto">
                Bizda Rossiyadan keltirilgan turli xil o'lchamdagi va
                qalinlikdagi yog'och materiallarining katta zaxirasi mavjud.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-bold rounded-lg text-emerald-600 bg-white hover:bg-transparent hover:text-white transition-all shadow-lg"
              >
                To'liq praks-listni so'rash
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
