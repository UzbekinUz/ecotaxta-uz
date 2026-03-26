import productTxt from "../language/productTitle.json";
import ProductSlideBar from "../helper/productSlideBar";
import { X } from "lucide-react";
import buttonTxt from "../language/productTitle.json";

function Product({ page, lang, setPage, setBack, category, product }) {
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
    <section className="min-h-screen bg-gray-50 py-5 md:py-12 px-2 md:px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" md:max-w-7xl w-full col-span-3">
            <div className="bg-white rounded-2xl relative shadow-sm border border-gray-100 p-8">
              <X
                onClick={() => {
                  setPage({ status: "home", id: "" });
                }}
                className="h-8 w-8 absolute top-2 cursor-pointer  right-2"
              />
              <h1 className="text-xl md:text-4xl font-bold mb-4">
                {Lang(productTxt.title)}
              </h1>
              <p
                className="text-[12px] md:text-[15px] mb-12 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: Lang(productTxt.description),
                }}
              />
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 cursor-pointer">
                  {category.map((product, key) => {
                    return (
                      <div
                        key={key}
                        onClick={() => {
                          setBack({ status: "products", id: "" });
                          setPage({
                            status: "category",
                            id: product._id,
                          });
                          scrollToTop();
                        }}
                        className="bg-red-50 flex flex-col justify-between items-start relative rounded-sm border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                      >
                        <div className="h-40 overflow-hidden relative cursor-pointer z-10">
                          <div className="w-full relative z-10 flex items-center justify-center h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <img
                              src={product.img}
                              alt={Lang(product.title)}
                              className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        <div className="p-6 flex flex-col justify-start items-start">
                          <h3 className="text-[18px] text-center font-bold text-blue-700 mb-2">
                            {Lang(product.title)}
                          </h3>
                          <p className="text-[12px] md:text-[15px] text-start">{Lang(product.dsc)}</p>
                        </div>
                        <div className="flex ml-3 mb-3">
                          <button className="w-25 bg-[#FAE6C2] lg:w-auto hover:bg-black/5 transition-colors duration-200 text-black text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-2 md:px-4 border border-black whitespace-nowrap">
                            {Lang(buttonTxt.button)}
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* CTA in Grid */}
                </div>
              </div>
            </div>
          </div>

          {/* YON PANEL - MAHSULOTLAR RO'YXATI (O'ng tomon) */}
          <div className=" invisible lg:visible">
            <ProductSlideBar
            page={page}
            setPage={setPage}
            lang={lang}
            Lang={Lang}
            category={category}
            product={product}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
