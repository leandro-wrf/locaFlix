import React, { useState } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";

import Header from "../../components/Header";
import ModalDescription from "../../components/ModalDescription";

import harrypotter from "../../assets/hp-chamber-of-secrets.jpg";
import "./styles.css";

const MovieCatalog = () => {
  const [modalOpenDescription, setModalDescriptionOpen] = useState(false);

  function handleOpenModalDescription() {
    setModalDescriptionOpen(true);
  }

  function handleOpenModalEdit() {
    // code...
  }

  function handleDeleteMovie() {
    // code...
  }

  return (
    <div>
      <Header />
      <ModalDescription
        modalDescriptionOpen={modalOpenDescription}
        setModalDescriptionOpen={setModalDescriptionOpen}
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

                <div className="box-movie-description-icons">
                  <button onClick={handleDeleteMovie}>
                    <BsTrash className="button-tmp" size={20} color="#eeeeee" />
                  </button>

                  <button onClick={handleOpenModalEdit}>
                    <BsPencil size={20} color="#eeeeee" />
                  </button>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default MovieCatalog;
