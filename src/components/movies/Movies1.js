import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallmovies } from '../../redux/action'

const Movies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const api = () => {
          dispatch(getallmovies());
        };
        api();
      }, [dispatch]);
    const movies = useSelector(state => state.movie.movies[0])
    return (
        <div>
            <h1>Movies</h1>
            {
                movies?movies.map((c)=><h1 key={c._id}>{c.name}</h1>):"data not found"
            }
        </div>
    )
}

export default Movies
