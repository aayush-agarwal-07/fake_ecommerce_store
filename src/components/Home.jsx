import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Main from "./templates/Main";
import Sidenav from "./templates/Sidenav";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filterProducts, setFilterProducts] = useState(products);

  const getProductsCategory = async () => {
    try {
      // Debug log
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterProducts(data);
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (!filterProducts || category == "undefined") setFilterProducts(products);
    if (category !== "undefined")
      setFilterProducts(products.filter((p) => p.category == category));
    // getProductsCategory();
  }, [category, products]);

  return (
    <div className="w-screen h-screen flex">
      <Sidenav />
      <Main filter={filterProducts} />
    </div>
  );
};

export default Home;
