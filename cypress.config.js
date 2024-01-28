const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.bbc.co.uk/news/special/2014/newsspec_8368_b/content/english/index.html?v=0.1.872&onbbcdomain=true",
  },
});
