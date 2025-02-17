import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img
            onClick={() => navigate("/")}
            className="mb-5 w-40 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            <em>
              Empowering productivity through seamless coworking space bookings.
            </em>
            &zwnj; At WorkPoint, we believe that finding the perfect workspace
            should be easy and hassle-free. Our platform connects professionals,
            startups, and freelancers with top coworking spaces around the
            world. Whether you need a private office, a shared desk, or a
            meeting room, we’ve got you covered.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="uppercase text-xl font-medium mb-5 text-gray-600">
            company
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="uppercase text-xl font-medium mb-5 text-gray-600">
            get in touch
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+7-777-777-7777</li>
            <li>damelya@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
