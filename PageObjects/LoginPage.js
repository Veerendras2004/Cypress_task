class Login {
  txtUserName = "input[name='username']";
  txtPassword = "input[name='password']";
  btnSubmit = "button[name='submitLogin']";
  lblMsg = ".rio-page__header";

  setUserName(username) {
    cy.get(this.txtUserName, { timeout: 10000 }).should('be.visible').type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword, { timeout: 10000 }).should('be.visible').type(password);
  }

  clickSubmit() {
    cy.get(this.btnSubmit, { timeout: 10000 }).should('be.enabled').click();
  }

  verifyLogin() {
    // Check URL and partial text only for reliability
    cy.url({ timeout: 10000 }).should('include', '/home');
    cy.get(this.lblMsg, { timeout: 10000 }).should('contain.text', 'HELLO, HUMAN™WELCOME TO AUTOMATION ANYWHERE COMMUNITY EDITIONWORLD’S #1 DIGITAL WORKFORCE PLATFORM');
  }
}

export default Login;
