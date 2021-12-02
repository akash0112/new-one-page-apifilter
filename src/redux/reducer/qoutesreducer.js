import {GET_QOUTES} from '../constants/ActionTypes'
const initialState={qoutes:[]}
const qoutesreducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_QOUTES:
          return {
             ...state.qoutes,
            qoutes: [...state.qoutes, action.payload],
          };
          default:
          return state
        }
}
export default qoutesreducer