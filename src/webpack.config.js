const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@router": path.resolve(__dirname, "withRouters"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
