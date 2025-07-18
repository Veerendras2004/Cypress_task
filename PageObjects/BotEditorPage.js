class BotEditorPage {
    // Locator for the Actions panel search input
    txtActionsSearch = "input[placeholder='Search actions']";

    // Locator for the 'Message Box' action in the actions list after searching
    actionMessageBox = "span[title='Message box']";

    // Locator for the message box input field in the properties panel that appears
    txtMessageBoxContent = "div[placeholder='Required'][name='content']";

    // Locator for the 'Save' button in the bot editor
    btnSaveBot = "button[name='save']"; 

    // Locator for the close modal button after saving
    btnCloseModal = "button[name='close']";

    // NEW LOCATOR: Button to leave the page (after close)
    btnLeavepage = "button[name='accept']"; // Verify this selector, could also be 'button:contains("Leave")' or similar

    GoHomepage="a[title='Home']";

    /**
     * Adds the 'Message Box' action to the bot and configures its content.
     * @param {string} message The text content for the message box.
     */
    addMessageBoxAction(message) {
        cy.log("Attempting to add Message Box action...");

        // 1. Type 'Message Box' into the actions search box
        cy.get(this.txtActionsSearch, { timeout: 10000 })
          .should('be.visible')
          .clear() // Clear any existing text
          .type('Message Box');
        cy.log("Typed 'Message Box' into actions search.");

        // 2. Select (click) the 'Message Box' action from the search results
        cy.wait(1000); // Small wait to allow search results to render
        cy.get(this.actionMessageBox, { timeout: 10000 })
          .should('be.visible') // Ensure it's visible after search
          .click();
        cy.log("Selected 'Message Box' action.");

        // 3. Type the desired message into the message box content input field
        cy.get(this.txtMessageBoxContent, { timeout: 10000 })
          .should('be.visible') // Ensure the input field appears in the properties panel
          .clear() // Clear any default text
          .type(message);
        cy.log(`Typed message: "${message}" into Message Box content.`);
    }

    /**
     * Clicks the save button to save the bot.
     */
    saveBot() {
        cy.log("Attempting to save the bot...");
        cy.get(this.btnSaveBot, { timeout: 10000 })
          .should('be.enabled') // Ensure the save button is enabled
          .click();
        cy.log("Clicked save bot button.");
    }

    /**
     * Clicks the close button on a modal/dialog (e.g., after save).
     */
    clickCloseButton() {
        cy.log("Attempting to click the close button...");
        cy.get(this.btnCloseModal, { timeout: 10000 }).should('be.visible').click();
        cy.log("Clicked close button.");
        cy.wait(1000); // Small wait after clicking close, before next popup
    }

    /**
     * Clicks the "Leave page" or "Accept" button on a confirmation dialog.
     */
    clickLeavePage() {
        cy.log("Attempting to click the 'Leave page' button...");
        cy.get(this.btnLeavepage, { timeout: 10000 }).should('be.visible').click();
        cy.log("Clicked 'Leave page' button.");
        cy.wait(2000); // Wait for navigation to complete after leaving the page
    }

    clickHomepage() {
       cy.log("Homepage");
        cy.get(this.GoHomepage, { timeout: 10000 }).should('be.visible').click();
        cy.log("Clicked Home button");
        cy.wait(2000); // Wait for navigation to complete after leaving the page
    }
}

export default BotEditorPage;