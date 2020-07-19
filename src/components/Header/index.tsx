import React, { useState } from "react";
import { BsPlusCircleFill, BsSearch } from "react-icons/bs";

import ModalAdd from "../ModalAdd";

import "./styles.css";

const Header = () => {
  const [classActive, setClassActive] = useState(true);
  const [modalAddOpen, setModalAddOpen] = useState(false);

  function handleShowModal() {
    setModalAddOpen(true);
  }

  function handleStyle() {
    if (!classActive) {
      return setClassActive(true);
    }

    setClassActive(false);
  }

  if (classActive) {
    return (
      <>
        <ModalAdd
          modalAddOpen={modalAddOpen}
          setModalAddOpen={setModalAddOpen}
        />
        <header className="header-locaflix">
          <h1>LOCAFLIX</h1>

          <div>
            <button onClick={handleStyle}>
              <BsSearch size={25} color="#eeeeee" />
            </button>
            <button onClick={handleShowModal}>
              <BsPlusCircleFill size={25} color="#eeeeee" />
            </button>
          </div>
        </header>
      </>
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
