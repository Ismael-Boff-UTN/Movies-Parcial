import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddMovieForm = () => {
  const [genres, setGenres] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    rating: "",
    awards: "",
    release_date: "",
    length: "",
    genre_id: "",
  });
  useEffect(() => {
    axios
      .get("https://moviesapi2021.herokuapp.com/genres")
      .then((response) => {
        // Obtenemos los datos
        //console.log(response.data.genres);
        setGenres(response.data.genres);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log(e);
      });
  }, []);
  //Obtengo El Valor De Los Inputs
  const { title, rating, release_date, length, awards, genre_id } = newMovie;
  const onChange = (e) => {
    setNewMovie({
      ...newMovie,
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

    try {
      axios
        .post(`https://moviesapi2021.herokuapp.com/movies/create`, newMovie)
        .then((res) => {
          //console.log(res);
          //console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }

    Swal.fire({
      showConfirmButton: false,
      position: "center",
      icon: "success",
      title: "Pelicula Agregada, Espere!",
    });
    //Se Refresca La Pagina Para Reflejar La Nueva Pelicula En La Tabla
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
  return (
    <>
      <form>
        <div class="row">
          <div class="col">
            <label for="formGroupExampleInput1">Titulo</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ej. Avatar 2"
              id="formGroupExampleInput1"
              onChange={onChange}
              value={title}
              name="title"
            />
          </div>
          <div class="col">
            <label for="formGroupExampleInput2">Calificación</label>
            <input
              type="number"
              class="form-control"
              placeholder="Ej. 4"
              id="formGroupExampleInput2"
              onChange={onChange}
              value={rating}
              name="rating"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="formGroupExampleInput3">Premios</label>
            <input
              type="number"
              class="form-control"
              placeholder="Ej. 2"
              id="formGroupExampleInput3"
              onChange={onChange}
              value={awards}
              name="awards"
            />
          </div>
          <div class="col">
            <label for="formGroupExampleInput4">Fecha De Lanzamiento</label>
            <input
              type="date"
              class="form-control"
              placeholder="Ej. 13/10/2000"
              id="formGroupExampleInput4"
              onChange={onChange}
              value={release_date}
              name="release_date"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="formGroupExampleInput5">Duración</label>
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
            <label for="formGroupExampleInput6">Genero</label>
            <select
              className="form-select"
              id="formGroupExampleInput6"
              name="genre_id"
              onChange={onChange}
            >
              <option>Seleccione Un Genero</option>
              {genres.map((genre) => (
                <option value={genre.id}>{genre.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" class="btn btn-primary mt-5" onClick={onSubmit}>
          Guardar
        </button>
      </form>
    </>
  );
};

export default AddMovieForm;
