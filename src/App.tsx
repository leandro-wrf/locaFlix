import React from "react";
import { useMediaQuery } from "react-responsive";

import MovieCatalogMobile from "./pages/MovieCatalogMobile";
import MovieCatalogDesktop from "./pages/MovieCatalogDesktop";

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(orientation: portrait)",
  });

  return (
    <div className="app">
      {isDesktop && <MovieCatalogMobile />}
      {isMobile && <MovieCatalogDesktop />}
    </div>
  );
}

export default App;
