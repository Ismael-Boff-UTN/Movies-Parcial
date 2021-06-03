import React, { useState, useEffect } from "react";
import axios from "axios";
import Genre from "./Genre";
import { JumpCircleLoading } from "react-loadingg";
const GenresList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("https://moviesapi2021.herokuapp.com/genres")
      .then((response) => {
        // Obtenemos los datos

        setGenres(response.data.genres);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log(e);
      });
  }, []);

  return (
    <div>
      {genres.length === 0 || null ? (
        <JumpCircleLoading />
      ) : (
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Ver</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre) => (
              <Genre key={genre.id} genre={genre} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GenresList;
