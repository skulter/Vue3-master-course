const path = require("path");
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.join(__dirname, "src/")
      }
    }
  },
  // devServer: {
  //   client: {
  //     // overlay: true,
      // overlay: {
      //   // warnings: false,
      //   errors: true,
      // }
  //   }
  // }
})
