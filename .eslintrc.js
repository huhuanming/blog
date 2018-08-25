module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "prettier"
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
    "prettier",
  ],
  "rules": {
    "strict": "error",
    "prettier/prettier": "error",
  },
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}
