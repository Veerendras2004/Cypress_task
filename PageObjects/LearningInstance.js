// You typically don't need to import cypress-iframe here if it's in support/e2e.js
// If you're explicitly importing, ensure the path is correct
// import 'cypress-iframe';

class LearningInstance {
    // Selectors
    lnkAI = "button[title='AI']";
    lnkDocAuto = "a[title='Document Automation']";
    btnCreateLearningInstance = "button[aria-label='Create Learning Instance']";
     btnCreateFinal = "button[aria-label='Create']";
    
    // NEW: Selector for the description field, assuming it's an optional text area.
    // Make sure this matches your actual element if you plan to use it.
    txtLearningInstanceDescription = "textarea[data-cy='li-description-input']"; 
    
    txtLearningInstanceName = "input[name='name']";
 selDocumentType = "button[data-path='RioSelectInputQuery.toggle-button']"; 
 btnnext="button[name='submit']";
    // Selector for the iframe itself
    iframeSelector = "iframe.modulepage-frame"; // Based on your provided XPath

    /**
     * Navigates to the Learning Instances page.
     * This method handles clicking the 'AI' button and then the 'Document Automation' link.
     * It uses {force: true} to overcome persistent 'element covered' issues for lnkDocAuto.
     * Includes iframe handling for the 'Create Learning Instance' button.
     */
    navigateToLearningInstances() {
        cy.log("Attempting to navigate to Learning Instances via AI...");

        cy.get(this.lnkAI, { timeout: 10000 }).click();
        cy.log("Clicked 'AI'.");

        cy.log("Attempting to click 'Document Automation' with force: true due to persistent covering element...");
        cy.get(this.lnkDocAuto, { timeout: 10000 })
            .should('be.visible')
            .click({ force: true });
        cy.log("Force-clicked 'Document Automation'.");

        cy.url({ timeout: 20000 }).should('include', '/learning-instances');
        cy.log("Successfully navigated to Learning Instances page.");

        cy.log("Switching to iframe context and waiting for 'Create Learning Instance' button...");
        cy.iframe(this.iframeSelector, { timeout: 20000 })
            .find(this.btnCreateLearningInstance, { timeout: 10000 })
            .should('be.visible')
            .log("'Create Learning Instance' button is now visible inside iframe.");
    }

    /**
     * Clicks the 'Create Learning Instance' button.
     * This method now handles finding the button within the iframe context.
     */
    clickCreateLearningInstance() {
        cy.log("Attempting to click 'Create Learning Instance' button (inside iframe)...");
        cy.iframe(this.iframeSelector, { timeout: 10000 }).then($iframeBody => {
            cy.wrap($iframeBody).find(this.btnCreateLearningInstance, { timeout: 10000 })
                .click().click();
            cy.log("Clicked 'Create Learning Instance' button inside iframe.");
        });
    }

    /**
     * Enters the learning instance name and optionally description.
     * Assumes these input fields are within the same iframe where 'Create Learning Instance' button was clicked.
     * @param {string} name - The name for the learning instance.
     * @param {string} [description] - Optional description for the learning instance.
     */
 
    enterLearningInstanceDetails(name) {
        cy.log(`Entering Learning Instance Name: "${name}" (inside iframe)...`);
        
        // 1. Switch to the iframe's context
        cy.iframe(this.iframeSelector, { timeout: 10000 }).then($iframeBody => {
            // 2. Now, find the input field within the iframe's body (using cy.wrap($iframeBody).find())
            cy.wrap($iframeBody).find(this.txtLearningInstanceName, { timeout: 10000 })
                .should('be.visible') // Ensure the input field is visible within the iframe
                .type(name);          // Type the provided 'name' (e.g., "test") into the field
            cy.log(`Entered name: "${name}"`);

            // If you uncomment txtLearningInstanceDescription later, it would also need to be inside this iframe context:
            // cy.wrap($iframeBody).find(this.txtLearningInstanceDescription, { timeout: 10000 }).should('be.visible').type(description);
        });
        cy.log("Learning instance details entered.");
    }
    
     clicknextButton() {
        cy.log("Attempting to click the next button (inside iframe)...");
        cy.iframe(this.iframeSelector, { timeout: 10000 }).then($iframeBody => {
            cy.wrap($iframeBody).find(this.btnnext, { timeout: 10000 })
                .should('be.visible') // Ensure the button is visible within the iframe
                .click();
            cy.log("Clicked next button inside iframe.");
        });
        cy.wait(1000); // Small wait after clicking next, if needed for next section to load
    }

    createLearningInstance() {
        cy.log("Attempting to click the final 'Create' button (inside iframe)...");
        cy.iframe(this.iframeSelector, { timeout: 10000 }).then($iframeBody => {
            cy.wrap($iframeBody).find(this.btnCreateFinal, { timeout: 10000 })
                .should('be.visible') // Ensure the button is visible within the iframe
                .click();
            cy.log("Clicked final 'Create' button inside iframe.");
        });
        cy.wait(2000); // Small wait after clicking create, for submission/redirect
    }


}

export default LearningInstance;