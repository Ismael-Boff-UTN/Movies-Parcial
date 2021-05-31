import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand" href="!#">
              <img
                src="https://www.pngkey.com/png/full/343-3434547_movies-everywhere-logo-featured-black-movies-anywhere-logo.png"
                alt=""
                width="150"
                height="60"
                class="d-inline-block align-text-top"
              />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
