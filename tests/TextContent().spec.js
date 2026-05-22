const { test, expect } = require("@playwright/test");
const { performLogin } = require("../helpers");

test("Traversing the elements", async ({ page }) => {
  //For resable code we can create a helper function and call it here
  //I made a helper function in helpers.js and called it here for login
  await performLogin(page);

  //To get single element
  const cardTitles = page.locator(".card-body a");
  co15081947nsole.log(await cardTitles.first().textContent());
   console.log(await cardTitles.nth(0).textContent());

  //To get all or multiple elements
  const allTitles = await page.locator(".card-body a").allTextContents();
  console.log(allTitles);
});
