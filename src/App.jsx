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
  const [back, setBack] = useState({ status: "home", id: "" });

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("/json/data/categories.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Faylni yuklashda xatolik yuz berdi");
        }
        return response.json();
      })
      .then((dataC) => {
        setCategory(dataC);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 7222);
        return () => clearTimeout(timer);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 7222);
        return () => clearTimeout(timer);
      });
  }, []);
  useEffect(() => {
    fetch("/json/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Faylni yuklashda xatolik yuz berdi");
        }
        return response.json();
      })
      .then((dataC) => {
        setProduct(dataC);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 7222);
        return () => clearTimeout(timer);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 7222);
        return () => clearTimeout(timer);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7222);
    return () => clearTimeout(timer);
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
      <TopBar lang={lang} setLang={setLang} />
      <Navbar
        setBack={setBack}
        setPage={setPage}
        lang={lang}
        setLang={setLang}
        page={page}
        category={category}
        product={product}
      />
      {page.status === "product" ? (
        <ProductPage
          back={back}
          lang={lang}
          page={page}
          setBack={setBack}
          setPage={setPage}
          category={category}
          product={product}
        />
      ) : page.status === "category" ? (
        <CategoryPage
          setBack={setBack}
          lang={lang}
          page={page}
          setPage={setPage}
          category={category}
          product={product}
        />
      ) : page.status === "home" ? (
        <>
          <Home lang={lang} setPage={setPage} />
          <Features lang={lang} />
          <Products
            setBack={setBack}
            lang={lang}
            setPage={setPage}
            category={category}
            product={product}
          />
        </>
      ) : page.status === "delivery" ? (
        <Delivery
          lang={lang}
          page={page}
          setPage={setPage}
          category={category}
          product={product}
        />
      ) : page.status === "contact" ? (
        <ContactPage
          setBack={setBack}
          back={back}
          lang={lang}
          page={page}
          setPage={setPage}
          category={category}
          product={product}
        />
      ) : null}

      <Footer
        lang={lang}
        setPage={setPage}
        setBack={setBack}
        category={category}
        product={product}
      />
    </div>
  );
};

export default App;
