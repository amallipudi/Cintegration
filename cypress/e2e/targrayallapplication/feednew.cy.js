describe('FEEDSTOCK CONTRACT Application', () => {
    beforeEach(() => {
    cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
    cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
    })
  it('FEEDSTOCK CONTRACT Application', () => {
    cy.get('#lnkbtnAdd').click()
    cy.get('#txtBxDealTitle').type("sdffdshfdhuuhn")
  })
})
