import ProductSlideBar from "../helper/productSlideBar";
import deliveryTxt from "../language/deliveryTxt.json";

function Delivery({ lang, page, setPage }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Silliq harakat
    });
  };
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="gap-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
            {/* Main Content Area */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#F58220] mb-6">
                {Lang(deliveryTxt.title)}
              </h2>

              <div className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                <p>{Lang(deliveryTxt.terms)}</p>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-[#F58220] uppercase tracking-wide">
                  {Lang(deliveryTxt.txt)}
                </h3>
              </div>

              {/* Responsive Table Wrapper */}
              <div className="overflow-x-auto">
                <table className="w-full bg-amber-50 relative z-10 border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#F58220] text-white">
                      <th className="p-3 border border-gray-300 text-left font-bold">
                        {Lang(deliveryTxt.table.volume)}
                      </th>
                      <th className="p-3 border border-gray-300 text-left font-bold">
                        {Lang(deliveryTxt.table.tct)}
                      </th>
                      <th className="p-3 border border-gray-300 text-left font-bold">
                        {Lang(deliveryTxt.table.upTo30)}
                      </th>
                      <th className="p-3 border border-gray-300 text-left font-bold">
                        {Lang(deliveryTxt.table.above30)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveryTxt.schema.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-3 border border-gray-200 text-gray-700">
                          {Lang(row.volume)}
                        </td>
                        <td className="p-3 border border-gray-200 text-gray-700">
                          {Lang(row.tct)}
                        </td>
                        <td className="p-3 border border-gray-200 text-gray-700">
                          {Lang(row.upTo30)}
                        </td>
                        <td className="p-3 border border-gray-200 text-gray-700">
                          {Lang(row.above30)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* YON PANEL - MAHSULOTLAR RO'YXATI (O'ng tomon) */}
            <ProductSlideBar page={page} setPage={setPage} scrollToTop={scrollToTop} lang={lang} Lang={Lang}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
