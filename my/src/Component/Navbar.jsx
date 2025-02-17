import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-3">
          <Link to="/Login" className="text-white hover:text-blue-600">
            Profile
          </Link>
          <Link to="/home" className="text-white p-2 hover:text-blue-700">
            Home
          </Link>
          <Link to="/Signup" className="text-white p-2 hover:text-blue-700">
            SignUp
          </Link>
          <Link to="/Login" className="text-white p-2 hover:text-blue-700">
            Login
          </Link>
          <Link to="/productCard" className="text-white p-2 hover:text-blue-700">
            Product Card
          </Link>
          <Link to="/productform" className="text-white p-2 hover:text-blue-700">
            Product Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;  // Default export, no Router needed
