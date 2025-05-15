class CompanyFormPage {
  fillForm(data) {
    cy.get('input[name="invoice_attributes_name"]').clear().type(data.name);
    cy.get('.el-autocomplete-suggestion__list').should('be.visible');
    cy.contains('.el-autocomplete-suggestion li', data.name).click();
    cy.get('input[id="invoice_attributes_company_number"]').should('have.value', data.ico);
    cy.get('input[id="invoice_attributes_tax_number"]').should('have.value', data.dic);
    cy.get('input[type="tel"]').should('have.value', data.phone);
    cy.get('input[id="invoice_attributes_email"]').should('have.value', data.email);
    cy.get('input[id="invoice_attributes_web"]').should('have.value', data.web);
    cy.get('input[id="invoice_attributes_address_attributes_street"]').should('have.value', data.street);
    cy.get('input[id="invoice_attributes_address_attributes_city"]').should('have.value', data.city);
    cy.get('input[id="invoice_attributes_address_attributes_postcode"]').should('have.value', data.zip);
    cy.get('input[id="invoice_contact_attributes_address_attributes_country_code"]').should('have.value', data.country);
    return this;
  }

  submit() {
    cy.get('button[data-analytics-id="contacts.buttons.save"]').click();
    return this;
  }

  clear() {
    cy.get('button[data-analytics-id="contacts.buttons.back"]').click();
    return this;
  }

  assertSuccess(companyName) {
    const message = `Kontakt ${companyName} byl úspěšně uložen.`;
    cy.contains(message).should('be.visible');
    return this;
  }

  assertBack(message = 'Kontakt byl úspěšně smazán.') {
    cy.contains(message).should('be.visible');
    return this;
  }
}

module.exports = CompanyFormPage;