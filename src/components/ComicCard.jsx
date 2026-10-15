import { useContext } from "react";
import { ComicContext } from "../context/ComicContext";

function ComicCard({ comic }) {
  const {
    favourites,
    addToFavourite,
    removeFromFavourite,
  } = useContext(ComicContext);

  const isFavourite = favourites.some(
    (item) => item.id === comic.id
  );

  const handleFavourite = () => {
    if (isFavourite) {
      removeFromFavourite(comic.id);
    } else {
      addToFavourite(comic);
    }
  };

  return (
    <article className="comic-card">
      <div className="comic-cover">
        <img
          src={comic.image}
          alt={comic.title}
        />

        <button
          className={`heart-btn ${isFavourite ? "liked" : ""}`}
          onClick={handleFavourite}
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Add to favourites"
          }
        >
          {isFavourite ? "♥" : "♡"}
        </button>
      </div>

      <div className="comic-info">
        <div className="comic-top">
          <span className="genre-badge">
            {comic.genre}
          </span>

          <span className="comic-year">
            {comic.year}
          </span>
        </div>

        <h2>{comic.title}</h2>

        <p className="comic-author">
          By {comic.author}
        </p>

        <div className="comic-bottom">
          <span className="comic-rating">
            ★ {comic.rating}
          </span>

          <span className="comic-id">
            {comic.id}
          </span>
        </div>

        <button
          className={`favourite-btn ${
            isFavourite ? "active" : ""
          }`}
          onClick={handleFavourite}
        >
          {isFavourite
            ? "♥ Added to Favourite"
            : "♡ Add to Favourite"}
        </button>
      </div>
    </article>
  );
}

export default ComicCard;