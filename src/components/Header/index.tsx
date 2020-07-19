import React, { useState } from "react";
import { BsPlusCircleFill, BsSearch } from "react-icons/bs";

import "./styles.css";

const Header = () => {
  const [classActive, setClassActive] = useState(true);

  function handleStyle() {
    if (!classActive) {
      return setClassActive(true);
    }

    setClassActive(false);
  }

  if (classActive) {
    return (
      <header className="header-locaflix">
        <h1>LOCAFLIX</h1>

        <div>
          <button onClick={handleStyle}>
            <BsSearch size={25} color="#eeeeee" />
          </button>
          <BsPlusCircleFill size={25} color="#eeeeee" />
        </div>
      </header>
    );
  }

  return (
    <header className="header-search">
      <input placeholder="Search here..." type="text" />

      <button onClick={handleStyle}>
        <BsSearch size={25} color="#eeeeee" />
      </button>
    </header>
  );
};

export default Header;
