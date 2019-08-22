import socketIoClient from "socket.io-client"
import immer from "immer"

export const socketReducer = (state, action) => {
  if (!state) {
    return {
      status: "unset",
    }
  }
  if (!action?.type.startsWith("@@socket/")) {
    return state
  }
  const actionType = action.type.substring("@@socket/".length)
  if (actionType === "connected") {
    return immer(state, draft => {
      draft.status = "connected"
    })
  }
  return state
}

/**
 * @typedef {Object} Options
 * @prop {string} url
 * @prop {Object<string, string | ((dispatch: Function) => void)>} events
 * @prop {Object} [socketClientOptions]
 * @prop {string} [basePrefix="@@socket/"]
 * @prop {string} [sendPrefix="send/"]
 * @prop {string} [receivePrefix="received/"]
 */

/**
 * @param {Options} options
 * @return {import("redux").Middleware}
 */
function createSocketMiddleware(options) {
  options = {
    socketClientOptions: {},
    basePrefix: "@@socket/",
    sendPrefix: "send/",
    receivePrefix: "received/",
    events: {},
    ...options,
  }
  const connectedType = `${options.basePrefix}connected`
  const initiallyConnectedType = `${options.basePrefix}initiallyConnected`
  const sendPrefix = options.basePrefix + options.sendPrefix
  const receivePrefix = options.basePrefix + options.receivePrefix
  const socketClient = socketIoClient(options.url, {
    ...options.socketClientOptions,
    autoConnect: false,
  })
  /**
   * @type {import("redux").Middleware}
   */
  const middleware = store => {
    socketClient.once("connect", () => {
      store.dispatch({
        type: initiallyConnectedType,
      })
      for (const [eventName, eventHandler] of Object.entries(options.events)) {
        if (eventHandler === true) {
          socketClient.on(eventName, (...payload) => {
            store.dispatch({
              type: receivePrefix + eventName,
              payload: payload[0],
            })
          })
        } else if (typeof eventHandler === "string") {
          socketClient.on(eventName, (...payload) => {
            store.dispatch({
              type: receivePrefix + eventHandler,
              payload: payload[0],
            })
          })
        } else {
          socketClient.on(eventName, (...payload) => eventHandler(store.dispatch, payload[0]))
        }
      }
    })
    socketClient.on("connect", () => {
      store.dispatch({
        type: connectedType,
      })
    })
    return next => action => {
      if (action.type.startsWith(sendPrefix)) {
        const eventName = action.type.substring(sendPrefix.length)
        socketClient.emit(eventName, action.payload)
      }
      return next(action)
    }
  }
  socketClient.open()
  return middleware
}

export {createSocketMiddleware}

export default createSocketMiddleware