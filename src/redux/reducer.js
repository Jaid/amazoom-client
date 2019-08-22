import immer from "immer"
import {combineReducers} from "redux"
import query from "src/query"
import {socketMiddleware} from "lib/socketMiddleware"

const mainReducer = (state, action) => {
  if (action.type === "@@socket/received/hey") {
    console.log("hey received")
  }
  if (!state) {
    return {
    }
  }
  return state
}

export default combineReducers({
  main: mainReducer,
  socket: socketMiddleware.reducer,
})