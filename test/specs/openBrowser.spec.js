const assert = require('assert')

describe('Open Sauce Demo', () =>{
    it('should open browser and redirect to saucedemo.com', async () =>{
        //open browser and Url
        await browser.url('/')


        //assert to Url
        const currentURL = await browser.getUrl();
        const expectedURL = 'https://www.saucedemo.com/'; 

        await assert.strictEqual(currentURL, expectedURL, `URL tidal sesuai, Actual: ${currentURL}, Expected: ${expectedURL}`);
        
    })
})