import {combineReducers} from "redux"
import {socketMiddleware} from "lib/socketMiddleware"
import loginManager from "lib/loginManagerInstance"

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
  login: loginManager.getReducer(),
})