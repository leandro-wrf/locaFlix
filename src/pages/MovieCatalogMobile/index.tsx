import React, { useState, useEffect } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";

import { Movie } from "../../types/typesApplication";

import Header from "../../components/Header";
import ModalDescription from "../../components/ModalDescription";
import ModalEdit from "../../components/ModalEdit";

import api from "../../service/api";

import "./styles.css";

const MovieCatalogMobile = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modalDescriptionShow, setModalDescriptionShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);

  const [movieDescription, setMovieDescription] = useState<Movie>({
    id: 0,
    urlImage: "",
    title: "",
    description: "",
    director: "",
    genres: "",
    languages: "",
    subtitles: "",
    urlImdb: "",
    release: "",
    reviews: "",
  });

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("/movies");

      setMovies(response.data);
    }

    loadMovies();
  }, []);

  function setDescriptionToModals(movie: Movie) {
    setMovieDescription(movie);
  }

  function handleModalDescriptionShow(movie: Movie) {
    setDescriptionToModals(movie);

    setModalDescriptionShow(true);
  }

  function handleModalEditShow(movie: Movie) {
    setDescriptionToModals(movie);

    setModalEditShow(true);
  }

  async function handleDeleteMovie(movieID: number) {
    await api.delete(`/movies/${movieID}`);

    const response = await api.get("/movies");
    setMovies(response.data);

    alert("Movie removed!");
  }

  return (
    <>
      <Header movies={movies} setMovies={setMovies} />
      <ModalDescription
        modalDescriptionShow={modalDescriptionShow}
        setModalDescriptionShow={setModalDescriptionShow}
        movieDescription={movieDescription}
      />
      <ModalEdit
        modalEditShow={modalEditShow}
        setModalEditShow={setModalEditShow}
        movieDescription={movieDescription}
      />

      <main className="movie-catalog-mobile">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <button
                className="box-movie-catalog-mobile"
                onClick={() => handleModalDescriptionShow(movie)}
              >
                <img src={movie.urlImage} alt={movie.title} />

                <div className="box-movie-description-mobile">
                  <label>{movie.title}</label>
                  <p>{movie.description}</p>
                </div>
              </button>

              <div className="box-movie-description-icons-mobile">
                <button onClick={() => handleDeleteMovie(movie.id)}>
                  <BsTrashFill size={24} color="#eeeeee" />
                </button>

                <button onClick={() => handleModalEditShow(movie)}>
                  <BsPencilSquare size={24} color="#eeeeee" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default MovieCatalogMobile;
