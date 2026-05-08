const { test, expect } = require(`@playwright/test`);
const { performLogin } = require(`./helpers`);

test("Handling Dropdowns", async ({ page }) => {
  // Navigate to the login practice page
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Locate the username input field and sign-in button
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");

  // Fill in the username
  await userName.fill("rahulshettyacademy");

  // Fill in the password using attribute selector for input type='password'
  await page.locator("[type='password']").fill("Learning@830$3mK2");

  // ─── Static Dropdown ───────────────────────────────────────────────────────
  // Static dropdowns have fixed options — selectable by index, value, or visible text
  // Here we select by value "consult" from the <select> element with class "form-control"
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

  // ─── Radio Button ──────────────────────────────────────────────────────────
  await page.locator(".checkmark").last().click();
  await page.locator("#okayBtn").click();
  // Assert that the last radio button is now in a checked state
  await expect(page.locator(".checkmark").last()).toBeChecked();

  // ─── Checkbox ──────────────────────────────────────────────────────────────
  await page.locator("#terms").click();
  // Assert that the checkbox is now checked
  await expect(page.locator("#terms")).toBeChecked();
  // Uncheck the checkbox using the dedicated .uncheck() method
  // Safer than .click() — won't accidentally check an already-unchecked box
  await page.locator("#terms").uncheck();

  // Assert that the checkbox is now unchecked
  // isChecked() returns a boolean — toBeFalsy() confirms it is false
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
});
