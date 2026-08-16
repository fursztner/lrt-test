export default {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:tailwindcss/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react', '@typescript-eslint', 'tailwindcss'],
    settings: {
        react: { version: 'detect' },
    },
};
