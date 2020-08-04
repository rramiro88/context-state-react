import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

export const AddMovie = () => {

    const[name, setName] = useState('')
    const[price, setPrice] = useState('')

    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault()
        setMovies([...movies, {name: name, price: price, id: movies.length > 0 ? movies[movies.length-1].id + 1 : 0}])
    }

    return (
        <div className='card input-group'>
            <form onSubmit={addMovie}>
                <input type='text' name='name' value={name} placeholder='name' onChange={updateName} className='form-control'/>
                <input type='text' name='price' value={price} placeholder='price' onChange={updatePrice} className='form-control'/>
                <br/>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
