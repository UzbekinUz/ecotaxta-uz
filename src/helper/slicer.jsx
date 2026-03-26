function Slicer({productsData}) {

      // Sahifalash uchun holatlar (state)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Joriy sahifadagi mahsulotlarni hisoblash
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsData.slice(indexOfFirstItem, indexOfLastItem);

  // Umumiy sahifalar soni
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // Sahifani o'zgartirish funksiyasi
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Sahifa o'zgarganda yuqoriga qaytish
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

    return ( 

        <div className="flex flex-wrap bg-white p-3 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10">
          {category.map((ctg, key) => (
            <div key={key}>
              <h2 className="text-xl md:text-2xl text-[#F58220]  font-bold tracking-wide uppercase">
                {Lang(ctg.title)}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 mt-2 gap-4">
                {product.map((product, key) => {
                  if (product.category === ctg._id) {
                    return (
                      <div
                        key={key}
                        className="flex flex-col justify-between border border-[#6b6b6b] h-full bg-[#f8f6f2] hover:shadow-xl transition-shadow duration-300 group"
                      >
                        <div className="bg-white h-32 md:h-64 flex items-center justify-center p-3 md:p-8 border-b border-[#6b6b6b]">
                          <div
                            onClick={() => {
                              setPage({ status: "product", id: product._id });
                              scrollToTop();
                            }}
                            className="w-full h-full max-w-70 object-cover group-hover:scale-110 transition-transform duration-500"
                          >
                            {!refP ? (
                              <img
                                src={product.img}
                                alt={Lang(product.name)}
                                className="w-full h-full"
                              />
                            ) : (
                              <Loader2 className="w-10 h-10 text-[#D97A2B] animate-spin" />
                            )}
                          </div>
                        </div>
                        <div
                          className="p-2 pt-0 md:p-6"
                          onClick={() => {
                            setPage({ status: "product", id: product._id });
                            scrollToTop();
                          }}
                        >
                          <h3 className="text-[13px] md:text-[1.1rem] font-bold text-[#FF7200] mb-3 md:mb-4 tracking-tight leading-tight">
                            {Lang(product.name)}
                          </h3>
                          <p className="hidden md:block text-[13px] text-black leading-snug mb-8 grow">
                            {Lang(product.content)}
                          </p>
                          <div className="flex flex-col lg:flex-row gap-2 md:gap-3 mt-auto">
                            <button
                              onClick={() => {
                                setPage({ status: "product", id: product._id });
                                scrollToTop();
                              }}
                              className="w-full lg:w-auto bg-[#FF7200] hover:bg-[#c95e06] transition-colors duration-200 text-white text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-2 md:px-4  whitespace-nowrap"
                            >
                              Запрос на расчет
                            </button>
                            <a
                              href="#"
                              onClick={() => {
                                setPage({ status: "product", id: product._id });
                                scrollToTop();
                              }}
                              className="w-full bg-[#FAE6C2] lg:w-auto hover:bg-black/5 transition-colors duration-200 text-black text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-2 md:px-4 border border-black whitespace-nowrap"
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

     );
}

export default Slicer;