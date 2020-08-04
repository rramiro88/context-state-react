import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
export const Movie = ({ name, price, id}) => {
  const [movies, setMovies] = useContext(MovieContext);

  const handleDelete = (e) => {
    let index = -1;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === id) {
        index = i;
      }
    }
    if (index > -1) {
      const list = movies.slice();
      list.splice(index, 1);
      setMovies(list);
    }
  };

  return (
    <div className="card movie">
      <h5 className="card-title">{name}</h5>
      <div className="card-body">
      <h6 className="card-subtitle">Id: {id}</h6>
        <p className="card-text">{price}</p>
        <button className="btn btn-danger right-align" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
