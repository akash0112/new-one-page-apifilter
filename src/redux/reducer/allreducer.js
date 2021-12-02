import {GET_BOOKS} from '../constants/ActionTypes'
const initialState={books:[]}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_BOOKS:
          return {
             ...state,
            books:[action.payload],
          };
          default:
          return state
        }
}
export default reducer