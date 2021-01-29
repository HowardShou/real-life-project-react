module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends繼承(拓展)是eslint本來就有的設定，不過仍需要下載，
  // airbnb對應的就是eslint-config-aribnb
  // 不過也不是只有eslint-config-xx的套件能被放到extends，以下
  // 也有從plugin一次引入多個的寫法(plugin:XXXX/recommended)
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  // plugin則是eslint本身沒有由其他開法者分享出來的，亦需要下載，
  // react對應的是eslint-plugin-react
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', //delete `cf`
      },
    ],
    'react/react-in-jsx-scope': 'off', // react 17 nolonger need it
    'react/prop-types': 'off',
  },
}
