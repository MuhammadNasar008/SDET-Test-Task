import LoginStep from '../../../objects/pageObjects/login/LoginStep.cy';
import SignupStep from '../../../objects/pageObjects/signup/SignupStep.cy';
import LogoutStep from '../../../objects/pageObjects/logout/LogoutStep.cy';
import commonData from '../../fixtures/common.json';

describe('Logout Tests', () => {
    const loginStep = new LoginStep();
    const signupStep = new SignupStep();
    const logoutStep = new LogoutStep();

    const password =commonData.LOGIN_PASSWORD;
    const email =commonData.LOGIN_EMAIL;

    beforeEach(() => {
        loginStep.visitLoginPage();
    });

    it('Verify that user is able to logout successfully', () => {
        signupStep.verifyLoginPage();
        loginStep.clickOnAcceptCookesPopupButton();
        loginStep.enterLoginEmail(email);
        loginStep.enterLoginPassword(password);
        loginStep.clickOnSignInButton();
        signupStep.verifyUserLoggedIn();
        logoutStep.clickOnHubButton();
        logoutStep.verifyHubPage();
        logoutStep.clickOnSigninButton();
        signupStep.verifyLoginPage();
    });

});