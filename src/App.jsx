import React, { useEffect, useState } from "react";
import TopBar from "./components/topBar";
import Navbar from "./components/navbar";
import Features from "./sections/features";
import Home from "./sections/home";
import About from "./sections/about";
import Products from "./sections/products";
import CTA from "./sections/CTA";
import Footer from "./components/footer";
import Contact from "./sections/contact";
import Loading from "./components/loading";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [lang, setLang] = useState("ru");
  const [openInfo, setOpenInfo] = useState({status: false, id: ''});
  const [openCat, setOpenCat] = useState({status: false, id: ''});

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
  ) : (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} />
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} setOpenCat={setOpenCat}/>
      <Features lang={lang} />
      {/* <About lang={lang} /> */}
      <Products lang={lang} setOpenInfo={setOpenInfo}/>
      <CTA lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default App;
