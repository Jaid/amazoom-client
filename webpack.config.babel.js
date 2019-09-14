import path from "path"

import {EnvironmentPlugin} from "webpack"
import configure from "webpack-config-jaid"

export default configure({
  publishimo: {fetchGithub: true},
  googleAnalyticsTrackingId: "UA-51563406-8",
  robots: true,
  icon: path.join(__dirname, "icon.png"),
  backgroundColor: "#580000",
  sitemap: true,
  extra: {
    plugins: [
      new EnvironmentPlugin({
        backendHost: "server.preis.farm",
      }),
    ],
  },
})