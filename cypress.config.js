const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.USER_EMAIL = process.env.USER_EMAIL;
      config.env.USER_PASSWORD = process.env.USER_PASSWORD;
      config.env.CURRENT_DOMAIN = process.env.CURRENT_DOMAIN;
      return config;
    },
  }
});