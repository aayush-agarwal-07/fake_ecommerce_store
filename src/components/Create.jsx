import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // const getHighestId = (products) => {
  //   if (products.length === 0) return 0;
  //   const ids = products.map((product) => parseInt(product.id, 10)).filter((id) => !isNaN(id));
  //   return Math.max(...ids);
  // };

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 3 ||
      image.trim().length < 5 ||
      category.trim().length < 3 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have at least 5 characters");
      return;
    }

    // const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    // const nextId = getHighestId(storedProducts) + 1;

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");

    // const updatedProducts = [...storedProducts, product];
    // setProducts(updatedProducts);
    // localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <form
        onSubmit={AddProductHandler}
        className="p-[2%] w-[50%] h-screen flex flex-col items-start gap-3 mx-auto"
      >
        <h1 className="text-2xl w-full mb-2 mt-[4%]">Add New Product</h1>
        <input
          type="text"
          placeholder="image link"
          className="text-lg p-1 bg-zinc-100 w-full outline-none border-none rounded-lg"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <input
          type="text"
          placeholder="title"
          className="text-lg bg-zinc-100 p-1 w-full outline-none border-none rounded-lg"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className="flex justify-between w-full">
          <input
            type="text"
            placeholder="category"
            className="text-lg bg-zinc-100 p-1 w-[49%] outline-none border-none rounded-lg"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="price"
            className="text-lg bg-zinc-100 p-1 w-[49%] outline-none border-none rounded-lg"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          rows="7"
          value={description}
          placeholder="enter product description here..."
          className="text-lg bg-zinc-100 p-3 w-full rounded-lg outline-none border-none"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="border rounded-lg border-blue-100 content-start"
        >
          <div className="text-blue-300 px-4 text-sm py-2 hover:scale-[1.2] duration-300">
            Add New Product
          </div>
        </button>
      </form>
    </div>
  );
};

export default Create;
