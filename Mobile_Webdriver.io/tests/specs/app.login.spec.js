const loginStep = require('../../pageobjects/login/login.step.js');

describe('Login functionality', () => {
	const loginEmail = process.env.LOGIN_EMAIL;
	const loginPassword = process.env.LOGIN_PASSWORD;
    
    it('Verify that a user can successfully login when all mandatory fields are filled with valid data', async () => {
		await loginStep.launchApp();
		await loginStep.clickOnSigninButton();
		await loginStep.verifySigninPageTitle();
        await loginStep.login(loginEmail, loginPassword);
        await loginStep.clickOnSigninButton();
		await loginStep.clickOnPermissionPopupAllowButton();
        await loginStep.verifyUserLoggedInSuccessfully();
    });

});
