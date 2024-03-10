class LoginPage {
    //define the locator of the element
    get usernameInput(){
        return $('#user-name'); //locator username field
    }
    get passwordInput(){
        return $('#password'); //locator password field
    }
    get loginButton(){
        return $('#login-button'); //locator login button
    }
    get errorMessage(){
        return $('//*[@data-test="error"]'); //locator error message
    }

    //defines the actions performed on those elements 
    async login(username,password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMessage.getText();
    }
}
module.exports = new LoginPage();

