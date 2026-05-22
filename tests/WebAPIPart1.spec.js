const {test, expect,request} = require('@playwright/test');



test.beforeAll(()=>{
    console.log("Before all tests");
    const apiContext=await request.newContext();
    apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data:{
            userEmail:")


});
