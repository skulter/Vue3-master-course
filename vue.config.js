const path = require("path");
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.join(__dirname, "src/")
      }
    }
  },

})
