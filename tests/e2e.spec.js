const {test, expect} = require('@playwright/test');
const {Login} = require('../helpers');
test('End to End Test', async ({page})=>{
    const productName="ZARA COAT 3";
    const products=page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    console.log("Login successful");
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body").first().waitFor();
   const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);
const count=await products.count();
console.log(count);
for(let i=0;i<count ; i++){
if (await products.nth(i).locator("b ").textContent()===productName){
    await products.nth(i).locator("text= Add To Cart").click();
    break;
}
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool=await page.locator("h3:has-text('ZARA Coat 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();
await page.locator("[placeholder*='Country']").pressSequentially("ind");
await page.locator(".ta-results").waitFor();
const options=page.locator(".ta-results button");
const optionCount=await options.count();
for(let i=0;i<optionCount;i++){
    const text=await options.nth(i).textContent();
    if(text.trim()==="India"){
        await options.nth(i).click();
        break;
    }
}

});
