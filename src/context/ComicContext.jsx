import { createContext, useState } from "react";

export const ComicContext = createContext();

function ComicProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (comic) => {
    setFavourites((currentFavourites) => {
      const alreadyFavourite = currentFavourites.some(
        (item) => item.id === comic.id
      );

      if (alreadyFavourite) {
        return currentFavourites;
      }

      return [...currentFavourites, comic];
    });
  };

  const removeFromFavourite = (comicId) => {
    setFavourites((currentFavourites) =>
      currentFavourites.filter(
        (comic) => comic.id !== comicId
      )
    );
  };

  return (
    <ComicContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
}

export default ComicProvider;