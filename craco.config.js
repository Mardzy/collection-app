// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { alias } = require("react-app-rewire-alias");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    baseUrl: "src",
    alias: {
      "@assets": path.resolve(__dirname, "assets/"),
      "@components": path.resolve(__dirname, "components/"),
      "@containers": path.resolve(__dirname, "containers/"),
      "@hooks": path.resolve(__dirname, "hooks/"),
      "@pages": path.resolve(__dirname, "pages/"),
      "@router": path.resolve(__dirname, "router/"),
      "@services": path.resolve(__dirname, "services/"),
      "@slices": path.resolve(__dirname, "slices/"),
      "@store": path.resolve(__dirname, "store/"),
      "@styles": path.resolve(__dirname, "styles/"),
      "@theme": path.resolve(__dirname, "theme/"),
      "@types": path.resolve(__dirname, "types/")
    }
  }
};

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "./tsConfigPath.json"
      }
    }
  ]
};
