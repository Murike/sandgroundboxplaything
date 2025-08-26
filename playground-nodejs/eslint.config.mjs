export default {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'strict': ['error', 'global'],
    'import/extensions': ['error', 'always', {
      'js': 'always',
      'mjs': 'always'
    }],
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.mjs']
      }
    }
  }
};
