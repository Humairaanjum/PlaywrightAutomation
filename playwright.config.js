import { defineConfig, devices } from "@playwright/test";
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: "./tests",
  timeout: 40 * 1000, //OVERRIDE DEFAULT TIMEOUT IN ENTIRE PROJECT
  expect: {
    timeout: 5000, //TIMEOUT FOR ASSERTIONS
  },
  reporter: "html",
  use: {
    browserName: "chromium",
  },
};
module.exports = config;
