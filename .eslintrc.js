module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "class-methods-use-this": "off",
        "import/first": "off",
        "no-param-reassign": "off",
        "camelcase": "off",
    }
};
