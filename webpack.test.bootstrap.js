const context = require.context("./src", true, /\S+\.spec\.js$/);
context.keys().forEach(context);
