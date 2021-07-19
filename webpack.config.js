module.exports = {
  rules: [
    {
      test: /\.mdx?$/,
      use: ["babel-loader", "@mdx-js/loader"],
    },
  ],
};
