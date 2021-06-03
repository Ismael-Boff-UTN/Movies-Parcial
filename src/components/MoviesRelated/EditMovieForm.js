import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import moment from 'moment';
const EditMovieForm = ({ movie }) => {
  const [editedMovie, setEditedMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreName, setGenreName] = useState([]);

  //Obtengo El Valor De Los Inputs
  var { id, title, rating, release_date, length , awards, genre_id } =
    editedMovie;
  useEffect(() => {
    setEditedMovie(movie);
    const getAllGenres = axios.get(
      "https://moviesapi2021.herokuapp.com/genres"
    );
    const getGenreById = axios.get(
      `https://moviesapi2021.herokuapp.com/genres/detail/${genre_id}`
    );
    axios
      .all([getAllGenres, getGenreById])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          setGenres(responseOne.data.genres);
          const responseTwo = responses[1];
          setGenreName(responseTwo.data.genre.name);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.log(errors);
      });
  }, [movie, genre_id]);

  const onChange = (e) => {
    setEditedMovie({
      ...editedMovie,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion Que Agrega La Pelicula A BD
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      title === "" ||
      rating === "" ||
      awards === "" ||
      release_date === "" ||
      length === "" ||
      genre_id === "" ||
      genre_id === "Seleccione Un Genero"
    ) {
      Swal.fire("", "Campos Vacios", "error");
      return;
    }

    axios
      .post(
        `https://moviesapi2021.herokuapp.com/movies/update/${id}`,
        editedMovie
      )
      .then((res) => {
        //console.log(res);
        console.log(res.data);
      });

    Swal.fire({
      showConfirmButton: false,
      position: "center",
      icon: "success",
      title: "Pelicula Actualizada, Redireccionando!",
    });
    //Se Refresca La Pagina Para Reflejar La Nueva Pelicula En La Tabla
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div class="row">
          <div class="col">
            <label for="formGroupExampleInput1" style={{ color: "black" }}>
              Titulo
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Ej. Avatar 2"
              id="formGroupExampleInput1"
              onChange={onChange}
              defaultValue={title}
              name="title"
            />
          </div>
          <div class="col">
            <label for="formGroupExampleInput2" style={{ color: "black" }}>
              Calificación
            </label>
            <input
              type="number"
              class="form-control"
              placeholder="Ej. 4"
              id="formGroupExampleInput2"
              onChange={onChange}
              defaultValue={rating}
              name="rating"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="formGroupExampleInput3" style={{ color: "black" }}>
              Premios
            </label>
            <input
              type="number"
              class="form-control"
              placeholder="Ej. 2"
              id="formGroupExampleInput3"
              onChange={onChange}
              defaultValue={awards}
              name="awards"
            />
          </div>
          <div class="col">
            <label for="formGroupExampleInput4" style={{ color: "black" }}>
              Fecha De Lanzamiento
            </label>
            <input
              type="date"
              class="form-control"
              placeholder="Ej. 13/10/2000"
              id="formGroupExampleInput4"
              onChange={onChange}
              defaultValue={release_date = moment().format('YYYY-MM-DD')}
              name="release_date"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="formGroupExampleInput5" style={{ color: "black" }}>
              Duración
            </label>
            <input
              type="number"
              class="form-control"
              placeholder="Ej. 120"
              id="formGroupExampleInput5"
              onChange={onChange}
              value={length}
              name="length"
            />
          </div>
          <div class="col">
            <label for="formGroupExampleInput6" style={{ color: "black" }}>
              Genero
            </label>
            <select
              className="form-select"
              id="formGroupExampleInput6"
              name="genre_id"
              onChange={onChange}
              defaultValue={genre_id}
            >
              <option>{genreName === null ? <></> : genreName}</option>
              {genres.map((genre) => (
                <option value={genre.id}>{genre.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" class="btn btn-primary mt-5">
          Guardar Cambios
        </button>
      </form>
    </>
  );
};

export default EditMovieForm;
