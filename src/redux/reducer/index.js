import { combineReducers } from "redux"
import reducer from "./allreducer"
import characterreducer from "./characterreducer"
import moviereducer from "./moviereducer"
import qoutesreducer from "./qoutesreducer"
const rootreducer=combineReducers({
   book:reducer,
   movie:moviereducer,
   character:characterreducer,
   qoute:qoutesreducer
})
export default rootreducer