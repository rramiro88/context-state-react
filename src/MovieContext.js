import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
          name: "Operacion Final",
          price: "$20",
          id: 1
        },
        {
          name: "La era del hielo",
          price: "$10",
          id: 2,
        },
        {
          name: "La vida es bella",
          price: "$15",
          id: 3,
        },
      ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
