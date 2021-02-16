module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  extends: `react-app`,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {},
}
