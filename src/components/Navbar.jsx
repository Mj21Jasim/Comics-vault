import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { ComicContext } from "../context/ComicContext";

function Navbar() {
  const { favourites } = useContext(ComicContext);
  const location = useLocation();

  const isComicsPage = location.pathname === "/";
  const isFavouritesPage = location.pathname === "/favourites";

  return (
    <nav className="navbar">

      <Link to="/" className="brand">
        📚 COMICVAULT
      </Link>

      <div className="nav-links">

        <Link
          to="/"
          className={isComicsPage ? "active" : ""}
        >
          Comics
        </Link>

        <Link
          to="/favourites"
          className={isFavouritesPage ? "active" : ""}
        >
          ♥ Favourites

          <span className="favourite-count">
            {favourites.length}
          </span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;