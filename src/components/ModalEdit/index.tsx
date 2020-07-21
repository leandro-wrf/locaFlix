import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

import { Movie } from "../../types/typesApplication";

import api from "../../service/api";

import "./styles.css";

interface Props {
  movieDescription: Movie;
  modalEditShow: boolean;
  setModalEditShow: any;
}

const ModalEdit: React.FC<Props> = ({
  modalEditShow,
  setModalEditShow,
  movieDescription,
}) => {
  const [urlImage, setUrlImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [genres, setGenres] = useState("");
  const [languages, setLanguages] = useState("");
  const [subtitles, setSubtitles] = useState("");
  const [urlImdb, setUrlImdb] = useState("");
  const [release, setRelease] = useState("");

  const customStyleModalEdit = {
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
    setModalEditShow(false);
  }

  async function handleEditMovie() {
    const data = {
      urlImage: urlImage === "" ? movieDescription.urlImage : urlImage,
      title: title === "" ? movieDescription.title : title,
      description:
        description === "" ? movieDescription.description : description,
      director: director === "" ? movieDescription.director : director,
      genres: genres === "" ? movieDescription.genres : genres,
      languages: languages === "" ? movieDescription.languages : languages,
      subtitles: subtitles === "" ? movieDescription.subtitles : subtitles,
      urlImdb: urlImdb === "" ? movieDescription.urlImdb : urlImdb,
      release: release === "" ? movieDescription.release : release,
      reviews: movieDescription.reviews,
    };

    await api.put(`/movies/${movieDescription.id}`, data);

    setModalEditShow(false);
  }

  return (
    <Modal
      className="modal-movie-edit"
      overlayClassName="modal-edit-overlay"
      style={customStyleModalEdit}
      isOpen={modalEditShow}
      ariaHideApp={false}
    >
      <h3>Edit Movie</h3>
      <button onClick={handleCloseModal} className="modal-edit-button-close">
        <AiFillCloseCircle size={32} color="#eeeeee" />
      </button>

      <form onSubmit={handleEditMovie} className="modal-movie-edit-data">
        <input
          placeholder={movieDescription.urlImage}
          type="text"
          value={urlImage}
          onChange={(e) => setUrlImage(e.target.value)}
        />
        <input
          placeholder={movieDescription.title}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value.toLowerCase())}
        />
        <input
          placeholder={movieDescription.description}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value.toLowerCase())}
        />
        <input
          placeholder={movieDescription.director}
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value.toLowerCase())}
        />
        <input
          placeholder={movieDescription.genres}
          type="text"
          value={genres}
          onChange={(e) => setGenres(e.target.value.toLowerCase())}
        />
        <input
          placeholder={movieDescription.languages}
          type="text"
          value={languages}
          onChange={(e) => setLanguages(e.target.value.toLowerCase())}
        />
        <input
          placeholder={movieDescription.subtitles}
          type="text"
          value={subtitles}
          onChange={(e) => setSubtitles(e.target.value.toLowerCase())}
        />
        <input
          placeholder={movieDescription.urlImdb}
          type="text"
          value={urlImdb}
          onChange={(e) => setUrlImdb(e.target.value)}
        />
        <input
          placeholder={movieDescription.release}
          type="text"
          value={release}
          onChange={(e) => setRelease(e.target.value.toLowerCase())}
        />

        <button type="submit">UPDATE</button>
      </form>
    </Modal>
  );
};

export default ModalEdit;
