import React, { useState, useEffect } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";

import Header from "../../components/Header";
import ModalDescription from "../../components/ModalDescription";
import ModalEdit from "../../components/ModalEdit";

import api from "../../service/api";

import harrypotter from "../../assets/hp-chamber-of-secrets.jpg";
import "./styles.css";

interface Movie {
  id: number;
  title: string;
  sinopse: string;
  director: string;
  genres: string;
  languages: string;
  subtitles: string;
  release: number;
  reviews: number;
}

const MovieCatalog = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieDescription, setMovieDescription] = useState<Movie>({
    id: 0,
    title: "",
    sinopse: "",
    director: "",
    genres: "",
    languages: "",
    subtitles: "",
    release: 0,
    reviews: 0,
  });
  const [modalOpenDescription, setModalDescriptionOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("/movies");

      setMovies(response.data);
    }

    loadMovies();
  }, []);

  function handleOpenModalDescription(movie: Movie) {
    setModalDescriptionOpen(true);
    setMovieDescription(movie);
  }

  function handleOpenModalEdit(movie: Movie) {
    setModalEditOpen(true);
    setMovieDescription(movie);
  }

  async function handleDeleteMovie(movieID: number) {
    await api.delete(`/movies/${movieID}`);
    alert("Movie removed!");
  }

  return (
    <div>
      <Header movies={movies} setMovies={setMovies} />
      <ModalDescription
        modalDescriptionOpen={modalOpenDescription}
        setModalDescriptionOpen={setModalDescriptionOpen}
        movieDescription={movieDescription}
      />
      <ModalEdit
        modalEditOpen={modalEditOpen}
        setModalEditOpen={setModalEditOpen}
        movieDescription={movieDescription}
      />
      <main className="movie-catalog">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <button
                className="box-movie-catalog"
                onClick={() => handleOpenModalDescription(movie)}
              >
                <img src={harrypotter} alt="harry-potter" />

                <div className="box-movie-description">
                  <label>{movie.title}</label>
                  <p>{movie.sinopse}</p>
                </div>
              </button>

              <div className="box-movie-description-icons">
                <button onClick={() => handleDeleteMovie(movie.id)}>
                  <BsTrashFill
                    className="button-tmp"
                    size={24}
                    color="#eeeeee"
                  />
                </button>

                <button onClick={() => handleOpenModalEdit(movie)}>
                  <BsPencilSquare size={24} color="#eeeeee" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MovieCatalog;
