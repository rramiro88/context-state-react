import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./style.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <nav className="navbar navbar-expand-sm bg-light bg-dark navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className='nav-link' to="/add"> Add movie </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to="/"> List movies </Link>
          </li>
        </ul>

        <div className='navbar-brand'>Number of movies: {movies.length}</div>
      
    </nav>
  );
};
