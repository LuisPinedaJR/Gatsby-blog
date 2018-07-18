module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "settings": {
          "ecmascript": 6,
          "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      "no-console": "off",
      "react/no-multi-comp": 0,
      "import/prefer-default-export": 0,
      "import/no-absolute-path": 0,
      "radix": 0,
      "generator-star-spacing": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types":[0],
      "no-underscore-dangle":[2,{ "allow": ["_id"] }],
      "no-use-before-define": [0],
      "import/extensions": [1, "never"],
      "jsx-a11y/no-static-element-interactions": [0],
      "no-return-assign": [0],
      "func-names": [0],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        
    }
  }