import products from "../data/products.json";
import categories from "../data/categories.json";
import categoryTxt from "../language/categoryPageTxt.json";
import ProductSlideBar from "../helper/productSlideBar";

function CategoryPage({ page, lang, setPage }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }



  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" md:max-w-7xl w-full lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <h1 className="text-4xl font-bold mb-4">
                {Lang(categoryTxt.title)}
              </h1>
              <p
                className="text-md mb-12 text-gray-600"
                dangerouslySetInnerHTML={{ __html: Lang(categoryTxt.dsc) }}
              />
              {categories.map((ctg, key) => {
                if (ctg._id === page.id) {
                  return (
                    <div key={key}>
                      <h2 className="text-base  mb-10 text-emerald-600 font-bold tracking-wide uppercase">
                        {Lang(ctg.title)}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 cursor-pointer">
                        {products.map((product, key) => {
                          if (product.category === ctg._id) {
                            return (
                              <button
                                key={key}
                                onClick={() =>
                                  setPage({
                                    status: "product",
                                    id: product._id,
                                  })
                                }
                                className="bg-red-50 relative rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                              >
                                <div className="h-40 overflow-hidden relative cursor-pointer z-10">
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
                                </div>
                                <div className="p-6">
                                  <h3 className="text-[18px] text-center font-bold text-blue-700 mb-2">
                                    {Lang(product.name)}
                                  </h3>
                                </div>
                              </button>
                            );
                          } else {
                            return null;
                          }
                        })}

                        {/* CTA in Grid */}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* YON PANEL - MAHSULOTLAR RO'YXATI (O'ng tomon) */}
            <ProductSlideBar page={page} setPage={setPage} lang={lang} Lang={Lang}/>
          
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
