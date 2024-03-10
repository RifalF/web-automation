const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const inventoryPage = require('../../pages/inventory.page')

describe('SauceDemo Login Test with Function', () =>{
    beforeEach(async () => {
        //open browser
        Page.open('/')
    })

    it('should login successfully with valid credentials', async () =>{
        //call login function
        await LoginPage.login('standard_user','secret_sauce')
        //inventory
        await inventoryPage.assertInventoryUrl();
    })
    it('should login unsuccessfully with invalid username', async () =>{
        //call login function
        await LoginPage.login('invalid_user','secret_sauce')

        //assertion error message
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })
})


