class BotEditorPage {
   
    txtActionsSearch = "input[placeholder='Search actions']";

  
    actionMessageBox = "span[title='Message box']";

   
    txtMessageBoxContent = "div[placeholder='Required'][name='content']";

   
    btnSaveBot = "button[name='save']"; 

    btnCloseModal = "button[name='close']";

  
    btnLeavepage = "button[name='accept']";

    GoHomepage="a[title='Home']";

   
    addMessageBoxAction(message) {
        cy.log("Attempting to add Message Box action...");

     
        cy.get(this.txtActionsSearch, { timeout: 10000 })
          .should('be.visible')
          .clear() 
          .type('Message Box');
        cy.log("Typed 'Message Box' into actions search.");

        
        cy.wait(1000); 
        cy.get(this.actionMessageBox, { timeout: 10000 })
          .should('be.visible') 
          .click();
        cy.log("Selected 'Message Box' action.");

       
        cy.get(this.txtMessageBoxContent, { timeout: 10000 })
          .should('be.visible') 
          .clear()
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
