import categoryTxt from "../language/categoryPageTxt.json";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMemo, useState } from "react";

function CategoryPage({ page, lang, setPage, setBack, category, product }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Silliq harakat
    });
  };
  const [currentPage, setCurrentPage] = useState(1);

  const selectedCategory = useMemo(
    () => category.find((ctg) => ctg._id === page.id),
    [category, page.id],
  );

  const filterProducts = useMemo(() => {
    if (!selectedCategory) return [];
    return product.filter((item) => item.category === selectedCategory._id);
  }, [product, selectedCategory]);

  const otherCategories = useMemo(() => {
    return category.filter((ctg) => ctg._id !== page.id);
  }, [category, page.id]);

  const totalPages = Math.ceil(filterProducts.length / 6);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * 6;
    return filterProducts.slice(startIndex, startIndex + 6);
  }, [currentPage, filterProducts]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Sahifa o'zgarganda yuqoriga scroll qilish
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" md:max-w-7xl w-full lg:col-span-3">
            <div className="bg-white rounded-2xl relative shadow-sm border border-gray-100 p-8 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <X
                onClick={() => {
                  setPage({ status: "home", id: "" });
                }}
                className="h-8 w-8 absolute top-2 cursor-pointer  right-2"
              />
              <h1 className="text-4xl font-bold mb-4">
                {Lang(categoryTxt.title)}
              </h1>
              <p
                className="text-md mb-12 text-gray-600"
                dangerouslySetInnerHTML={{ __html: Lang(categoryTxt.dsc) }}
              />
              {selectedCategory && (
                <div>
                  <h2 className="text-base mb-10 text-emerald-600 font-bold tracking-wide uppercase">
                    {Lang(selectedCategory.title)}
                  </h2>
                  <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                    {currentProducts.map((item, key) => {
                      return (
                        <div
                          key={key}
                          className="flex flex-col justify-between border border-[#6b6b6b] h-full bg-[#f8f6f2] hover:shadow-xl transition-shadow duration-300 group"
                        >
                          <div className="bg-white h-32 md:h-64 flex items-center justify-center p-3 md:p-8 border-b border-[#6b6b6b]">
                            <div
                              onClick={() => {
                                setBack({
                                  status: "category",
                                  id: selectedCategory._id,
                                });
                                setPage({
                                  status: "product",
                                  id: item._id,
                                });
                                scrollToTop();
                              }}
                              className="w-full h-full max-w-70 object-cover cursor-pointer group-hover:scale-110 transition-transform duration-500"
                            >
                              <img
                                src={item.img}
                                alt={Lang(item.name)}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <div
                            className="p-2 pt-0 md:p-6 cursor-pointer"
                            onClick={() => {
                              setBack({
                                status: "category",
                                id: selectedCategory._id,
                              });
                              setPage({
                                status: "product",
                                id: item._id,
                              });
                              scrollToTop();
                            }}
                          >
                            <h3 className="text-[13px] md:text-[1.1rem] font-bold text-[#FF7200] mb-3 md:mb-4 tracking-tight leading-tight">
                              {Lang(item.name)}
                            </h3>
                            <p className="hidden md:block text-[13px] text-black leading-snug mb-8 grow">
                              {Lang(item.content)}
                            </p>
                            <div className="flex flex-col lg:flex-row gap-2 md:gap-3 mt-auto">
                              <button
                                onClick={() => {
                                  setBack({
                                    status: "category",
                                    id: selectedCategory._id,
                                  });
                                  setPage({
                                    status: "product",
                                    id: item._id,
                                  });
                                  scrollToTop();
                                }}
                                className="w-full lg:w-auto bg-[#FF7200] hover:bg-[#c95e06] transition-colors duration-200 text-white text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-2 md:px-4 whitespace-nowrap"
                              >
                                Запрос на расчет
                              </button>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setBack({
                                    status: "category",
                                    id: selectedCategory._id,
                                  });
                                  setPage({
                                    status: "product",
                                    id: item._id,
                                  });
                                  scrollToTop();
                                }}
                                className="w-full bg-[#FAE6C2] lg:w-auto hover:bg-black/5 transition-colors duration-200 text-black text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-2 md:px-4 border border-black whitespace-nowrap"
                              >
                                Подробнее
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex flex-col items-center gap-4 mt-8">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => goToPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`p-2 rounded-full border transition-all ${
                            currentPage === 1
                              ? "text-gray-300 border-gray-200 cursor-not-allowed"
                              : "text-gray-600 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                          }`}
                        >
                          <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-2">
                          {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                              <button
                                key={pageNumber}
                                onClick={() => goToPage(pageNumber)}
                                className={`w-10 h-10 rounded-xl font-bold transition-all ${
                                  currentPage === pageNumber
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                                }`}
                              >
                                {pageNumber}
                              </button>
                            );
                          })}
                        </div>

                        <button
                          onClick={() => goToPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`p-2 rounded-full border transition-all ${
                            currentPage === totalPages
                              ? "text-gray-300 border-gray-200 cursor-not-allowed"
                              : "text-gray-600 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                          }`}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 font-medium">
                        Sahifa {currentPage} / {totalPages}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="md:max-w-3xl w-full ">
            <div className="bg-white shadow-sm border border-gray-100 pt-6 px-0 sticky top-8">
              <h3 className="text-lg font-bold ml-3 text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-6 bg-red-600 rounded-full mr-3"></span>
                {lang === "uz"
                  ? "Boshqa kategoriyalar"
                  : lang === "ru"
                    ? "Другие категории"
                    : "Other categories"}
              </h3>

              <div className="space-y-0 max-h-170 overflow-y-auto scrollbar-hide">
                {otherCategories.map((item) => (
                  <button
                    key={item._id}
                    onClick={() => {
                      setCurrentPage(1);
                      setPage({ status: "category", id: item._id });
                      scrollToTop();
                    }}
                    className="w-full cursor-pointer flex items-center gap-3 p-3 border-red-50 ring-2 ring-red-100 hover:bg-red-200 transition-all duration-200 text-left border bg-white border-transparent hover:bg-gray-200"
                  >
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-semibold truncate text-gray-800">
                        {Lang(item.title)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
