const { test, expect } = require("@playwright/test");
const { Login } = require("./helpers");

test("ClientApp", async ({ page }) => {
  await Login(page);
  console.log("Login successful");

  const productTitles = page.locator(".card-body b");
  // Wait for the network to be idle before retrieving product titles
  //await page.waitForLoadState("networkidle");
  //waitFor() only works for single element
  await productTitles.first().waitFor();
  console.log(await productTitles.allTextContents());\
  console.log("Test completed");
    console.log("Test completed");

});

