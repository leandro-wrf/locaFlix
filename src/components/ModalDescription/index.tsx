import React from "react";
import Modal from "react-modal";
import { BsStarFill } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import "./styles.css";

interface Props {
  modalOpen: boolean;
}

const ModalDescription: React.FC<Props> = ({ modalOpen }) => {
  const customStyles = {
    content: {
      width: "320px",
      height: "600px",
      marginTop: "32px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "8px",
      outline: "none",
    },
  };

  return (
    <Modal
      className="modal-description"
      overlayClassName="overlayModal"
      isOpen={modalOpen}
      contentLabel="Description"
      style={customStyles}
    >
      <div className="modal-description-center">
        <h3>Harry Potter Chamber of Secrets</h3>
        <button>
          <AiFillCloseCircle size={32} color="#eeeeee" />
        </button>
        <p>
          Isto contém uma leve descrição do filme. Apenas para fim de testes,
          espero que consiga pelo menos umas três linhas.
        </p>
      </div>

      <div className="modal-description-director">
        <label>Director</label>
        <span>Chirs Watts</span>
      </div>

      <div className="modal-description-data">
        <div className="modal-description-data-genres">
          <label>Genres:</label>
          <ul>
            <li>Adventure</li>
            <li>Family</li>
            <li>Fantasy</li>
          </ul>
        </div>

        <div className="modal-description-data-languages">
          <label>Languages:</label>
          <ul>
            <li>Portuguese</li>
            <li>English</li>
          </ul>
        </div>

        <div className="modal-description-data-subtitles">
          <label>Subtitles:</label>
          <ul>
            <li>Portuguese</li>
            <li>English</li>
          </ul>
        </div>
      </div>

      <div className="modal-description-links">
        <button>LocarFilme</button>

        <div className="modal-description-links-icons">
          <FaImdb className="button-tmp" size={24} color="#eeeeee" />
          <span>8.9</span>
          <BsStarFill size={24} color="#eeeeee" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalDescription;
