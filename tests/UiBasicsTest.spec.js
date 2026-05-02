const { test } = require("@playwright/test");

test("First Playwright Test", async ({ page }) => {
  //const context = await browser.newContext();
  //const page = await context.newPage();
  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});
