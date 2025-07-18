class AutomationPage {
    btnCreateNewBot = "span[title='Create a bot…']"; // Inspect to find the correct selector for 'Create new bot' button
    txtBotName = "input[placeholder='Required'][name='name']"; // Inspect the input field for bot name
    btnCreateAndEdit = "button[name='submit']"; // Inspect the 'Create & Edit' or 'Create' button
   // txtActionsSearch = "input[placeholder='Search actions']']";
    //actionMessageBox = "[data-action-name='Message Box']"
    //txtMessageBoxContent = "textarea[data-cy='message-box-content']"

    // Assuming a list of bots where you can verify creation
   // lblBotListRow = ".bot-list-table .ag-row"; // A generic row selector in the bot list table
    
    // Potentially for success message verification
   // lblSuccessMessage = ".toast-message.success"; // Or any specific success notification locator

    clickCreateNewBot() {
        cy.get(this.btnCreateNewBot, { timeout: 10000 }).should('be.visible').click();
    }

    enterBotName(botName) {
        cy.get(this.txtBotName, { timeout: 10000 }).should('be.visible').type(botName);
    }

    clickCreateAndEdit() {
        cy.get(this.btnCreateAndEdit, { timeout: 10000 }).should('be.enabled').click();
        // After clicking, it should navigate to the bot editor page
        cy.url({ timeout: 20000 }).should('include', '/edit'); // Assert navigation to editor
    }

    // Assertion method to check if the bot appears in the list
   // verifyBotCreation(botName) {
        // This assertion might be performed after saving the bot from the editor,
        // and navigating back to the automation page, or refreshing the list.
        // For now, let's assume it checks the presence on the automation page itself.
      //  cy.get(this.lblBotListRow, { timeout: 15000 }).contains(botName).should('be.visible');
        //cy.log(`✅ Bot "${botName}" created successfully.`);
   // }

    // Optional: Check for a temporary success message
   // verifySuccessMessage(messageText) {
     //   cy.get(this.lblSuccessMessage, { timeout: 10000 }).should('contain.text', messageText);
    //}
}

export default AutomationPage;