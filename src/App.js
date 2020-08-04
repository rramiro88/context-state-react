import React from "react";
import { MovieList } from "./MovieList";
import { MovieProvider } from "./MovieContext";
import { Nav } from "./Nav";
import { AddMovie } from "./AddMovie";

const App = () => {
  return (
    <MovieProvider>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <AddMovie />
          </div>
          <div className="col-4">
            <MovieList />
          </div>
        </div>
      </div>
    </MovieProvider>
  );
};

export default App;
