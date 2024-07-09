import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Main = ({ filter }) => {
  // const list = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  // ];
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.11)`;
  };

  return filter ? (
    <div className="w-[85%] h-full p-[3%] flex flex-wrap gap-2 overflow-y-auto">
      {filter &&
        filter.map((p, i) => {
          return (
            <Link
              to={`/details/${p.id}`}
              key={i}
              className="card mt-[6%] py-2 px-4 shadow rounded w-[19%] max-h-[100vh] flex flex-col items-center gap-7 leading-1"
            >
              <div className="max-h-[58vh] hover:scale-[1.15] duration-300">
                <img
                  src={p.image}
                  className=" w-[150px] h-[150px] object-contain"
                />
              </div>
              <h1
                style={{ backgroundColor: color() }}
                className="hover:text-blue-400 rounded-xl"
              >
                {p.title}
              </h1>
            </Link>
          );
        })}
    </div>
  ) : (
    <Loading />
  );
};

export default Main;
