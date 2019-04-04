module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
    },
    "parser": "babel-eslint",
    "rules": {
        "react/no-unescaped-entities": "off",
        "react/prefer-stateless-function": "off",
        "react/forbid-prop-types": "off",
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-console": "off",
        "max-len": "off",
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    }
};
