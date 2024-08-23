import LoginStep from '../../../objects/pageObjects/login/LoginStep.cy';
import SignupStep from '../../../objects/pageObjects/signup/SignupStep.cy';
import LogoutStep from '../../../objects/pageObjects/logout/LogoutStep.cy';
import commonData from '../../fixtures/common.json';

describe('Logout Tests', () => {
    const loginStep = new LoginStep();
    const signupStep = new SignupStep();
    const logoutStep = new LogoutStep();

    // Generate a random number for the email
    const randomNum = Math.floor(Math.random() * 10000); // Generates a random number between 0 and 9999
    const email = `muhammadnasarqa+${randomNum}@gmail.com`;
    const password = "Test@123";

    beforeEach(() => {
        loginStep.visitLoginPage();
    });

    it('Verify that a user can successfully register when all mandatory fields are filled with valid data.', () => {
        signupStep.verifyLoginPage();
        loginStep.clickOnAcceptCookesPopupButton();
        signupStep.clickOnSignupLink();
        signupStep.enterSignupFirstName("Muhammad");
        signupStep.enterSignupLastName("Test");
        signupStep.enterSignupEmail(email);
        signupStep.enterSignupPassword(password);
        signupStep.clickOnSignUpCreateAccountButton();
        signupStep.verifyUserLoggedIn();
    });

    it('Verify that an error message is displayed when a user attempts to register with an already registered email.', () => {
        signupStep.verifyLoginPage();
        loginStep.clickOnAcceptCookesPopupButton();
        signupStep.clickOnSignupLink();
        signupStep.enterSignupFirstName("Muhammad");
        signupStep.enterSignupLastName("Test");
        signupStep.enterSignupEmail(commonData.LOGIN_EMAIL);
        signupStep.enterSignupPassword(commonData.LOGIN_PASSWORD);
        signupStep.clickOnSignUpCreateAccountButton();
        signupStep.verifyEmailIsAlreadyRegisteredErrorMessageIsDisplayed();
    });

});