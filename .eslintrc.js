module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 2,
    'import/export': 2,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-undef': 1,
    'no-unused-vars': 1,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/display-name': 0
  },
};
