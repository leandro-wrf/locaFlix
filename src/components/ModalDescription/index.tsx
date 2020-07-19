import React from "react";
import Modal from "react-modal";
import { BsStarFill } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import "./styles.css";

interface Props {
  modalDescriptionOpen: boolean;
  setModalDescriptionOpen: any;
}

const ModalDescription: React.FC<Props> = ({
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
    >
      <div className="modal-description-center">
        <h3>Harry Potter Chamber of Secrets</h3>
        <button onClick={handleCloseModal}>
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

        <label className="modal-description-data-label">Year 2002</label>
      </div>

      <div className="modal-description-links">
        <button>LocarFilme</button>

        <div className="modal-description-links-icons">
          <a href="https://google.com">
            <FaImdb size={32} color="#eeeeee" />
          </a>
          <span>8.9</span>
          <BsStarFill size={32} color="#ffff00" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalDescription;
