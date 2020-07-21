import React, { useState } from "react";
import { BsPlusCircleFill, BsSearch } from "react-icons/bs";

import { Movie } from "../../types/typesApplication";

import ModalAdd from "../ModalAdd";

import api from "../../service/api";

import "./styles.css";

interface Props {
  movies: Movie[];
  setMovies: any;
}

const Header: React.FC<Props> = ({ movies, setMovies }) => {
  const [search, setSearch] = useState("");
  const [componentActive, setComponentActive] = useState(false);
  const [modalAddShow, setModalAddShow] = useState(false);

  function handleModalShow() {
    setModalAddShow(true);
  }

  async function handleSearch() {
    if (search.trim()) {
      const response = await api.get("/movies");
      const newSearch = search.toLowerCase();

      const newResponse = response.data.filter((movie: Movie):
        | Movie
        | undefined => {
        if (!movie.title.indexOf(newSearch)) {
          return {
            ...movie,
          };
        }

        setSearch("");
        return undefined;
      });

      setMovies(newResponse);
    }

    if (componentActive && !search.trim()) {
      const response = await api.get("/movies");
      setMovies(response.data);

      return setComponentActive(false);
    }

    setComponentActive(true);
  }

  if (!componentActive) {
    return (
      <>
        <ModalAdd
          modalAddShow={modalAddShow}
          setModalAddShow={setModalAddShow}
        />
        <header className="header-locaflix">
          <h1>LOCAFLIX</h1>

          <div>
            <button onClick={handleSearch}>
              <BsSearch size={25} color="#eeeeee" />
            </button>
            <button onClick={handleModalShow}>
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
