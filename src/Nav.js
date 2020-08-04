import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import './style.css'

export const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext)    

    return (
        <nav className='navbar navbar-light bg-light'>
            Number of movies: {movies.length}
        </nav>
    )
}
