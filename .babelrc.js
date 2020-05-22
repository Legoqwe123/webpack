module.exports = (api) => {
  api.cache.never();

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
    ],
  };
};
