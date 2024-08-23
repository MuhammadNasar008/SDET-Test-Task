const signupPage = require('../signup/signup.page');
const logoutPage = require('../logout/logout.page');

class LogoutStep{
    
    async clickOnSignUpWithEmailLink() {
        await signupPage.signUpWithEmailLink.click();     
    }

    async enterSignupEmail(email) {
        await signupPage.signupEmailTextField.setValue(email); 
    }

    async clickOnContinueButton() {
        await expect(signupPage.continueButton).toBeDisplayed(); 
        await signupPage.continueButton.click();     
    }

    async enterSignupPassword(password) {
        await signupPage.signupPasswordTextField.setValue(password); 
    }

    async verifyUserSuccessfullyRegisteredAndRedirectedToWelcomePage() {
        await expect(signupPage.welcomeAboardMsg).toBeDisplayed();   
    }

    async clickOnCreateAccountButton() {
        await expect(logoutPage.createAccountButton).toBeDisplayed(); 
        await logoutPage.createAccountButton.click();     
    }

    async verifyUserAlreadyRegisteredErrorMessageIsDisplayed() {
        await expect(signupPage.alreadyRegisteredErrorMsg).toBeDisplayed();   
    }
    
    
}

module.exports = new LogoutStep();
