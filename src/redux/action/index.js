import {
  GET_BOOKS,
  // GET_CHARACTER,
  // GET_MOVIES,
  GET_QOUTES,
  SET_CHARACTER_FIELDS,
  SET_CHARACTER_FILTERS,
  SET_MOVIES_FIELDS,
  SET_MOVIES_FILTERS
} from "../constants/ActionTypes";
import {
  getAll,
  // getAllcharacter,
  // getAllmovie,
  getAllqoute,
} from "../service/service";
export const getallbooks = () => async (dispatch) => {
  try {
    const res = await getAll();
    dispatch({
      type: GET_BOOKS,
      payload: res.data.docs,
    });
  } catch (err) {
    console.log(err);
  }
};
// export const getallmovies = () => async (dispatch) => {
//   try {
//     const res = await getAllmovie();
//     // console.log(res.data.docs);
//     dispatch({
//       type: GET_MOVIES,
//       payload: res.data.docs,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// export const getallcharacters = () => async (dispatch) => {
//   try {
//     const res = await getAllcharacter();
//     // console.log(res.data.docs);
//     dispatch({
//       type: GET_CHARACTER,
//       payload: res.data.docs,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
export const getallqoutes = () => async (dispatch) => {
  try {
    const res = await getAllqoute();
    // console.log(res.data.docs);
    dispatch({
      type: GET_QOUTES,
      payload: res.data.docs,
    });
  } catch (err) {
    console.log(err);
  }
};
export const setCharacterFields = (payload) => ({ type: SET_CHARACTER_FIELDS, payload });
export const setCharacterFilters = (payload) => ({ type: SET_CHARACTER_FILTERS, payload });
export const setMoviesFields = (payload) => ({ type: SET_MOVIES_FIELDS, payload });
export const setMoviesFilters = (payload) => ({ type: SET_MOVIES_FILTERS, payload });