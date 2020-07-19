import React from "react";
import { BsTrash, BsPencil } from "react-icons/bs";

import Header from "../../components/Header";

import harrypotter from "../../assets/hp-chamber-of-secrets.jpg";
import "./styles.css";

const MovieCatalog = () => {
  return (
    <div>
      <Header />
      <main className="movie-catalog">
        <ul>
          <li className="box-movie-catalog">
            <img src={harrypotter} alt="harry-potter" />

            <div className="box-movie-description">
              <label>Harry Potter Chamber of Secrets</label>
              <p>
                Isto contém uma leve descrição do filme. Apenas para fim de
                testes, espero que consiga pelo menos umas três linhas.
              </p>

              <div className="box-movie-description-icons">
                <BsTrash className="button-tmp" size={20} color="#eeeeee" />
                <BsPencil size={20} color="#eeeeee" />
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default MovieCatalog;
