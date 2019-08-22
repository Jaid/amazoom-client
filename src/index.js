import React from "react"
import ReactDom from "react-dom"
import App from "components/App"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {createSocketMiddleware} from "lib/socketMiddleware"

import reducer from "./redux/reducer"

const socketMiddleware = createSocketMiddleware({
  url: process.env.socketUrl,
  events: {
    hey: true,
  },
})
const store = createStore(reducer, applyMiddleware(thunk, socketMiddleware))

const rootNode = document.createElement("div")
document.body.append(rootNode)

ReactDom.render(<Provider store={store}>
  <App/>
</Provider>, rootNode)