const CompanyFormPage = require("../../../pages/CompanyFormPage");
const { getContactPage } = require("../../../pages/ContactPageFactory");
const { createContactUsingFixture, deleteContactUsingFixture } = require("../../../support/helpers/contact");

describe('Contact page com', () => {
  const companyPage = new CompanyFormPage();
  const contactPage = getContactPage('com');

  beforeEach(function () {
    cy.fixture('company').as('companyData');
    cy.login('com');
  });

  it('should create a new contact', function () {
    createContactUsingFixture(contactPage, companyPage);
  });

  it('should delete the contact', function () {
    deleteContactUsingFixture(contactPage);
  });
});
