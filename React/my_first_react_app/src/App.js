import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const nueva =
  "https://api.rawg.io/api/games/${0}?key=${0b9ae65662514e61927fdd498013f3d6}";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   searchMovies("Batman");
  // }, []);
  /*
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  */

  const GAME_API_URL =
    "https://api.rawg.io/api/games?key=0b9ae65662514e61927fdd498013f3d6";
  /*
  fetch(`&search=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      // Aquí puedes trabajar con los datos recibidos
      console.log(data.results);
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });

    */

  const buscarJuego = async (title) => {
    const response = await fetch(`${GAME_API_URL}&search=${title}`);
    const data = await response.json();

    console.log(data.results);
    setMovies(data.results);
  };

  return (
    <div className="app">
      <h1>JUEGOSLand by Patricia</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => buscarJuego(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            // para evitar el error en la consola añadimos el key
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
