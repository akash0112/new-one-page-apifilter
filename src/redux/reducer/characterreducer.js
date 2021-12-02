import {
  // GET_CHARACTER,
  SET_CHARACTER_FIELDS,
  SET_CHARACTER_FILTERS,
} from "../constants/ActionTypes";
// const initialState={character:[]}
const initialState = {
  characters: {
    records: [],
    filters: { page: 1, limit: 10, orderBy: "name", order: "asc" },
  },
};
const characterreducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_CHARACTER:
    //   return {
    //     ...state.character,
    //     character: [...state.character, action.payload],
    //   };
    case SET_CHARACTER_FIELDS:
      return {
        ...state,
        characters: {
          ...state.characters,
          ...action.payload,
        },
      };
    case SET_CHARACTER_FILTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          filters: {
            ...state.characters.filters,
            ...action.payload,
          },
        },
      };
    default:
      return state;
  }
};
export default characterreducer;
