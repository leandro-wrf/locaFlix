import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

import api from "../../service/api";

import "./styles.css";

interface Props {
  modalAddOpen: boolean;
  setModalAddOpen: any;
}

const ModalAdd: React.FC<Props> = ({ modalAddOpen, setModalAddOpen }) => {
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
    setModalAddOpen(false);
  }

  async function submitAddMovie() {
    const data = {
      id: 7,
      title,
      sinopse,
      director,
      genres,
      languages,
      subtitles,
      release,
      reviews: 0,
    };

    await api.post("/movies", data);

    setModalAddOpen(false);
  }

  return (
    <Modal
      className="modal-movie-add"
      overlayClassName="modal-overlay"
      style={customStyle}
      isOpen={modalAddOpen}
    >
      <h3>Add Movie</h3>
      <button onClick={handleCloseModal} className="modal-add-button-close">
        <AiFillCloseCircle size={32} color="#eeeeee" />
      </button>

      <form onSubmit={submitAddMovie} className="modal-movie-add-data">
        <input
          placeholder="URL://Image"
          type="text"
          value={urlImage}
          onChange={(e) => setUrlImage(e.target.value)}
        />
        <input
          placeholder="Title movie"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Sinopse"
          type="text"
          value={sinopse}
          onChange={(e) => setSinopse(e.target.value)}
        />
        <input
          placeholder="Director"
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          placeholder="Genres"
          type="text"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <input
          placeholder="Languages"
          type="text"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />
        <input
          placeholder="Subtitles"
          type="text"
          value={subtitles}
          onChange={(e) => setSubtitles(e.target.value)}
        />
        <input
          placeholder="Year Release"
          type="text"
          value={release}
          onChange={(e) => setRelease(e.target.value)}
        />

        <button type="submit">ADD</button>
      </form>
    </Modal>
  );
};

export default ModalAdd;
