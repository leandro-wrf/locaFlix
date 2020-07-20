import React, { useState, SetStateAction } from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

import api from "../../service/api";

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

interface Props {
  movieDescription: Movie;
  modalEditOpen: boolean;
  setModalEditOpen: any;
}

const ModalEdit: React.FC<Props> = ({
  modalEditOpen,
  setModalEditOpen,
  movieDescription,
}) => {
  const [urlImage, setUrlImage] = useState("");
  const [title, setTitle] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [director, setDirector] = useState("");
  const [genres, setGenres] = useState("");
  const [languages, setLanguages] = useState("");
  const [subtitles, setSubtitles] = useState("");
  const [release, setRelease] = useState("");

  const customStyle = {
    content: {
      width: "320px",
      marginTop: "32px",
      marginBottom: "32px",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "4px",
    },
  };

  function handleCloseModal() {
    setModalEditOpen(false);
  }

  async function handleEditMovie() {
    const data = {
      title: title === "" ? movieDescription.title : title,
      sinopse: sinopse === "" ? movieDescription.sinopse : sinopse,
      director: director === "" ? movieDescription.director : director,
      genres: genres === "" ? movieDescription.genres : genres,
      languages: languages === "" ? movieDescription.languages : languages,
      subtitles: subtitles === "" ? movieDescription.subtitles : subtitles,
      release: release === "" ? movieDescription.release : release,
      reviews: movieDescription.reviews,
    };

    await api.put(`/movies/${movieDescription.id}`, data);

    setModalEditOpen(false);
  }

  return (
    <Modal
      className="modal-movie-edit"
      overlayClassName="modal-edit-overlay"
      style={customStyle}
      isOpen={modalEditOpen}
      ariaHideApp={false}
    >
      <h3>Edit Movie</h3>
      <button onClick={handleCloseModal} className="modal-edit-button-close">
        <AiFillCloseCircle size={32} color="#eeeeee" />
      </button>

      <form onSubmit={handleEditMovie} className="modal-movie-edit-data">
        <input
          placeholder={movieDescription.title}
          type="text"
          value={urlImage}
          onChange={(e) => setUrlImage(e.target.value)}
        />
        <input
          placeholder={movieDescription.title}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder={movieDescription.sinopse}
          type="text"
          value={sinopse}
          onChange={(e) => setSinopse(e.target.value)}
        />
        <input
          placeholder={movieDescription.director}
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          placeholder={movieDescription.genres}
          type="text"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <input
          placeholder={movieDescription.languages}
          type="text"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />
        <input
          placeholder={movieDescription.subtitles}
          type="text"
          value={subtitles}
          onChange={(e) => setSubtitles(e.target.value)}
        />
        <input
          placeholder={String(movieDescription.release)}
          type="text"
          value={release}
          onChange={(e) => setRelease(e.target.value)}
        />

        <button>UPDATE</button>
      </form>
    </Modal>
  );
};

export default ModalEdit;
