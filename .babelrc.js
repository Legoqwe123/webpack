module.exports = (api) => {
  const envName = api.env();

  api.cache.using(() => envName === "development");

  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/env",
        {
          debug: false,
          spec: true,
          loose: false,
          modules: false,
        },
      ],
    ],
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          pure: true,
        },
      ],
      "@babel/plugin-syntax-dynamic-import",
    ],
  };
};
