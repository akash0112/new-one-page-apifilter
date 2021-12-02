import axios from "axios";
import { setCharacterFields, setCharacterFilters, setMoviesFields, setMoviesFilters } from "../action";
export const getAll = async () => {
  return await axios.get("https://the-one-api.dev/v2/book");
};
// export const getAllmovie = async () => {
//   return await axios.get("https://the-one-api.dev/v2/movie", {
//     headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` },
//   });
// };
//  export const  getAllcharacter=async()=>{return await axios.get("https://the-one-api.dev/v2/character",{ headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` } })}
export const getAllqoute = async () => {
  return await axios.get("https://the-one-api.dev/v2/quote", {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` },
  });
};
export const requestmovies = (newFilters) =>async (dispatch)=> {
  const {budgetInMillions,runtimeInMinutes}=newFilters
  // console.log(runtimeInMinutes);
  try {
    const params = {
      // budgetInMillions,
      // runtimeInMinutes:runtimeInMinutes,
      limit: newFilters.limit,
      page: newFilters.page,
    };

    const {data: { docs, ...filters }}=await axios.get(`https://the-one-api.dev/v2/movie?budgetInMillions<${budgetInMillions}&runtimeInMinutes>=${runtimeInMinutes}`, {params,
      headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` },
    });
    // console.log(filters);
    dispatch(setMoviesFields({ records: docs }));
    dispatch(setMoviesFilters(filters))
  } catch (error) {
    console.log(error);
  }
};
export const requestCharacters = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      limit: prevFilters.limit,
      page: prevFilters.page,
      sort: `${prevFilters.orderBy}:${prevFilters.order}`,
    };
const {data: { docs, ...filters }} = await axios.get("https://the-one-api.dev/v2/character", {params,headers: {Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`}});
    dispatch(setCharacterFields({ records: docs }));
    dispatch(setCharacterFilters(filters));
  } catch (err) {
    console.log(err);
  }
};
