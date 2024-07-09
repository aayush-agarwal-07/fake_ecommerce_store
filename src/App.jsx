import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Create from "./components/Create";
import Details from "./components/Details";
import Home from "./components/Home";
import Edit from "./components/Edit";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <>
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[18%] top-[7%] bg-blue-100 h-[57px] w-[57px] inline-block rounded-full font-medium pt-4 pl-[5px]">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default App;
