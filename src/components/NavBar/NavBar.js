import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand" href="!#">
              Digital Movies
            </a>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/movies-list">
                  <a class="nav-link" aria-current="page" href="!#">
                    Movies
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/genres-list">
                  <a class="nav-link" href="!#">
                    Generos
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
