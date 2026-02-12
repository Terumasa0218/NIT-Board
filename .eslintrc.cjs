/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["@typescript-eslint", "react-hooks", "react-refresh"],
  extends: ["eslint:recommended", "plugin:react-hooks/recommended"],

  ignorePatterns: ["dist/", "node_modules/"],

  rules: {
    // Vite + React Fast Refresh
    "react-refresh/only-export-components": "warn",

    // TypeScriptが未使用変数を見るのでESLint側は無効化（必要なら後で戻す）
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    // React 17+ new JSX transform 前提：React import不要なのに no-undef が誤検知しやすい
    "no-undef": "off",
    
    "react-hooks/exhaustive-deps": "off",

  },

  // テスト環境だけは jest/vitest globals を許可
  overrides: [
    {
      files: ["src/test/**/*.{ts,tsx}", "**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
      env: { browser: true, node: true },
    },
  ],
};
