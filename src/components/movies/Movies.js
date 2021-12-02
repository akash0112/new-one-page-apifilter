import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesFilters } from '../../redux/action';
import { requestmovies } from '../../redux/service/service';
const Movies = () => {
    const dispatch = useDispatch()
    const {records,filters} = useSelector(state => state.movie.movies)
    const handleChangeFilter = (event) => {
        const { value, name } = event.target;
        dispatch(setMoviesFilters({ [name]: value }));
      };
      
    useEffect(() => {
        const getapi = () => {
          dispatch(requestmovies(filters));
        };
        getapi();
      }, [filters.limit, filters.page, filters.orderBy, filters.order,filters.budgetInMillions,filters.runtimeInMinutes]);
    
    return (
        <>
        budgetInMillions:- <select name="budgetInMillions" value={filters.budgetInMillions} onChange={handleChangeFilter}>
        <option value={100}>less than 100</option>
        <option value={200}>less than 200</option>
        <option value={300}>less than 300</option>
      </select>

   <br/>   RunTime:- <select name="runtimeInMinutes" value={filters.runtimeInMinutes} onChange={handleChangeFilter}>
        <option value={100}>less than 100</option>
        <option value={200}>less than 200</option>
        <option value={300}>less than 300</option>
      </select>
        <div>
            <h1>Movies</h1>
            {records.map((record,i) => (
          <h1 key={i+1}>{i+1 }:-{" "} {record.name}</h1>
        ))}
        </div>
        <select name="limit" value={filters.limit} onChange={handleChangeFilter}>
        <option value={3}>3</option>
        <option value={6}>6</option>
        <option value={10}>10</option>
      </select>
        </>
    )
}

export default Movies
