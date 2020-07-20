import React, { useState } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";

import Header from "../../components/Header";
import ModalDescription from "../../components/ModalDescription";
import ModalEdit from "../../components/ModalEdit";

import harrypotter from "../../assets/hp-chamber-of-secrets.jpg";
import "./styles.css";

const MovieCatalog = () => {
  const [modalOpenDescription, setModalDescriptionOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  function handleOpenModalDescription() {
    setModalDescriptionOpen(true);
  }

  function handleOpenModalEdit() {
    setModalEditOpen(true);
  }

  function handleDeleteMovie() {
    alert("Movie removed!");
  }

  return (
    <div>
      <Header />
      <ModalDescription
        modalDescriptionOpen={modalOpenDescription}
        setModalDescriptionOpen={setModalDescriptionOpen}
      />
      <ModalEdit
        modalEditOpen={modalEditOpen}
        setModalEditOpen={setModalEditOpen}
      />
      <main className="movie-catalog">
        <ul>
          <li>
            <button
              className="box-movie-catalog"
              onClick={handleOpenModalDescription}
            >
              <img src={harrypotter} alt="harry-potter" />

              <div className="box-movie-description">
                <label>Harry Potter Chamber of Secrets</label>
                <p>
                  Isto contém uma leve descrição do filme. Apenas para fim de
                  testes, espero que consiga pelo menos umas três linhas.
                </p>
              </div>
            </button>

            <div className="box-movie-description-icons">
              <button onClick={handleDeleteMovie}>
                <BsTrashFill className="button-tmp" size={24} color="#eeeeee" />
              </button>

              <button onClick={handleOpenModalEdit}>
                <BsPencilSquare size={24} color="#eeeeee" />
              </button>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default MovieCatalog;
