import productTxt from "../language/productTitle.json";
function Products({ lang, setPage, category, product }) {
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
    <section
      id="products"
      className="py-8 md:py-20 bg-gray-100"
      style={{
        backgroundColor: "#a3714b",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl  mx-auto px-1 md:px-4 sm:px-6 lg:px-8">
        <div className="text-start bg-amber-50 md:p-10 p-4 w-full mx-auto mb-0 md:mb-16">
          <h2 className="text-base text-emerald-600 font-bold tracking-wide uppercase">
            {Lang(productTxt.start)}
          </h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl">
            {Lang(productTxt.title)}
          </p>
          <p className="mt-4 w-full text-[15px] md:text-xl text-gray-500 mx-auto">
            {Lang(productTxt.description)}
          </p>
        </div>

        <div className="flex flex-wrap sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10">
          {category.map((ctg, key) => (
            <div key={key}>
              <h2 className="text-xl md:text-2xl text-[#F58220] bg-amber-50 p-2 font-bold tracking-wide uppercase">
                {Lang(ctg.title)}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                {product.map((product, key) => {
                  if (product.category === ctg._id) {
                    return (
                      <div
                        key={key}
                        className="bg-red-50 relative rounded-0 border-t-2 border-[#F58220] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                      >
                        <div className="h-40 md:h-64 overflow-hidden relative z-10">
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
                          <div
                            onClick={() => {
                              setPage({ status: "product", id: product._id });
                              scrollToTop();
                            }}
                            className="w-full relative z-10 flex items-center justify-center h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          >
                            <img
                              src={product.img}
                              alt={Lang(product.name)}
                              className="w-[48%]  object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="absolute top-4 right-4 z-40 bg-[#F58220] text-white text-xs font-bold px-3 py-1 rounded-full">
                            {lang === "ru"
                              ? "Доступно для продажи"
                              : lang === "uz"
                                ? "Sotuvda mavjud"
                                : "Available for sale"}
                          </div>
                        </div>
                        <div
                          className="p-2 pt-0 md:p-6"
                          onClick={() => {
                            setPage({ status: "product", id: product._id });
                            scrollToTop();
                          }}
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {Lang(product.name)}
                          </h3>
                          <p className="text-gray-600 mb-0 md:mb-4 text-sm line-clamp-2">
                            {Lang(product.content)}
                          </p>
                          <div className="flex justify-start md:justify-center items-center mt-0 md:mt-6 pt-2 md:pt-4 border-t border-gray-100">
                            <a
                              href="#"
                              onClick={() => {
                                setPage({ status: "product", id: product._id });
                                scrollToTop();
                              }}
                              className="bg-[#F58220] w-50 text-center  text-[12px] md:text-[16px]  hover:bg-red-700 font-bold p-2 text-white rounded-0 md:rounded-lg transition-colors"
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
        </div>
      </div>
    </section>
  );
}

export default Products;
