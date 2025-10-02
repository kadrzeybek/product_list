import MultiCarousel from "../components/MultiCarousel";
import { useProductStore } from "../store/product";

import { useEffect } from "react";

const Products = () => {

  const {fetchProducts, products} = useProductStore();

  useEffect(() =>{
    fetchProducts()
  },[fetchProducts])


  return (
    <div className="max-w-full mt-10 mx-10">
      <MultiCarousel slides={products} />
    </div>
  )
}

export default Products
