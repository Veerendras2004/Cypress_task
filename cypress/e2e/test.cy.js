import Login from "../../PageObjects/LoginPage";
import AutomationPage from "../../PageObjects/AutomationPage";
import BotEditorPage from "../../PageObjects/BotEditorPage";
import LearningInstance from "../../PageObjects/LearningInstance";
require('cypress-iframe');

describe('Login Functionality using POM', () => {

 

  it('LoginTest with POM', () => {
    cy.visit("https://community.cloud.automationanywhere.digital/#/login");

    cy.fixture('example').then((data) => {
      const login = new Login();
      login.setUserName(data.username);
      login.setPassword(data.password);
      login.clickSubmit();
      login.verifyLogin();

      cy.log("✅ Login successful and test completed.");

      const createbot = new AutomationPage;
      createbot.clickCreateNewBot();
      createbot.enterBotName(data.BotName);
      createbot.clickCreateAndEdit();


      const msg = new BotEditorPage;
      msg.addMessageBoxAction(data.messageBoxContent);
      msg.saveBot();
      msg.clickCloseButton();
      msg.clickLeavePage();
      msg.clickHomepage();


      const learn = new LearningInstance;
      learn.navigateToLearningInstances();  
      learn.navigateToLearningInstances();  
      learn.clickCreateLearningInstance();
      learn.enterLearningInstanceDetails(data.LearningInstanceName);
      learn.clicknextButton();
      learn.createLearningInstance();
     
        });
  });


});
