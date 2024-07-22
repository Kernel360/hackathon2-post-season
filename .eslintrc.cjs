module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        paths: ['src'],
        "extensions": [".js", ".jsx", ".ts", ".tsx"] 
      },
    },
  },
  plugins: ['react-refresh', 'react', 'prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-restricted-exports': 'off',
    "import/no-unresolved": "off",
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
