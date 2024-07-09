import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../utils/Context";

const Sidenav = () => {
  const [products] = useContext(ProductContext);

  const distinct_category = [
    ...new Set(
      products && products.reduce((acc, cv) => [...acc, cv.category], [])
    ),
  ];
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.7)`;
  };

  return (
    <div className="w-[15%] h-full bg-zinc-100 p-5 flex flex-col items-center pt-5">
      <Link
        to="/create"
        className="border rounded border-blue-100"
      >
        <div className="text-blue-300 px-3 text-sm py-3 hover:scale-[1.12] duration-200">
          Add New Product
        </div>
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="w-[80%] text-xl mb-3">Category</h1>
      <div className="w-[90%] flex flex-col gap-2">
        {distinct_category.map((c, i) => (
          <Link to={`/?category=${c}`} className="" key={i}>
            <span
              style={{ backgroundColor: color() }}
              className="h-[7px] w-[7px] rounded-3xl inline-block mr-1 shadow-xl"
            ></span>
            {c}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
