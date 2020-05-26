module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["babel", "import", "jsx-a11y", "react", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    "import/no-named-as-default": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "comma-dangle": ["off"],
    "linebreak-style": ["off"],
    quotes: 0,
    "arrow-body-style": 0,
    "no-unused-vars": "warn",
    "react/prop-types": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
