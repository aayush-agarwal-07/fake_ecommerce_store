import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./templates/Loading";

const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  const ProductDeleteHandler = (id) => {
    const filterProducts = products.filter((p) => p.id !== id);
    setProducts(filterProducts);
    localStorage.setItem("products", JSON.stringify(filterProducts));
    navigate("/");
  };

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  return product ? (
    <div className="w-[77%] h-screen m-auto p-[10%] flex">
      <img
        className="object-contain h-[100%] w-[40%] mr-10"
        src={product.image}
        alt={product.title}
      />
      <div className="content flex flex-col items-start gap-1 min-w-[60%] mt-11">
        <h1 className="text-3xl font-medium">{product.title}</h1>
        <h3 className="text-zinc-400">Men's Clothing</h3>
        <h2>${product.price}</h2>
        <p className="text-sm">{product.description}</p>
        <div className="flex justify-center items-center gap-2">
          <Link
            to={`/edit/${product.id}`}
            className="border rounded border-blue-100 px-3 py-1 text-blue-300"
          >
            Edit
          </Link>
          <button
            className="border rounded border-red-100 px-3 py-1 text-red-300"
            onClick={() => ProductDeleteHandler(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
