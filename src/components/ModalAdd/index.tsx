import React from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

import "./styles.css";

interface Props {
  modalAddOpen: boolean;
  setModalAddOpen: any;
}

const ModalAdd: React.FC<Props> = ({ modalAddOpen, setModalAddOpen }) => {
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

  function handleAddMovie() {
    /// .... code

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

      <form className="modal-movie-add-data">
        <input placeholder="URL://Image" type="text" />
        <input placeholder="Title movie" type="text" />
        <input placeholder="Sinopse" type="text" />
        <input placeholder="Director" type="text" />
        <input placeholder="Genres" type="text" />
        <input placeholder="Languages" type="text" />
        <input placeholder="Subtitles" type="text" />
        <input placeholder="Year Release" type="text" />

        <button onClick={handleCloseModal}>ADD</button>
      </form>
    </Modal>
  );
};

export default ModalAdd;
