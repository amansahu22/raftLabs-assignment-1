import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 w-full mx-auto bg-[#111211] text-white font-bold text-lg flex justify-center space-x-20">
      <Link to="/add-relation" className="hover:text-[#cfcfcf]">
        Add Relation
      </Link>
      <Link to="/find-relation" className="hover:text-[#cfcfcf]">
        Find Relation
      </Link>
    </div>
  );
};

export default Navbar;
