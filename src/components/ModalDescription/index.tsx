import React from "react";
import Modal from "react-modal";
import { BsStarFill } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import { Movie } from "../../types/typesApplication";

import "./styles.css";

interface Props {
  movieDescription: Movie;
  modalDescriptionShow: boolean;
  setModalDescriptionShow: any;
}

const ModalDescription: React.FC<Props> = ({
  movieDescription,
  modalDescriptionShow,
  setModalDescriptionShow,
}) => {
  const customStyleModalDescription = {
    content: {
      width: "320px",
      height: "100%",
      marginTop: "32px",
      paddingBottom: "32px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "8px",
      outline: "none",
    },
  };

  function handleCloseModal() {
    setModalDescriptionShow(false);
  }

  return (
    <Modal
      className="modal-description"
      overlayClassName="overlayModal"
      isOpen={modalDescriptionShow}
      contentLabel="Description"
      style={customStyleModalDescription}
      ariaHideApp={false}
    >
      <div className="modal-description-center">
        <h3>{movieDescription.title}</h3>
        <button onClick={handleCloseModal}>
          <AiFillCloseCircle size={32} color="#eeeeee" />
        </button>
        <p>{movieDescription.description}</p>
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
          <a href={movieDescription.urlImdb}>
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
