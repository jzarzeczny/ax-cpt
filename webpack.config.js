module.exports = {
  rules: [
    {
      test: /\.mdx?$/,
      use: ["babel-loader", "@mdx-js/loader"],
    },
    {
      test: /\.wav$/,
      loader: "file-loader",
    },
  ],
};
