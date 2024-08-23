const logoutPage = require('../logout/logout.page');

class LogoutStep{
    
    async clickOnProfileIcon() {
        logoutPage.profileIcon.click();     
    }

    async clickOnLogoutButton() {
        await expect(logoutPage.logoutButton).toBeDisplayed(); 
        await logoutPage.logoutButton.click();     
    }

    async verifyUserLoggedoutSuccessfully() {
        await expect(logoutPage.createAccountButton).toBeDisplayed();   
    }

    
    
}

module.exports = new LogoutStep();
