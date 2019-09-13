import LoginManager from "./loginManager"
import socketClient from "./socketMiddleware"

export default new LoginManager({
  socketClient,
})