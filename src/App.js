import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MoviesList from "./components/MoviesRelated/MoviesList";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <>
      <>
        <Router>
          <NavBar />
          <Switch>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/movies-list" component={MoviesList} />
            </div>
          </Switch>
        </Router>
      </>
    </>
  );
};

export default App;
