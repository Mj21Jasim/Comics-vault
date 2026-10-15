import { useState } from "react";

import comics from "../data/comics";
import ComicCard from "../components/ComicCard";

function Comics() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = [
    "All",
    ...new Set(comics.map((comic) => comic.genre)),
  ];

  const filteredComics = comics.filter((comic) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      comic.title.toLowerCase().includes(search) ||
      comic.author.toLowerCase().includes(search) ||
      comic.genre.toLowerCase().includes(search);

    const matchesGenre =
      selectedGenre === "All" ||
      comic.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <main className="comic-section">

      <div className="section-heading">

        <div>
          <h2>Comic Collection</h2>

          <div className="collection-description">
            <p>
              Explore our collection of legendary comics.
            </p>

            <span className="results-count">
              {filteredComics.length}{" "}
              {filteredComics.length === 1
                ? "comic"
                : "comics"}{" "}
              found
            </span>
          </div>
        </div>

        <div className="collection-controls">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search comics..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />
          </div>

          <select
            className="genre-filter"
            value={selectedGenre}
            onChange={(event) =>
              setSelectedGenre(event.target.value)
            }
          >
            {genres.map((genre) => (
              <option
                key={genre}
                value={genre}
              >
                {genre === "All"
                  ? "All Genres"
                  : genre}
              </option>
            ))}
          </select>

        </div>

      </div>

      {filteredComics.length > 0 ? (

        <div className="comic-grid">

          {filteredComics.map((comic) => (
            <ComicCard
              key={comic.id}
              comic={comic}
            />
          ))}

        </div>

      ) : (

        <div className="empty-favourites">

          <div className="empty-icon">
            🔎
          </div>

          <h3>No comics found</h3>

          <p>
            Try changing your search or genre filter.
          </p>

        </div>

      )}

    </main>
  );
}

export default Comics;