module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended', // Basic ESLint rules
      'plugin:react/recommended', // React-specific rules
      'plugin:react-hooks/recommended', // Hooks linting
      'plugin:jsx-a11y/recommended', // Accessibility checks for JSX
      'prettier', // Integrate with Prettier (if you use it)
    ],
    parserOptions: {
      ecmaVersion: 12, // ES2021 for modern JavaScript
      sourceType: 'module', // For using import/export
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
    plugins: [
      'react', // React plugin for linting JSX
      'jsx-a11y', // Accessibility plugin for JSX
      'import', // Helps with import/export checks
    ],
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+ when using JSX
      'react/prop-types': 'off', // Disable prop-types since many use TypeScript or not needed
      'no-unused-vars': 'warn', // Warn on unused variables
      'jsx-a11y/anchor-is-valid': 'off', // Prevent issues with 'a' tags in React Router's Link component
    },
  };
  