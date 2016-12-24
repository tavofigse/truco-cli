// tests are placed alongside files under test.
// this file does the following:
// 1. registers babel for transpiling our code for testing

// register babel so that it will transpile es6 to es5
// before our tests run.
require('babel-register')()

