import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Coworkings = () => {
  const { type } = useParams();
  const [filterCoworking, setFilterCoworking] = useState([]);
  const { coworkingSpaces } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (type) {
      setFilterCoworking(
        coworkingSpaces.filter((cowork) => cowork.type === type)
      );
    } else {
      setFilterCoworking(coworkingSpaces);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [coworkingSpaces, type]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              type === "Private Office"
                ? navigate("/coworkings")
                : navigate("/coworkings/Private Office")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              type === "Private Office" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Private Office
          </p>
          <p
            onClick={() =>
              type === "Shared Desk"
                ? navigate("/coworkings")
                : navigate("/coworkings/Shared Desk")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              type === "Shared Desk" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Shared Desk
          </p>
          <p
            onClick={() =>
              type === "Meeting Room"
                ? navigate("/coworkings")
                : navigate("/coworkings/Meeting Room")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              type === "Meeting Room" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Meeting Room
          </p>
          <p
            onClick={() =>
              type === "For Women"
                ? navigate("/coworkings")
                : navigate("/coworkings/For Women")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              type === "For Women" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            For Women
          </p>
          <p
            onClick={() =>
              type === "Open Lounge"
                ? navigate("/coworkings")
                : navigate("/coworkings/Open Lounge")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              type === "Open Lounge" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Open Lounge
          </p>
          <p
            onClick={() =>
              type === "Podcast Studio"
                ? navigate("/coworkings")
                : navigate("/coworkings/Podcast Studio")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              type === "Podcast Studio" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Podcast/Recording Studio
          </p>
        </div>
        <div
          className="w-full grid gap-4 gap-y-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {filterCoworking?.length > 0 ? (
            filterCoworking.map((item, index) => (
              <div
                onClick={() => navigate(`/coworking/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <img className="bg-blue-50" src={item.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm">{item.type}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No coworking spaces available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coworkings;
