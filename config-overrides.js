const path = require("path");

module.exports = function override(config, env) {
  let loaders = config.module.rules[1].oneOf;
  loaders.splice(loaders.length - 1, 0, {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  });
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "~": path.resolve("src"),
      "@configs": path.resolve("src/configs"),
      "@components": path.resolve("src/components"),
      "@assets": path.resolve("src/assets"),
      "@stores": path.resolve("src/stores"),
    },
  };
  return config;
};
