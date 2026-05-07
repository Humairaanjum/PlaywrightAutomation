const { test, expect } = require(`@playwright/test`);
const { performLogin } = require(`./helpers`);

test("Handling Dropdowns", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  await userName.fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  //Handling dropdowns
  //Static dropdowns=Options are fixed and we can select by index, value or visible text
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

     await page.locator(".radiotextstyle").last().click();
  //await page.locator("#okayBtn").click();

  console.log(await page.locator(".radiotextstyle").last().isChecked());
  await expect(page.locator(".radiotextstyle")).last().toBeChecked();
});
