import { createContext, useState } from "react";
import all_products from "../assets/products";
export const ProductContext = createContext(all_products);

const Context = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
