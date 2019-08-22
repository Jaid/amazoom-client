import createSockMiddleware from "redux-sock"

/**
 * @type {import("redux").Middleware}
 */
const middleware = createSockMiddleware({
  url: process.env.socketUrl,
  events: ["hey"],
})

export const socketMiddleware = middleware

/**
 * @type {import("socket.io-client").SocketIOClientStatic}
 */
export default middleware.client