import img from "./logo-ico.ico"
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={img} alt="logo-alba" width={80} />
      </Link>
      <h1>Alba Crochet</h1>
      <h2>Prendas tejidas a crochet, a mano y con amor</h2>
    </div>
  );
};

export default Header;
