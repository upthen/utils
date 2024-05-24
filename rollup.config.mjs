export default {
  input: ["index.js", "./src/lodash.js", "./src/day.js"],
  output: {
    dir: "dist",
    format: "es",
    entryFileNames: "[name].js",
    chunkFileNames: "chunks/[name]-[hash].js",
    name: "up-utils",
  },
};
