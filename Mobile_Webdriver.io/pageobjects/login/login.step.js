const loginPage = require('../login/login.page');

class LoginStep{
    
    async login(username, password) {
        await loginPage.loginEmailTextField.setValue(username); 
        await loginPage.loginPasswordTextField.setValue(password);
        await loginPage.signinButton.click(); 
    }

    async clickOnSigninButton() {
        loginPage.signinButton.click();     
    }

    async verifySigninPageTitle() {
        await expect(loginPage.signinPageTitle).toBeDisplayed();   
    }

    async clickOnPermissionPopupAllowButton() {
        await expect(loginPage.permissionPopupAllowButton).toBeDisplayed(); 
        await loginPage.permissionPopupAllowButton.click();     
    }

    async verifyUserLoggedInSuccessfully() {
        await expect(loginPage.homeScreenPage).toBeDisplayed();   
    }

    async launchApp() {
        await expect(loginPage.launchPage).toBeDisplayed();   
    }

    
    
}

module.exports = new LoginStep();
