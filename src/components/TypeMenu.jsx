import React from "react";
import { typeData } from "../assets/assets";
import { Link } from "react-router-dom";

const TypeMenu = () => {
  return (
    <div
      id="type"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className="text-3xl font-medium">Find the Perfect Workspace</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Explore a variety of coworking spaces tailored to your needs.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {typeData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/coworkings/${item.type}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TypeMenu;
