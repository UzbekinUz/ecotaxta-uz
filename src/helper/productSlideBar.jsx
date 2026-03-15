
function ProductSlideBar({ page, setPage,  lang , Lang, product}) {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Silliq harakat
    });
  };
  return (
    <div className="md:max-w-3xl w-full ">
      <div className="bg-white shadow-sm border border-gray-100 pt-6 px-0 sticky top-8">
        <h3 className="text-lg font-bold ml-3 text-gray-900 mb-6 flex items-center">
          <span className="w-2 h-6 bg-red-600 rounded-full mr-3"></span>
          {lang === "uz"
            ? "Mahsulotlar qatori"
            : lang === "ru"
              ? "Kаталог продукции"
              : "Products"}
        </h3>

        <div className="space-y-0  ">
          {product.map((item) => (
            <button
              key={item._id}
              onClick={() => {
                setPage({ status: "product", id: item._id });
                scrollToTop();
              }}
              className={`w-full cursor-pointer flex items-center gap-3 p-3 border-red-50 ring-2 ring-red-100 hover:bg-red-200  transition-all duration-200 text-left border
                              ${
                                item.category === page.id
                                  ? "bg-red-50 border-red-50 ring-2 ring-red-100 hover:bg-red-200"
                                  : "bg-white border-transparent hover:bg-gray-200 "
                              }`}
            >
              <div className="flex flex-col overflow-hidden">
                <span
                  className={`text-sm font-semibold truncate ${item.category === page.id ? "text-blue-700" : "text-gray-800"}`}
                >
                  {Lang(item.name)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSlideBar;
