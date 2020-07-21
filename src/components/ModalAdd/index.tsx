import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

import api from "../../service/api";

import "./styles.css";

interface Props {
  modalAddShow: boolean;
  setModalAddShow: any;
}

const ModalAdd: React.FC<Props> = ({ modalAddShow, setModalAddShow }) => {
  const [urlImage, setUrlImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [genres, setGenres] = useState("");
  const [languages, setLanguages] = useState("");
  const [subtitles, setSubtitles] = useState("");
  const [urlImdb, setUrlImdb] = useState("");
  const [release, setRelease] = useState("");
  const [reviews, setReviews] = useState("");

  const customStyleModalAdd = {
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
    setModalAddShow(false);
  }

  async function submitAddMovie() {
    const data = {
      id: 7,
      urlImage,
      title,
      description,
      director,
      genres,
      languages,
      subtitles,
      urlImdb,
      release,
      reviews,
    };

    await api.post("/movies", data);

    setModalAddShow(false);
  }

  return (
    <Modal
      className="modal-movie-add"
      overlayClassName="modal-overlay"
      style={customStyleModalAdd}
      isOpen={modalAddShow}
      ariaHideApp={false}
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
          onChange={(e) => setTitle(e.target.value.toLowerCase())}
        />
        <input
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value.toLowerCase())}
        />
        <input
          placeholder="Director"
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value.toLowerCase())}
        />
        <input
          placeholder="Genres"
          type="text"
          value={genres}
          onChange={(e) => setGenres(e.target.value.toLowerCase())}
        />
        <input
          placeholder="Languages"
          type="text"
          value={languages}
          onChange={(e) => setLanguages(e.target.value.toLowerCase())}
        />
        <input
          placeholder="Subtitles"
          type="text"
          value={subtitles}
          onChange={(e) => setSubtitles(e.target.value.toLowerCase())}
        />
        <input
          placeholder="URL IMDB"
          type="text"
          value={urlImdb}
          onChange={(e) => setUrlImdb(e.target.value)}
        />
        <input
          placeholder="Year Release"
          type="text"
          value={release}
          onChange={(e) => setRelease(e.target.value.toLowerCase())}
        />
        <input
          placeholder="Reviews"
          type="text"
          value={reviews}
          onChange={(e) => setReviews(e.target.value.toLowerCase())}
        />

        <button type="submit">ADD</button>
      </form>
    </Modal>
  );
};

export default ModalAdd;
