export default {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
              "checksVoidReturn": {
                "arguments": false,
                "attributes": false
              }
            }
          ]
    }
}
