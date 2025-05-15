const { visitByDomain } = require("./maps/visitByDomains");

class LoginPage {
    constructor(config, domain) {
      this.config = config;
      this.domain = domain;
    }
  
    visit() {
      const visitFn = visitByDomain[this.domain];
      if (!visitFn) {
        throw new Error(`Unsupported domain: ${this.domain}`);
      }
      visitFn(this.config.url);
    }
  
    fillCredentials(email, password) {
      cy.get(this.config.email).should('be.visible').clear().type(email);
      cy.get(this.config.password).should('be.visible').clear().type(password);
    }

    submit() {
      cy.get(this.config.submit).should('be.visible').and('not.be.disabled').click();
      cy.url({ timeout: 10000 }).should('include', this.config.redirect);
    }
  
    login(email, password) {
      this.visit();
      
      cy.get('body').then(($body) => {
        if ($body.find('button[data-analytics-id="signIn.v2.login"]').length) {
          cy.get('button[data-analytics-id="signIn.v2.login"]').click();
        } else {
          cy.log('Login button not present, skipping click');
        }
      });      
      this.fillCredentials(email, password);
      this.submit();
    }
  }

  module.exports = { LoginPage };