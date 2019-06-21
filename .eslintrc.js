module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': 'off'
  }
};
