import React from "react"
import ReactDom from "react-dom"
import App from "components/App"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {socketMiddleware} from "lib/socketMiddleware"
import loginManager from "lib/loginManagerInstance"

import reducer from "./redux/reducer"

const store = createStore(reducer, applyMiddleware(thunk, socketMiddleware, loginManager.getMiddleware()))

const rootNode = document.createElement("div")
document.body.append(rootNode)

ReactDom.render(<Provider store={store}>
  <App/>
</Provider>, rootNode)