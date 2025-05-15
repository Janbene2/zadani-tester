function deleteContactUsingFixture(contactPage, fixtureAlias = 'companyData') {
    cy.get(`@${fixtureAlias}`).then((data) => {
        contactPage.deleteContact(data.name);
    });
}

function createContactUsingFixture(contactPage, companyPage, fixtureAlias = 'companyData') {
    cy.get(`@${fixtureAlias}`).then((data) => {
        contactPage.visitContactList();
        contactPage.clickCreateContact();
        contactPage.assertOnCreateContactPage();
        companyPage.fillForm(data);
        companyPage.submit();
        companyPage.assertSuccess(data.name);
    });
}

module.exports = { deleteContactUsingFixture, createContactUsingFixture };