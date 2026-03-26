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
import useStore from "./helper/store";
import Product from "./sections/product";
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [lang, setLang] = useState("ru");
  const [page, setPage] = useState({ status: "home", id: "" });
  const [back, setBack] = useState({ status: "home", id: "" });
  const { product, refP, fetchProducts, category, refC, fetchCategories } =
    useStore();
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchCategories, fetchProducts]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="min-h-screen relative bg-gray-50 font-sans text-gray-800 animate-in fade-in duration-1000">
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
          refP={refP}
        />
      ) : page.status === "products" ? (
        <Product
          setBack={setBack}
          lang={lang}
          page={page}
          setPage={setPage}
          category={category}
          product={product}
          refC={refC}
        />
      ) : page.status === "category" ? (
        <CategoryPage
          setBack={setBack}
          lang={lang}
          page={page}
          setPage={setPage}
          category={category}
          product={product}
          refC={refC}
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
