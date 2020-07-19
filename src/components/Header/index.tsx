import React from "react";
import { BsPlusCircleFill, BsSearch } from "react-icons/bs";

import "./styles.css";

const Header = () => {
  return (
    <header className="header-locaflix">
      <h1>LOCAFLIX</h1>

      <div>
        <BsSearch className="button-tmp" size={25} color="#eeeeee" />
        <BsPlusCircleFill size={25} color="#eeeeee" />
      </div>
    </header>
  );
};

export default Header;
