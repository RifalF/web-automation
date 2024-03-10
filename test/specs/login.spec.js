const assert = require('assert');
const { execPath } = require('process');

describe('SauceDemo Login Test', () =>{
    it('should login successfully with valid credentials', async () =>{
        //open browser and Url
        await browser.url('/')

        //input username (CSS Locator)
        await $('#user-name').setValue('standard_user');
        //input password (CSS Locator)
        await $('#password').setValue('secret_sauce');
        //click button
        await $('#login-button').click();

        //inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('should login unsuccessfully with invalid username', async () =>{
        //open browser and Url
        await browser.url('/')

        //input username (CSS Locator)
        await $('#user-name').setValue('invalid_user');
        //input password (CSS Locator)
        await $('#password').setValue('secret_sauce');
        //click button
        await $('#login-button').click();
        //assertion error message
        const errorMessage = await $('//*[@data-test="error"]');
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
    })
})