# Team1_Frontend

## How to run lint checks

1. Run `npm run lint` to check for lint errors
2. Run `npm run lint-fix` to auto fix lint errors

## How to run pa11y-ci checks

1. Set env variable in .zshrc file using: export PA11Y_TEST="https://fuwyngxgmx.eu-west-1.awsapprunner.com"
2. Ensure any new views/pages have been added to .pallyci.conf.js file using PA11Y_TEST environment variable.
3. Run `npm run pa11y-ci` to run Pa11y accessibility tests on pages
