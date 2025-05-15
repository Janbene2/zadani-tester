const visitByDomain = {
    cz: (url) => cy.visitCz(url),
    sk: (url) => cy.visitSk(url),
    com: (url) => cy.visitCom(url),
};

module.exports = { visitByDomain };