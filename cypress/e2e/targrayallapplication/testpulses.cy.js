describe('PULSES CONTRACT Application', () => {
    beforeEach(() => {
      cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
      cy.visit("http://web04/TEST-TPSContractManagement/Pages/Deals")
    })
   // afterEach (() => {
     // cy.screenshot()
    
    //})
  it('PULSES CONTRACT Application', () => {
    
    cy.get('#lnkbtnAdd').click(); // ADD NEW DEAL
    cy.get('.p-l-5 > .btn-group > .btn > .filter-option').click(); // Great Plains Company
    cy.get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();

    cy.get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').click(); // deal type

   cy.get('#txtBxDealTitle').type("TESTING TARGRAY -PULSES  CONTRACT Application By ANANDA MALLIPUDI") // TITLE
   cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();  // Governing law 
   cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();

   cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click(); // Trading Rules
   cy.get(':nth-child(3) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click();
    
   cy.get('#cphContent_rblImporter > tbody > tr > :nth-child(1) > label').click() // Import records of targray yes
   //cy.get('#cphContent_rblImporter > tbody > tr > :nth-child(2) > label').click()  // Import records of targray No

   cy.get('#txtBxDealNotes').type("TESTING TARGRAY -PULSES  CONTRACT Application By ANANDA MALLIPUDI")  //Notes
   cy.get('#tbxOtherTermsConditions').type("TESTING TARGRAY -PULSES  CONTRACT Application By ANANDA MALLIPUDI") //Other Contract Conditions
   //Brker start
    cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(1)').click()  //Broker yes radio button
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .btn').click()  //Broker
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("doni{enter}")
    //cy.get('#txtBxBrokerFee').type("0.154{enter}")  //Broker Fee
    cy.get(':nth-child(3) > .form-line > .btn-group > .btn')  //Broker Fee Per
    cy.get(':nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click({force: true})
    cy.get(':nth-child(3) > .form-line > .btn-group > .btn').click()  //Currency
    cy.get(':nth-child(4) > .form-line > .btn-group > .open > .dropdown-menu > .selected > a').click({force: true})
    cy.get('#txtBxBrokerNotes').type("railBroker Notes")  //Broker Notes
    
     //cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(2)')//Broker NO radio button
   //CUSTOMER START
cy.get('#tbxGPCustomer').type("ONTARIO").click()
cy.xpath("//*[contains(text(),'100340 : 2628364 ONTARIO INC DBA ANALOGUE MEDIA MANUFACTURING')]").click()
cy.get('#rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label').click().wait(400).click()
cy.get('#txtBxCustomerPaymentTermsOverrideNotes').type("TESTING TARGRAY -PULSES  CONTRACT Application By ANANDA MALLIPUDI")
  //Product start
   cy.get(':nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn').click()  //Origin of Product
   cy.get(':nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("cana{enter}")
   cy.get(':nth-child(2) > :nth-child(2) > .form-line > .btn-group > .btn')  //Product
   cy.get(':nth-child(2) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click({force: true})
   cy.get('#tbxCargoSpecification').type("TESTING TARGRAY -PULSES  CONTRACT Application By ANANDA MALLIPUDI")  //Specification of Cargo
  // cy.get('#lnkSaveDeal').click() // Save Deal
  })
})