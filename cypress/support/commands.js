const { getLoginPage } = require('../pages/LoginPageFactory');
const { loginConfig } = require('./loginConfig');

  Cypress.Commands.add('visitOnDomain', (args, domain = Cypress.env('CURRENT_DOMAIN')) => {
    const customVisitCommand = `visit${domain.charAt(0).toUpperCase()}${domain.slice(1)}`;
    cy[customVisitCommand](args);
  });

  Cypress.Commands.add('visitCz', (args) => {
    cy.visit(`https://staging.fakturaonline.cz${args}`);
  });

  Cypress.Commands.add('visitCom', (args) => {
    cy.visit(`https://staging.invoiceonline.com${args}`);
  });

  Cypress.Commands.add('visitSk', (args) => {
    cy.visit(`https://staging.fakturaonline.sk${args}`);
  });

  Cypress.Commands.add('login', (domainArg) => {
    const domain = domainArg || Cypress.env('CURRENT_DOMAIN');
    if (!domain) {
      throw new Error(
        'Login failed: Domain was not passed or set in CYPRESS_ENV (e.g. CURRENT_DOMAIN=cz)'
      );
    }
    const config = loginConfig[domain];
    if (!config) {
      throw new Error(`Login: Domain "${domain}" is not supported in loginConfig.js`);
    }
    const email = Cypress.env('USER_EMAIL');
    const password = Cypress.env('USER_PASSWORD');
    expect(email, 'USER_EMAIL není definován').to.be.a('string').and.not.be.empty;
    expect(password, 'USER_PASSWORD není definováno').to.be.a('string').and.not.be.empty;
    const page = getLoginPage(domain);
    page.login(email, password);
  });