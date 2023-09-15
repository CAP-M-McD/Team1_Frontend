module.exports = {
    env: {
        commonjs: true,
        node: true,
    },
    extends: ['standard-with-typescript', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: {
                    arguments: false,
                    attributes: false,
                },
            },
        ],
    },
    plugins: ['es5'],
}
