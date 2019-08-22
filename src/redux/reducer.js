import immer from "immer"
import {combineReducers} from "redux"
import query from "src/query"
import {socketReducer} from "lib/socketMiddleware"

const mainReducer = (state, action) => {
  if (!state) {
    return {
    }
  }
  return state
}

export default combineReducers({
  main: mainReducer,
  socket: socketReducer,
})