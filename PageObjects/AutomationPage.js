class AutomationPage {
    btnCreateNewBot = "span[title='Create a bot…']"; 
    txtBotName = "input[placeholder='Required'][name='name']"; 
    btnCreateAndEdit = "button[name='submit']"; 

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

    
}

export default AutomationPage;
