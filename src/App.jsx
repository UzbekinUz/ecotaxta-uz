import React, { useEffect, useState } from "react";
import TopBar from "./components/topBar";
import Navbar from "./components/navbar";
import Features from "./sections/features";
import Home from "./sections/home";
import Products from "./sections/products";
import CTA from "./sections/CTA";
import Footer from "./components/footer";
import Contact from "./sections/contact";
import Loading from "./components/loading";
import ProductPage from "./pages/productPage";
import CategoryPage from "./pages/categoryPage";

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
      <Navbar setPage={setPage} lang={lang} setLang={setLang} />
      <ProductPage lang={lang} page={page} setPage={setPage}/>
      <Footer lang={lang} />
    </div>
  ) : page.status === "category" ? (
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar setPage={setPage} lang={lang} setLang={setLang} />
      <CategoryPage lang={lang} page={page} setPage={setPage}/>
      <Footer lang={lang} />
    </div>
  ) : page.status === "home" ?(
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar setPage={setPage} lang={lang} setLang={setLang} />
      <Home lang={lang} />
      <Features lang={lang} />
      {/* <About lang={lang} /> */}
      <Products lang={lang} />
      <CTA lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  ) : null
};

export default App;
