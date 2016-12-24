// tests are placed alongside files under test.
// this file does the following:
// 1. registers babel for transpiling our code for testing
// 2. disables webpack-specific features that mocha doesn't understand.
// 3. requires jsdom so we can test via an in-memory dom in node
// 4. sets up global vars that mimic a browser.

// this assures the .babelrc dev config (which includes
// hot module reloading code) doesn't apply for tests.
process.env.node_env = 'test'

// register babel so that it will transpile es6 to es5
// before our tests run.
require('babel-register')()

