const { test,expect} = require("@playwright/test");
const { performLogin } = require("../helpers");

test.only("First Playwright Test", async ({ page }) => {
  //const context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //css
  const userName = page.locator("#username");
  const signIn=page.locator("#signInBtn");

  await userName.fill("anshika");
  await page.locator("[type='password']").fill("learning");
  await signIn.click();
  console.log(await page.locator("[style*='block']").textContent());
  //asertion=verifies that the error message is visible and contains the text "Incorrect"
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();

});
test('Second Playwright Test', async ({ page }) => {
  await page.goto("https://google.com");
  //get title -assertion
  console.log(await page.title());
 await expect(page).toHaveTitle("Google");



});