const loginStep = require('../../pageobjects/login/login.step.js');
const logoutStep = require('../../pageobjects/logout/logout.step.js');

describe('Logout functionality', () => {
    const loginEmail = process.env.LOGIN_EMAIL;
	const loginPassword = process.env.LOGIN_PASSWORD;
    
    it('Verify that user is able to logout successfully', async () => {
		await loginStep.launchApp();
		await loginStep.clickOnSigninButton();
		await loginStep.verifySigninPageTitle();
        await loginStep.login(loginEmail, loginPassword);
        await loginStep.clickOnSigninButton();
		await loginStep.clickOnPermissionPopupAllowButton();
        await loginStep.verifyUserLoggedInSuccessfully();
        await logoutStep.clickOnProfileIcon();
        await logoutStep.clickOnLogoutButton()
        await logoutStep.verifyUserLoggedoutSuccessfully()
    });

});
