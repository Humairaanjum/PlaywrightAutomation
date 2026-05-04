const { test,expect} = require("@playwright/test");

test("First Playwright Test", async ({ page }) => {
  //const context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});
test('Second Playwright Test', async ({ page }) => {
  await page.goto("https://google.com");
  //get title -assertion
  console.log(await page.title());
 await expect(page).toHaveTitle("Google");



});