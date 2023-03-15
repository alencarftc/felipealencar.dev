const path = require(`path`);
const { whenProd } = require("@craco/craco");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        plugins: [
          ...webpackConfig.plugins,
          ...whenProd(
            () => [
              new HtmlCriticalWebpackPlugin({
                base: path.resolve(__dirname, "build"),
                src: "index.html",
                dest: "index.html",
                inline: true,
                minify: true,
                extract: true,
                width: 320,
                height: 565,
                penthouse: {
                  blockJSRequests: false,
                },
              }),
            ],
            []
          ),
        ],
      };
    },
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@providers": path.resolve(__dirname, "./src/providers"),
    },
  },
};
