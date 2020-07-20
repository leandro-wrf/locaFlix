import React from "react";
import { useMediaQuery } from "react-responsive";

import MovieCatalogMobile from "./pages/MovieCatalogMobile";
import MovieCatalogDesktop from "./pages/MovieCatalogDesktop";

function App() {
  const isDesktop = useMediaQuery({
    query: "(max-device-width: 1447px)",
  });

  const isMobile = useMediaQuery({
    query: "(orientation: portrait)",
  });

  if (isMobile) {
    return (
      <div className="app">
        <MovieCatalogMobile />
      </div>
    );
  }

  return (
    <div className="app">
      <MovieCatalogDesktop />
    </div>
  );
}

export default App;
