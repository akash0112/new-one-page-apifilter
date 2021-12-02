import { GET_MOVIES, SET_MOVIES_FIELDS, SET_MOVIES_FILTERS } from "../constants/ActionTypes";
const initialState = { movies: {records:[],filters:{page: 1, limit: 3,budgetInMillions:100,runtimeInMinutes:100, orderBy: "name", order: "asc" }} };
const moviereducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_MOVIES:
    //   return {
    //     ...state.movies,
    //     movies: [...state.movies, action.payload],
    //   };
    case SET_MOVIES_FIELDS:
      return{
        ...state,
        movies:{
          ...state.movies,
          ...action.payload
        }
      };
      case SET_MOVIES_FILTERS:
        return {
          ...state,
          movies: {
            ...state.movies,
            filters: {
              ...state.movies.filters,
              ...action.payload,
            },
          },
        };
    default:
      return state;
  }
};
export default moviereducer;
