const { visitByDomain } = require("./maps/visitByDomains");

class BaseContactPage {
    constructor(domain, paths) {
      this.domain = domain;
      this.urlPath = paths.contact;
      this.newContactPath = paths.newContact;
    }

    visitContactList() {
      const visitFn = visitByDomain[this.domain];
      if (!visitFn) {
        throw new Error(`Unsupported domain: ${this.domain}`);
      }
      visitFn(this.urlPath);
    }

    clickCreateContact() {
      cy.get('button[data-analytics-id="contactsTable.buttons.addContact"]').click();
    }

    deleteContact(contactName) {
      this.visitContactList();
      cy.contains('tr', contactName)
        .within(() => {
          cy.get('button[data-analytics-id="icon-trash-alt"]').click({ force: true });
        });
      cy.get('button[data-analytics-id="confirmButtonTitle"]').click();
      cy.contains('tr', contactName).should('not.exist');
    }

    assertOnCreateContactPage() {
        cy.url().should('include', this.newContactPath);
        cy.get('h1').contains('Nový kontakt').should('be.visible');
    }
  }
  
  module.exports = BaseContactPage;