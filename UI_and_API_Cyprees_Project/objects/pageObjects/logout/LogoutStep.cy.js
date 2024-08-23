import logoutStepPageData from './LogoutPage.json';

class LogoutStep {
    // Constructor to set up data
    constructor() {
        this.cssSelectors = logoutStepPageData.css_selectors;
        this.textSelectors = logoutStepPageData.text_selectors;
    }

    verifyHubPage() {
        cy.get("span").contains(this.textSelectors.verifyYourProfileToUnlockAllFeaturesOption).should("be.visible")
    }    

    clickOnHubButton() {
        cy.get(this.cssSelectors.hubBtn).should("be.visible").click();
    }

    clickOnSigninButton() {
        cy.get("button").contains(this.textSelectors.signOutBtn).should("be.visible").click();
    }

}

export default LogoutStep;