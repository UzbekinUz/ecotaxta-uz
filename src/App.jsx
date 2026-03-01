import { useEffect, useState } from "react";
import TopBar from "./components/topBar";
import Navbar from "./components/navbar";
import Features from "./sections/features";
import Home from "./sections/home";
import Products from "./sections/products";
import Footer from "./components/footer";
import Loading from "./components/loading";
import ProductPage from "./pages/productPage";
import CategoryPage from "./pages/categoryPage";
import Delivery from "./pages/deliveryPage";
import ContactPage from "./pages/contactPage";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [lang, setLang] = useState("ru");
  const [page, setPage] = useState({ status: "home", id: "" });

  useEffect(() => {
    // 8 soniyadan keyin setLoading(false) qiladigan taymer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7222); // 8000 ms = 8 soniya

    // Komponent o'chirilganda (unmount) taymerni tozalash
    // Bu xotira xatolarining oldini oladi
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loading />
  ) : page.status === "product" ? (
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar setPage={setPage} lang={lang} setLang={setLang} page={page}/>
      <ProductPage lang={lang} page={page} setPage={setPage}/>
      <Footer lang={lang}  setPage={setPage}/>
    </div>
  ) : page.status === "category" ? (
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar setPage={setPage} lang={lang} setLang={setLang} page={page}/>
      <CategoryPage lang={lang} page={page} setPage={setPage}/>
      <Footer lang={lang} setPage={setPage}/>
    </div>
  ) : page.status === "home" ?(
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar setPage={setPage} lang={lang} setLang={setLang} page={page}/>
      <Home lang={lang} />
      <Features lang={lang} />
      <Products lang={lang} setPage={setPage} />
      <Footer lang={lang} setPage={setPage}/>
    </div>
  ): page.status === "delivery" ? (
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar setPage={setPage} lang={lang} setLang={setLang} page={page}/>
      <Delivery lang={lang} page={page} setPage={setPage}/>
      <Footer lang={lang} setPage={setPage}/>
    </div>
  ): page.status === "contact" ? (
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar setPage={setPage} lang={lang} setLang={setLang} page={page}/>
      <ContactPage lang={lang} page={page} setPage={setPage}/>
      <Footer lang={lang} setPage={setPage}/>
    </div>
  ) : null
};

export default App;
