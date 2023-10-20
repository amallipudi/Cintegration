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
   cy.get('#lnkSaveDeal').click() // Save Deal
   cy.get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn').click()
   cy.get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click({force: true})
   cy.get('#tbxDocumentNotes').type('Companies may also evaluate product quality based on various')//Documents notes
   cy.get('#cphContent_fuUploadDocuments').attachFile('ramsita.jpg')
   cy.get('#btnUpload').click()///Upload documents
   cy.get('#lnkUpdateDeal').click()// Save as draft

   //strip edit
   cy.get('#lnkbtnEditDetails > .far').click()
   //cy.get('#lnkbtnEditDetails > .far').click()  // ADD NEW STRIP
   cy.get('#tbxStartDate').type('2023-03-16').click({force: true}) //Start Date
   cy.get('#tbxEndDate').type('2023-03-20').click({force: true})  //End Date
   cy.get('#txtTitleTansferCity').type(' NEW DELHI INDIA') //Title Transfer City
   cy.get(':nth-child(3) > :nth-child(2) > .form-line > .btn-group > .btn').click()  //Title Transfer Country
   cy.get(':nth-child(3) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect').click()
   //cy.get('#txtVolQuantity').type("9{force: true} ")  //Quantity

   cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .btn').click() //Unit Of Measure
   cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()

   cy.get(':nth-child(3) > :nth-child(5) > .form-line > .btn-group > .btn').click()  //Volume Tolerance
   cy.get(':nth-child(3) > :nth-child(5) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect').click()

   cy.get(':nth-child(4) > :nth-child(1) > .form-line > .btn-group > .btn').click()  //Inco Terms
   cy.get(':nth-child(4) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="6"] > .waves-effect').click()
   cy.get('#tbxIncoTermsCity').type('SOUTH AFRICA')  //Inco Terms City
   cy.get('#cphContent_SaleIncoTerm > .form-line > .btn-group > .btn') .click() //Inco Terms Country
   cy.get('#cphContent_SaleIncoTerm > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get('#tbxQualityOfCargo').type('Very nice 100% good quality og cargo')  //Quality of Cargo
   cy.get('#lnkUpdateStrip').click()  // Update strip
   //PRICING
   //cy.get('#txtBxFixedPrice').type("77")  //Fixed Price
   cy.get('#cphContent_divFixedPriceRowOne > :nth-child(2) > .form-line > .btn-group > .btn').click()  //Fixed Price Currency
   cy.get('#cphContent_divFixedPriceRowOne > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get('#cphContent_divFixedPriceRowOne > :nth-child(3) > .form-line > .btn-group').click()  //Unit of Measure
   cy.get('#cphContent_divFixedPriceRowOne > :nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get('#lnkbtnAddPricing').click  //Add pricing click
   //frieght 
   cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn').click()  //Transport Mode
   cy.get(':nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > .selected > .waves-effect').click()
   cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .form-line > .btn-group > .btn').click()  //Packaging
   cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect').click()
   //cy.get('#txtFreightCost').type("77") //Freight Cost
   cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .btn').click()  //Freight Cost Per
   cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(2) > :nth-child(5) > .form-line > .btn-group > .btn').click()  //Freight Cost Currency
   cy.get(':nth-child(5) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get('#tbxFromLocation').type('india')  //From Location
   cy.get('#tbxToLocation').type('south africa')  //TO Location
   cy.get(':nth-child(1) > label').click()  //Carrier Invoices TargrayYES
   //cy.get(':nth-child(2) > label')  //Carrier Invoices TargrayNO
   cy.get('#lnkbtnAddTransport').click()  // ADD FRIEGHT CLICK
   //DOCUMENT
   cy.get('.col-lg-4 > .form-line > .btn-group > .btn').click()  //DOCUMENT TYPE
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="0"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="5"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="6"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="7"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="8"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="9"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="10"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="11"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="12"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="13"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="14"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="15"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="16"] > .waves-effect').click()
   cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="17"] > .waves-effect').click()
   cy.get('#lnkbtnAddUpdateDocument').click()  //ADD DOCUMENTS
   cy.get(':nth-child(1) > :nth-child(2) > #txtDocumentCost').type("77")
   cy.get(':nth-child(1) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(1) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(1) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(1) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT
   cy.get(':nth-child(2) > :nth-child(2) > #txtDocumentCost').type("78")
   cy.get(':nth-child(2) > :nth-child(3) > .btn-group > .btn').click()
    
   cy.get(':nth-child(2) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(2) > :nth-child(4) > .btn-group > .btn').click()
   cy.get(':nth-child(2) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(2) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(2) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT2
   cy.get(':nth-child(3) > :nth-child(2) > #txtDocumentCost').type("NA").click()
   cy.get(':nth-child(3) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(3) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(3) > :nth-child(4) > .btn-group > .btn').click()
   cy.get(':nth-child(3) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   //cy.get(':nth-child(3) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect')
   cy.get(':nth-child(3) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(3) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT3
   cy.get(':nth-child(4) > :nth-child(2) > #txtDocumentCost').type("44")
   cy.get(':nth-child(4) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(4) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(4) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(4) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(4) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(4) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(4) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT4
   cy.get(':nth-child(5) > :nth-child(2) > #txtDocumentCost').type("55")
   cy.get(':nth-child(5) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(5) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(5) > :nth-child(4) > .btn-group > .btn').click()
   cy.get(':nth-child(5) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   //cy.get(':nth-child(5) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect')
   cy.get(':nth-child(5) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(5) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT5
   //cy.get('#lnkbtnDeleteDocumentModal').click()
   //cy.get('[data-notify="message"]').should('have.text','Document line deleted successfully.')
   cy.get(':nth-child(6) > :nth-child(2) > #txtDocumentCost').type("66")
   cy.get(':nth-child(6) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(6) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(6) > :nth-child(4) > .btn-group > .btn').click()
   cy.get(':nth-child(6) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(6) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT6
   cy.get(':nth-child(7) > :nth-child(2) > #txtDocumentCost').type("77")
   cy.get(':nth-child(7) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(7) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(7) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(7) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(7) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(7) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(7) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT7
   cy.get(':nth-child(8) > :nth-child(2) > #txtDocumentCost').type("88")
   cy.get(':nth-child(8) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(8) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(8) > :nth-child(4) > .btn-group > .btn').click()
   cy.get(':nth-child(8) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   //cy.get(':nth-child(8) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect')
   cy.get(':nth-child(8) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(8) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT8
   cy.get(':nth-child(9) > :nth-child(2) > #txtDocumentCost').type("99")
   cy.get(':nth-child(9) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(9) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(9) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(9) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(9) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(9) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(9) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT9
   cy.get(':nth-child(10) > :nth-child(2) > #txtDocumentCost').type("100")
   cy.get(':nth-child(10) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(10) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(10) > :nth-child(4) > .btn-group > .btn').click()
   cy.get(':nth-child(10) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   //cy.get(':nth-child(10) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect')
   cy.get(':nth-child(10) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(10) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT10
   cy.get(':nth-child(11) > :nth-child(2) > #txtDocumentCost').type("111")
   cy.get(':nth-child(11) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(11) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(11) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(11) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(11) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(11) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(11) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT11
   cy.get(':nth-child(12) > :nth-child(2) > #txtDocumentCost').type("112")
   cy.get(':nth-child(12) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(12) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(12) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(12) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(12) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(12) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(12) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT12
   cy.get(':nth-child(13) > :nth-child(2) > #txtDocumentCost').type("113")
   cy.get(':nth-child(13) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(13) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(13) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(13) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(13) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(13) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(13) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT13
   //cy.get('#lnkbtnDeleteDocumentModal').click()
   //cy.get('[data-notify="message"]').should('have.text','Document line deleted successfully.')
   cy.get(':nth-child(14) > :nth-child(2) > #txtDocumentCost').type("114")
   cy.get(':nth-child(14) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(14) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(14) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(14) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(14) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(14) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(14) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT14
   cy.get(':nth-child(15) > :nth-child(2) > #txtDocumentCost').type("115")
   cy.get(':nth-child(15) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(15) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(15) > :nth-child(4) > .btn-group > .btn').click()
   //cy.get(':nth-child(15) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(15) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect').click()
   cy.get(':nth-child(15) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(15) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT15
   cy.get(':nth-child(16) > :nth-child(2) > #txtDocumentCost').type("116")
   cy.get(':nth-child(16) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(16) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(16) > :nth-child(4) > .btn-group > .btn')
   //cy.get(':nth-child(16) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect')
   cy.get(':nth-child(16) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect').click()
   cy.get(':nth-child(16) > :nth-child(5) > #lnkbtnDocumentSave').click()
   //cy.get(':nth-child(16) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT16
   cy.get(':nth-child(17) > :nth-child(2) > #txtDocumentCost').type("117")
   cy.get(':nth-child(17) > :nth-child(3) > .btn-group > .btn').click()
   cy.get(':nth-child(17) > :nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
   cy.get(':nth-child(17) > :nth-child(4) > .btn-group > .btn').click()
   cy.get(':nth-child(17) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect').click()
  // cy.get(':nth-child(17) > :nth-child(4) > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect')
   cy.get(':nth-child(17) > :nth-child(5) > #lnkbtnDocumentSave').click()
   cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')
   //cy.get(':nth-child(17) > :nth-child(5) > #lnkbtnDeleteCancelDetails > .far').click()  //DELETE DOCUMENT17
   cy.get('#cphContent_Back').click()  //GOTO MANAGE DEAL PAGE
  } )
} )