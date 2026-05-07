// Shared helper functions for all tests

async function performLogin(page) {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  await userName.fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  await signIn.click();
}

async function Login(page){
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const userName=page.locator("#userEmail");
    const password=page.locator("[type='password']");
    const signIn=page.locator(".login-btn");
    await userName.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    await signIn.click();
}

module.exports = { performLogin, Login };
