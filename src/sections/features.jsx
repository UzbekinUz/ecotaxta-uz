import ImageWithLoader from "../helper/imgLoader";
import featureText from "../language/feature.json";
function Features({ lang }) {
  function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
  return (
    <section className="py-12 relative bg-green-50 border-b pt-25 border-gray-100 z-1">
      <div className="absolute h-full inset-0 opacity-3 ">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-15 text-center  z-10">
          {Lang({
            uz: "Nima uchun bizni tanlashadi?",
            ru: "Почему выбирают нас?",
            en: "Why choose us?",
          })}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
          {featureText.map((item,key) => (
            <div
              key={key}
              className="flex p-0 items-center flex-col justify-start max-w-55 transition-colors duration-1000 hover:scale-110 rounded-lg  text-center"
            >
              <div className="shrink-0 p-3 bg-[#FF7200] rounded-lg text-emerald-600">
                <ImageWithLoader src={item.icon} alt={item.title} size="w-25 h-25"/>
              </div>
              <div className="ml-4 w-full flex mt-2 items-center flex-col justify-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {Lang(item.title)}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {Lang(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
