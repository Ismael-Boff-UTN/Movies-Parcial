import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Movies Anywhere</h5>
          <p class="card-text">
          Bienvenidos a Digital Movies
          </p>
          <p class="card-text">
          <Link to="/movies-list">
        <button className="btn btn-success" style={{ alignContent: "center" }}>
          Ver Peliculas
        </button>
      </Link>
          </p>
        </div>
        <img src="https://movieclub.com.ar/imgs/og_image.png" class="card-img-bottom" alt="xd" style={{"maxHeight":"400px"}}/>
      </div>
      
    </div>
  );
};

export default Home;
