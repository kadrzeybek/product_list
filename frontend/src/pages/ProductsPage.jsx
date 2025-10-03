import MultiCarousel from "../components/productsPage/MultiCarousel";
import { useProductStore } from "../store/product";
import Header from "../components/productsPage/Header";
import FilterPanel from "../components/productsPage/FilterPanel";

import { useEffect } from "react";


const Products = () => {


  const {fetchProducts, products, loading} = useProductStore();

  useEffect(() =>{
    fetchProducts()
  },[fetchProducts])


  return (
    <div className=" mt-10 mx-10">
      <Header />
      <FilterPanel />
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
          {/* basit spinner */}
        </div>
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <img src="/notFound.jpg" alt="Not Found" className="w-48 h-48 object-contain" />
          <p className="text-gray-500 mt-4">Ürün bulunamadı</p>
        </div>
      ) : (
        <MultiCarousel slides={products} />
      )}
    </div>
  )
}

export default Products
