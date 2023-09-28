# One Force Application

## How to Run Application:

1. Run `npm install` to build your application
2. Start application with `npm start`
3. To check that your application is running enter url `http://localhost:3000/`

-   Note: It should be running on the AWS link
-   Tip: To add applications as part the machine environment variables you need to add the application urls localy i.e. MacOS users add "export API_URL=http://localhost:8080/" to their .zshrc file

## How to Test Application:

1. To Run Unit tests use `npm test` (This will show test passes & fails)

-   To Run Unit tests and view test coverage use `npm run test-coverage`

2. To Run UI tests use `npm run test-ui` (This will show test passes & fails)

-   To Run UI tests locally open two terminals and in one terminal use `npm start` and run the backend with it's instructions and then use `npm run test-ui`

3. To check that your application is running enter url `http://localhost:3000/employees`

Tip: To add applications as part the machine environment variables you need to add the application urls localy i.e.
MacOS users add "export API_URL=http://localhost:8080/" to their .zshrc file

## How to Test Application:

1. Run `npm install` to build application
2. To Run Unit tests use `npm test` (This will show test passes & fails)

-   To Run Unit tests and view test coverage use `npm run test-coverage`

3. To Run UI tests use `npm run test-ui` (This will show test passes & fails)

## How to run lint checks

1. Run `npm run lint` to check for lint errors
2. Run `npm run lint-fix` to auto fix lint errors

## How to run pa11y-ci checks

1. Set env variable in .zshrc file using: `export PA11Y_TEST="https://fuwyngxgmx.eu-west-1.awsapprunner.com"`
2. Ensure any new views/pages have been added to .pallyci.conf.js file using PA11Y_TEST environment variable.

-   Note: To Run this check when testing locallly use: `export PA11Y_TEST="http://localhost:3000/"`
-   If running locally In one terminal window run the application using `npm start` and then the next window step 3.

3. In the other terminal use `npm run pa11y-ci` to run Pa11y accessibility tests on pages
