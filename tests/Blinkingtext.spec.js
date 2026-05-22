const{test,expect}=require('@playwright/test');

test('Handling Blinking Text',async({page})=>{
    //Login
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  await userName.fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("Learning@830$3mK2");

  //Handle Blinking Text
  const docLink=page.locator("[href*='request']");
  await expect(docLink).toHaveAttribute("class","blinkingText");

});