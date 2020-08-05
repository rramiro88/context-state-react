import React from "react";
import { MovieList } from "./MovieList";
import { MovieProvider } from "./MovieContext";
import { Nav } from "./Nav";
import { AddMovie } from "./AddMovie";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
      <Nav />
        <div className="container">
          <Route path='/' exact component={MovieList}/>
          <Route path='/add' exact component={AddMovie}/>
        </div>
      </BrowserRouter>
    </MovieProvider>
  );
};

export default App;
