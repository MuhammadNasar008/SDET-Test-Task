import loginPageData from './LoginPage.json';

class LoginStep {
    // Constructor to set up data
    constructor() {
        this.cssSelectors = loginPageData.css_selectors;
        this.testData = loginPageData.testData;
    }

    // Method to visit the login page
    visitLoginPage() {
        cy.visit('/'); // Adjust the path as necessary
    }

    enterLoginEmail(email) {
        cy.get(this.cssSelectors.loginEmailInput).should("be.visible").type(email)
    }

    enterLoginPassword(password) {
        cy.get(this.cssSelectors.loginPasswordInput).should("be.visible").type(password)
    }    

    clickOnSignInButton() {
        cy.get(this.cssSelectors.signInBtn).should("be.visible").click();
    }

    clickOnAcceptCookesPopupButton() {
        cy.get(this.cssSelectors.acceptCookesPopupBtn).should("be.visible").click();
    }
    

}

export default LoginStep;