import React from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

import "./styles.css";

interface Props {
  modalEditOpen: boolean;
  setModalEditOpen: any;
}

const ModalEdit: React.FC<Props> = ({ modalEditOpen, setModalEditOpen }) => {
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

  function handleEditMovie() {
    /// .... code

    setModalEditOpen(false);
  }

  return (
    <Modal
      className="modal-movie-edit"
      overlayClassName="modal-edit-overlay"
      style={customStyle}
      isOpen={modalEditOpen}
    >
      <h3>Edit Movie</h3>
      <button onClick={handleCloseModal} className="modal-edit-button-close">
        <AiFillCloseCircle size={32} color="#eeeeee" />
      </button>

      <form className="modal-movie-edit-data">
        <input placeholder="URL://Image" type="text" />
        <input placeholder="Title movie" type="text" />
        <input placeholder="Sinopse" type="text" />
        <input placeholder="Director" type="text" />
        <input placeholder="Genres" type="text" />
        <input placeholder="Languages" type="text" />
        <input placeholder="Subtitles" type="text" />
        <input placeholder="Year Release" type="text" />

        <button onClick={handleCloseModal}>UPDATE</button>
      </form>
    </Modal>
  );
};

export default ModalEdit;
