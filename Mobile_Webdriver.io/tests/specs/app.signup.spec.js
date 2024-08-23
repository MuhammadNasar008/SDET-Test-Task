const loginStep = require('../../pageobjects/login/login.step.js');
const signupStep = require('../../pageobjects/signup/signup.step.js');

describe('Sign up functionality', () => {

    afterEach(async () => {
        await driver.reloadSession();
    });
        it('Verify that a user can successfully register when all mandatory fields are filled with valid data.', async () => {
            await loginStep.launchApp();
            await signupStep.clickOnCreateAccountButton();
            await signupStep.clickOnSignUpWithEmailLink();
    
            // Generate a random number for the email
            const randomNum = Math.floor(Math.random() * 10000); // Generates a random number between 0 and 9999
            const email = `muhammadnasarqa+${randomNum}@gmail.com`;
    
            await signupStep.enterSignupEmail(email);
            await signupStep.clickOnContinueButton();
            await signupStep.enterSignupPassword('Test@123');
            await signupStep.clickOnContinueButton();
            await loginStep.clickOnPermissionPopupAllowButton();
            await signupStep.verifyUserSuccessfullyRegisteredAndRedirectedToWelcomePage();
        });
    
    
        it('Verify that an error message is displayed when a user attempts to register with an already registered email.', async () => {
            const loginEmail = process.env.LOGIN_EMAIL;
            const loginPassword = process.env.LOGIN_PASSWORD;
    
            await loginStep.launchApp();
            await signupStep.clickOnCreateAccountButton();
            await signupStep.clickOnSignUpWithEmailLink();
            await signupStep.enterSignupEmail(loginEmail);
            await signupStep.clickOnContinueButton();
            await signupStep.enterSignupPassword(loginPassword);
            await signupStep.clickOnContinueButton();
            await signupStep.verifyUserAlreadyRegisteredErrorMessageIsDisplayed();
        });  
    });
