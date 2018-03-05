module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
    },
    "rules": {
        "react/prefer-stateless-function": "off",
        "react/forbid-prop-types": "off",
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-console": "off",
        "max-len": "off",
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    }
};