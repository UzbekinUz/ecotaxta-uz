import productTxt from "../language/productTitle.json";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";

function Products({ lang, setPage, category, product, refP }) {
  const [currentPages, setCurrentPages] = useState({});

  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openProduct = (productId) => {
    setPage({ status: "product", id: productId });
    scrollToTop();
  };

  const goToPage = (categoryId, pageNumber, totalPages) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setCurrentPages((prev) => ({
      ...prev,
      [categoryId]: pageNumber,
    }));
  };

  return (
    <section
      id="products"
      className="py-8 md:py-20 bg-gray-100"
      style={{
        backgroundColor: "#a3714b",
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-4 sm:px-6 lg:px-8">
        <div className="text-start bg-amber-50 md:p-10 p-4 w-full mx-auto mb-6 md:mb-16">
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

        <div className="bg-white p-4 md:p-6 lg:p-8 space-y-10 md:space-y-14">
          {category.map((ctg) => {
            const categoryProducts = product.filter(
              (item) => item.category === ctg._id,
            );
            const totalPages = Math.ceil(categoryProducts.length / 6);
            const currentPage = currentPages[ctg._id] || 1;
            const startIndex = (currentPage - 1) * 6;
            const visibleProducts = categoryProducts.slice(
              startIndex,
              startIndex + 6,
            );

            return (
              <div key={ctg._id} className="space-y-4 md:space-y-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <h2 className="text-xl md:text-2xl text-[#F58220] font-bold tracking-wide uppercase">
                    {Lang(ctg.title)}
                  </h2>
                  {totalPages > 1 && (
                    <p className="text-sm text-gray-500 font-medium">
                      Sahifa {currentPage} / {totalPages}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {visibleProducts.map((item) => (
                    <div
                      key={item._id}
                      className="flex h-full flex-col justify-between border border-[#6b6b6b] bg-[#f8f6f2] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                    >
                      <button
                        type="button"
                        onClick={() => openProduct(item._id)}
                        className="bg-white h-32 md:h-64 flex items-center justify-center p-3 md:p-8 border-b border-[#6b6b6b]"
                      >
                        <div className="w-full h-full max-w-70 group-hover:scale-110 transition-transform duration-500">
                          {!refP ? (
                            <img
                              src={item.img}
                              alt={Lang(item.name)}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <Loader2 className="w-10 h-10 text-[#D97A2B] animate-spin" />
                            </div>
                          )}
                        </div>
                      </button>

                      <div className="flex h-full flex-col p-3 pt-3 md:p-6">
                        <button
                          type="button"
                          onClick={() => openProduct(item._id)}
                          className="text-left"
                        >
                          <h3 className="text-[13px] md:text-[1.1rem] font-bold text-[#FF7200] mb-3 md:mb-4 tracking-tight leading-tight">
                            {Lang(item.name)}
                          </h3>
                        </button>

                        <p className="hidden md:block text-[13px] text-black leading-snug mb-8 grow">
                          {Lang(item.content)}
                        </p>

                        <div className="mt-auto flex flex-col lg:flex-row gap-2 md:gap-3">
                          <button
                            type="button"
                            onClick={() => openProduct(item._id)}
                            className="w-full lg:w-auto bg-[#FF7200] hover:bg-[#c95e06] transition-colors duration-200 text-white text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-2 md:px-4 whitespace-nowrap"
                          >
                            Запрос на расчет
                          </button>
                          <button
                            type="button"
                            onClick={() => openProduct(item._id)}
                            className="w-full lg:w-auto bg-[#FAE6C2] hover:bg-black/5 transition-colors duration-200 text-black text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-2 md:px-4 border border-black whitespace-nowrap"
                          >
                            {Lang(productTxt.button)}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex flex-col items-center gap-4 pt-2">
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <button
                        type="button"
                        onClick={() =>
                          goToPage(ctg._id, currentPage - 1, totalPages)
                        }
                        disabled={currentPage === 1}
                        className={`p-2 rounded-full border transition-all ${
                          currentPage === 1
                            ? "text-gray-300 border-gray-200 cursor-not-allowed"
                            : "text-gray-600 border-gray-300 hover:bg-[#FAE6C2] hover:border-[#F58220]"
                        }`}
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <div className="flex gap-2 flex-wrap justify-center">
                        {Array.from({ length: totalPages }, (_, index) => {
                          const pageNumber = index + 1;

                          return (
                            <button
                              key={pageNumber}
                              type="button"
                              onClick={() =>
                                goToPage(ctg._id, pageNumber, totalPages)
                              }
                              className={`w-10 h-10 rounded-xl font-bold transition-all ${
                                currentPage === pageNumber
                                  ? "bg-[#333333] text-white shadow-lg"
                                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#F58220] hover:bg-[#FAE6C2]"
                              }`}
                            >
                              {pageNumber}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          goToPage(ctg._id, currentPage + 1, totalPages)
                        }
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-full border transition-all ${
                          currentPage === totalPages
                            ? "text-gray-300 border-gray-200 cursor-not-allowed"
                            : "text-gray-600 border-gray-300 hover:bg-[#FAE6C2] hover:border-[#F58220]"
                        }`}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
