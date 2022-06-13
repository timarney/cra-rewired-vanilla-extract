const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  webpack: function (config, env) {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
};
