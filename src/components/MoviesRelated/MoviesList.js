import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import AddMovieForm from "./AddMovieForm";
import { EatLoading } from 'react-loadingg';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://moviesapi2021.herokuapp.com/movies")
      .then((response) => {
        // Obtenemos los datos
        //console.log(response.data.movies);
        setMovies(response.data.movies);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log(e);
      });
  }, []);
  return (
    <>
      <button
        type="button"
        className="btn btn-success mt-3 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Agregar Nueva Pelicula
      </button>
      {movies.length === 0 || null ? (
        <EatLoading />
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </tbody>
        </table>
      )}
      {/**Add Movie Modal */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Agregar Nueva Pelicula
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                <AddMovieForm/>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
