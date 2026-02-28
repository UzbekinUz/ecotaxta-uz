import products from "../data/products.json";
function CategoryPage({page, lang}) {
    function Lang(address) {
    return lang === "ru" ? address.ru : lang === "uz" ? address.uz : address.en;
  }
    return ( 
        <section className="w-full h-full flex items-center justify-center" >
            Category {products.map((product) => {
                if(product.category === page.id){
                    return <p>{Lang(product.name)}</p>
                }
            })}
        </section>
     );
}

export default CategoryPage;