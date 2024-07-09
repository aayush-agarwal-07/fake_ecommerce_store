import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, products]);

  console.log(product);

  console.log(products);

  const ChangeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 3 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 3 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every input must have at least 5 characters");
      return;
    }

    const updatedProducts = products.map((p) => (p.id === id ? product : p));
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={AddProductHandler}
        className="p-[2%] w-[50%] h-screen flex flex-col items-start gap-3 mx-auto"
      >
        <h1 className="text-2xl w-full mb-2 mt-[4%]">Edit Product</h1>
        <input
          type="text"
          placeholder="image link"
          className="text-lg p-1 bg-zinc-100 w-full outline-none border-none rounded-lg"
          name="image"
          onChange={ChangeHandler}
          value={product.image || ""}
        />
        <input
          type="text"
          placeholder="title"
          className="text-lg bg-zinc-100 p-1 w-full outline-none border-none rounded-lg"
          name="title"
          onChange={ChangeHandler}
          value={product.title || ""}
        />
        <div className="flex justify-between w-full">
          <input
            type="text"
            placeholder="category"
            className="text-lg bg-zinc-100 p-1 w-[49%] outline-none border-none rounded-lg"
            name="category"
            onChange={ChangeHandler}
            value={product.category || ""}
          />
          <input
            type="number"
            placeholder="price"
            className="text-lg bg-zinc-100 p-1 w-[49%] outline-none border-none rounded-lg"
            name="price"
            onChange={ChangeHandler}
            value={product.price || ""}
          />
        </div>
        <textarea
          rows="7"
          value={product.description || ""}
          placeholder="enter product description here..."
          className="text-lg bg-zinc-100 p-3 w-full rounded-lg outline-none border-none"
          name="description"
          onChange={ChangeHandler}
        ></textarea>
        <button
          type="submit"
          className="border rounded-lg border-blue-100 content-start"
        >
          <div className="text-blue-300 px-4 text-sm py-2 hover:scale-[1.2] duration-300">
            Edit Product
          </div>
        </button>
      </form>
    </div>
  );
};

export default Edit;
