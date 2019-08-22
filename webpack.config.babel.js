import path from "path"

import {EnvironmentPlugin} from "webpack"
import configure from "webpack-config-jaid"

export default configure({
  publishimo: {fetchGithub: true},
  googleAnalyticsTrackingId: "INSERT",
  robots: true,
  icon: path.join(__dirname, "icon.png"),
  backgroundColor: "#580000",
  extra: {
    plugins: [
      new EnvironmentPlugin({
        socketUrl: "http://localhost:17561",
      }),
    ],
  },
})