import React, { useState } from "react";
import { BsPlusCircleFill, BsSearch } from "react-icons/bs";

import ModalAdd from "../ModalAdd";

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
  movies: Movie[];
  setMovies: any;
}

const Header: React.FC<Props> = ({ movies, setMovies }) => {
  const [search, setSearch] = useState("");
  const [classActive, setClassActive] = useState(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);

  function handleShowModal() {
    setModalAddOpen(true);
  }

  async function handleSearch() {
    if (search.trim()) {
      const response = await api.get(`/movies?title=${search}`);

      setMovies(response.data);
    }

    if (classActive && !search.trim()) {
      const response = await api.get("/movies");
      setMovies(response.data);

      return setClassActive(false);
    }

    setClassActive(true);
  }

  if (!classActive) {
    return (
      <>
        <ModalAdd
          modalAddOpen={modalAddOpen}
          setModalAddOpen={setModalAddOpen}
        />
        <header className="header-locaflix">
          <h1>LOCAFLIX</h1>

          <div>
            <button onClick={handleSearch}>
              <BsSearch size={25} color="#eeeeee" />
            </button>
            <button onClick={handleShowModal}>
              <BsPlusCircleFill size={25} color="#eeeeee" />
            </button>
          </div>
        </header>
      </>
    );
  }

  return (
    <header className="header-search">
      <input
        placeholder="Search here..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>
        <BsSearch size={25} color="#eeeeee" />
      </button>
    </header>
  );
};

export default Header;
