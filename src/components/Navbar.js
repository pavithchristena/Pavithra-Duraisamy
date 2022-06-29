import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar">
        <div className="navlinks">
          <div className="left">
            <Link to="/home">product</Link>
          </div>
          <div className="right">
            <Link to="/cart">Cart</Link>{" "}
          </div>
          <div className="right">
            <Link to="/Login">Logout</Link>{" "}
          </div>

          <span className="cartCount">Cart items: {items.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
