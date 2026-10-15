import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Comics from "./pages/Comics";
import Favourites from "./pages/Favourites";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <header className="hero">
        <p className="logo">📚 COMICVAULT</p>

        <h1>Discover Your Next Comic</h1>

        <p>
          Explore iconic stories and build your favourite collection.
        </p>
      </header>

      <Routes>

        <Route
          path="/"
          element={<Comics />}
        />

        <Route
          path="/favourites"
          element={<Favourites />}
        />

      </Routes>

    </div>
  );
}

export default App;