import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/add-relation">Add Relation</Link>
      <Link to="/find-relation">Find Relation</Link>
    </div>
  );
};

export default Navbar;
