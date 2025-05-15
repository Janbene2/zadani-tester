const CompanyFormPage = require("../../../pages/CompanyFormPage");
const { getContactPage } = require("../../../pages/ContactPageFactory");
const { deleteContactUsingFixture, createContactUsingFixture } = require("../../../support/helpers/contact");

describe('Contact page sk', () => {
  const companyPage = new CompanyFormPage();
  const contactPage = getContactPage('sk');

  beforeEach(function () {
    cy.fixture('company').as('companyData');
    cy.login('sk');
  });

  it('should create a new contact', function () {
    createContactUsingFixture(contactPage, companyPage);
  });

  it('should delete the contact', function () {
    deleteContactUsingFixture(contactPage);
  });
});
