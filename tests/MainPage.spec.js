const {test,expect}=require("@playwright/test");
const { performLogin } = require("./helpers");

test('Traversing the elements', async ({ page }) => {
    //For resable code we can create a helper function and call it here
    //I made a helper function in helpers.js and called it here for login
 await performLogin(page);
//123
 //To get single element
 console.log(await page.locator(".card-body a").first().textContent()); 
 console.log(await page.locator(".card-body a").nth(0).textContent()); 

 //To get all or multiple elementssss
console.log("test");

  
  
  
    
});

