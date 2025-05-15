const CompanyFormPage = require("../../../pages/CompanyFormPage");
const { getContactPage } = require("../../../pages/ContactPageFactory");
const { deleteContactUsingFixture, createContactUsingFixture } = require("../../../support/helpers/contact");

describe('Contact page cz', () => {
  const companyPage = new CompanyFormPage();
  const contactPage = getContactPage('cz');

  beforeEach(function () {
    cy.fixture('company').as('companyData');
    cy.login('cz');
  });

  it('should create a new contact', function () {
    createContactUsingFixture(contactPage, companyPage);
  });

  it('should delete the contact', function () {
    deleteContactUsingFixture(contactPage);
  });
});
