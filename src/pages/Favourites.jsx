import { useContext } from "react";
import { Link } from "react-router-dom";

import { ComicContext } from "../context/ComicContext";
import ComicCard from "../components/ComicCard";

function Favourites() {
  const { favourites } = useContext(ComicContext);

  return (
    <main className="favourites-page">
      <div className="section-heading">
        <h2>♥ Favourite Comics</h2>

        <p>
          Your personal collection of favourite comics.
        </p>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-favourites">
          <div className="empty-icon">♡</div>

          <h3>Your shelf is empty</h3>

          <p>No favourite comics added yet.</p>

          <Link to="/" className="explore-btn">
            Explore Comics →
          </Link>
        </div>
      ) : (
        <div className="comic-grid">
          {favourites.map((comic) => (
            <ComicCard
              key={comic.id}
              comic={comic}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favourites;