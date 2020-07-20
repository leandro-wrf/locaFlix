import React from "react";
import Modal from "react-modal";
import { BsStarFill } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

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
  modalDescriptionOpen: boolean;
  setModalDescriptionOpen: any;
}

const ModalDescription: React.FC<Props> = ({
  movieDescription,
  modalDescriptionOpen,
  setModalDescriptionOpen,
}) => {
  const customStyles = {
    content: {
      width: "320px",
      height: "600px",
      marginTop: "32px",
      marginBottom: "32px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "8px",
      outline: "none",
    },
  };

  function handleCloseModal() {
    setModalDescriptionOpen(false);
  }

  return (
    <Modal
      className="modal-description"
      overlayClassName="overlayModal"
      isOpen={modalDescriptionOpen}
      contentLabel="Description"
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="modal-description-center">
        <h3>{movieDescription.title}</h3>
        <button onClick={handleCloseModal}>
          <AiFillCloseCircle size={32} color="#eeeeee" />
        </button>
        <p>{movieDescription.sinopse}</p>
      </div>

      <div className="modal-description-director">
        <label>Director</label>
        <span>{movieDescription.director}</span>
      </div>

      <div className="modal-description-data">
        <div className="modal-description-data-genres">
          <label>Genres:</label>
          <span>{movieDescription.genres}</span>
        </div>

        <div className="modal-description-data-languages">
          <label>Languages:</label>
          <span>{movieDescription.languages}</span>
        </div>

        <div className="modal-description-data-subtitles">
          <label>Subtitles:</label>
          <span>{movieDescription.subtitles}</span>
        </div>

        <label className="modal-description-data-label">
          Year {movieDescription.release}
        </label>
      </div>

      <div className="modal-description-links">
        <button>LocarFilme</button>

        <div className="modal-description-links-icons">
          <a href="https://google.com">
            <FaImdb size={32} color="#eeeeee" />
          </a>
          <span>{movieDescription.reviews}</span>
          <BsStarFill size={32} color="#ffff00" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalDescription;
