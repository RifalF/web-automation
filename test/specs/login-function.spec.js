const assert = require('assert');
const { execPath } = require('process');

//Using Function
async function login(username, password){
     //open browser and Url
     await browser.url('/')

     //input username (CSS Locator)
     await $('#user-name').setValue(username);
     //input password (CSS Locator)
     await $('#password').setValue(password);
     //click button
     await $('#login-button').click();
}

describe('SauceDemo Login Test', () =>{
    it('should login successfully with valid credentials', async () =>{
        //call login function
        await login('standard_user','secret_sauce')
        //inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('should login unsuccessfully with invalid username', async () =>{
        //call login function
        await login('invalid_user','secret_sauce')
        //assertion error message
        const errorMessage = await $('//*[@data-test="error"]');
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
    })
})