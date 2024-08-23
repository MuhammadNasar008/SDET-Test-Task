import signupStepPageData from './SignupPage.json';

class SignupStep {
    // Constructor to set up data
    constructor() {
        this.cssSelectors = signupStepPageData.css_selectors;
        this.textSelectors = signupStepPageData.text_selectors;
    }

    enterSignupFirstName(firstName) {
        cy.get(this.cssSelectors.firstNameInput).should("be.visible").type(firstName)
    }

    enterSignupLastName(lastName) {
        cy.get(this.cssSelectors.lastNameInput).should("be.visible").type(lastName)
    }

    enterSignupEmail(email) {
        cy.get(this.cssSelectors.emailInput).should("be.visible").type(email)
    }

    enterSignupPassword(password) {
        cy.get(this.cssSelectors.passwordInput).should("be.visible").type(password)
    }

    verifyLoginPage() {
        cy.reload()
        cy.get("h1").contains(this.textSelectors.loginPage).should("be.visible")
    }    

    verifyEmailIsAlreadyRegisteredErrorMessageIsDisplayed() {
        cy.get("p").contains(this.textSelectors.emailIsAlreadyRegisteredErrorMsg).should("be.visible")
    }    
    

    clickOnSignupLink() {
        cy.get("a").contains(this.textSelectors.signupLink).should("be.visible").click()
    }    

    verifyUserLoggedIn() {
        cy.get("h3").contains(this.textSelectors.welcomeToAmegaPage).should("be.visible")
    }    
    
    
    clickOnSignUpCreateAccountButton() {
        cy.get(this.cssSelectors.createAccountBtn).should("be.visible").click();
    }

}

export default SignupStep;