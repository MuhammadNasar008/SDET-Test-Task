import LoginStep from '../../../objects/pageObjects/login/LoginStep.cy';
import SignupStep from '../../../objects/pageObjects/signup/SignupStep.cy';
import commonData from '../../fixtures/common.json';

describe('Login Tests', () => {
    const loginStep = new LoginStep();
    const signupStep = new SignupStep();

    const password =commonData.LOGIN_PASSWORD;
    const email =commonData.LOGIN_EMAIL;

    beforeEach(() => {
        loginStep.visitLoginPage();
    });

    it('Verify that a user can successfully login when all mandatory fields are filled with valid data.', () => {
        signupStep.verifyLoginPage();
        loginStep.clickOnAcceptCookesPopupButton();
        loginStep.enterLoginEmail(email);
        loginStep.enterLoginPassword(password);
        loginStep.clickOnSignInButton();
        signupStep.verifyUserLoggedIn()
    });

});