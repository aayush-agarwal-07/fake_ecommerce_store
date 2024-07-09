import { createContext, useEffect, useState } from "react";
import axios from "../utils/axios";
export const ProductContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  // const getData = async () => {
  //   try {
  //     const { data } = await axios("/products/");
  //     setproducts(data);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
