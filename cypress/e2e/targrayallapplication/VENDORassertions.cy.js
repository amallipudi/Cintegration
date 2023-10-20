describe('NEW VENDOR REQUEST', () => {
    beforeEach(() => {
      cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
      cy.visit("http://web04/TEST-FinanceWorkflow/Pages/VendorRequestList")
      cy.viewport(1536, 720)
    
    })
     it('NEW VENDOR REQUEST SAVE AS DAFRT ', () => {
        cy.get('#cphContent_btnNewVendorRequest').click()
        cy.title().should('eq','New Vendor Request')
        cy.get('.m-t-5 > :nth-child(1) > .form-line > .btn-group > .btn').click()
        cy.get('.m-t-5 > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Batt{enter}")
        cy.get('.m-t-5 > :nth-child(2) > .form-line > .btn-group > .btn').click()
        cy.get('.m-t-5 > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("LMO{enter}")
        cy.get(':nth-child(3) > .form-line > .btn-group > .btn').click()
        cy.get('.m-t-5 > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("ANAND{enter}")
        cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(1) > label').click()
        cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(2) > label').click().wait(500)
        cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(3) > label').click().wait(500)
        cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(4) > label').click().wait(500)
        cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(5) > label').click().wait(500)
        cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(6) > label').click().wait(500)
        cy.get(':nth-child(3) > .btn-group > .btn').click()
        cy.get(':nth-child(3) > .btn-group > .open > .bs-searchbox > .form-control').type("utili{enter}") //vendor information start
        cy.get('#tbxVendorName').type("ananda mohan mallipudi").should('not.have.lengthOf', 102)
        cy.get('#tbxAddress1').type("s/o satya krishna sajjapuram").should('not.have.lengthOf', 102)
        cy.get('#tbxAddress2').type("tanuku d.no:-24-2-3 west godavi").should('not.have.lengthOf', 102)
        cy.get('#tbxCity').type("Tanuku").should('not.have.lengthOf', 102)
        cy.get('#tbxPostal').type("53211").should('not.have.lengthOf', 102)
        cy.get(':nth-child(10) > :nth-child(1) > .form-line > .btn-group > .btn').click()
        cy.get(':nth-child(10) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("aust{enter}")
        cy.get(':nth-child(10) > :nth-child(2) > .form-line > .btn-group > .btn').click()
        cy.get(':nth-child(10) > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("calif{enter}")
        cy.get('.form-line > label').click()
        cy.get('#tbxTaxID').type("ajvpasdfghjkl2151510515147853211").should('not.have.lengthOf', 102)// vendor information end
        cy.get('#tbxContactName').type("ananda mohan mallipudi").should('not.have.lengthOf', 102)//PURCHASING CONTRACT START
        cy.get('#tbxEmailAddress').type("ananda@gmail.com").should('not.have.lengthOf', 102)
        cy.get('#tbxPhone').type("949420365487956698").should('not.have.lengthOf', 102)
        cy.get('#tbxFax').type("anand123654897525631436412304674601426021").should('not.have.lengthOf', 102)//PURCHASING CONTRACT END
        cy.get('#tbxCreditLimit').type("9494203658").should('not.have.lengthOf', 102)//CREDIT LIMIT
        cy.get('#tbxEDCLimit').type("949428").should('not.have.lengthOf', 102)//CREDIT LIMIT
        cy.get('#tbxBeneficiaryName').type("ananda mohan mallipudi").should('not.have.lengthOf', 102)  //BANK START
        cy.get('#tbxBankName').type("state bank of india").should('not.have.lengthOf', 102)
        cy.get('#tbxBankAddress1').type("ananda mohan mallipudi").should('not.have.lengthOf', 102)
        cy.get('#tbxBankAddress2').type("annbvfbhgvbhdebbhjbjn dcjjhbhjanda mohan mallipudi").should('not.have.lengthOf', 102)
        cy.get('#tbxBankCity').type("gurgram").should('not.have.lengthOf', 102)
        cy.get('#tbxBankState').type("new delhi")
        cy.get('#tbxSwift').type("sbin000956984475892").should('not.have.lengthOf', 102)
        cy.get('#tbxBankPostal').type("122001").should('not.have.lengthOf', 102)
        cy.get(':nth-child(7) > :nth-child(2) > .btn-group > .btn').click()
        cy.get(':nth-child(7) > :nth-child(2) > .btn-group > .open > .bs-searchbox > .form-control').type("austri{enter}")
        cy.get('#tbxIban').type("gurgram1235645njnvdjndvjvndhvdjhd4556").should('not.have.lengthOf', 102)//BANK END
        cy.get('#cphContent_pnlcurrncy > .row > :nth-child(1) > .form-line > .btn-group > .btn').click()//payment
        cy.get('#cphContent_pnlcurrncy > .row > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("inr{enter}")//payment
        cy.get('#cphContent_pnlcurrncy > .row > :nth-child(2) > .form-line > .btn-group > .btn').click()//payment
        cy.get('#cphContent_pnlcurrncy > .row > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("1.5/15{enter}")//payment
        cy.get('#cphContent_fuAttachments').attachFile('cypresslogindata.png')//upload file
        cy.get('#cphContent_btnUpload').click()//upload file
        cy.get('[data-notify="message"]').should('have.text','File Uploaded Successfully.')
        cy.get('#tbxFuelLicense').type("targray000956984475892").should('not.have.lengthOf', 102)//biofuels only
        cy.get('#tbxSGPermit').type("targray158790956984475892").should('not.have.lengthOf', 102)//biofuels only
        cy.get('#tbxGST').type("GSTtargray158790956992").should('not.have.lengthOf', 102) // tax data start
        cy.get('#tbxVAT').type("VATtargray09564475892").should('not.have.lengthOf', 102)
        cy.get('#tbxIRS').type("IRSNUMBERtargrAY984475892").should('not.have.lengthOf', 102)
        cy.get('#tbxTaxExempt').type("TAxexemptnumbertargray158790956984475892").should('not.have.lengthOf', 102)
        cy.get('#tbxCounty').type("united states of america i love this country&i love my INDIA ALSO").should('not.have.lengthOf', 202)//TAX DATA END
        cy.get('#tbxNotes').type(" IFC’s Discount Note Program was launched in June 2009 to complement IFC’s Global MTN Program. The program provides an additional funding and liquidity management tool for IFC to support our trade finance and supply chain initiatives, and to expand the availability of short-term local currency finance. Our discount notes offer a high-quality, short-term investment opportunity in U.S. dollar and Chinese renminbi.IFC was the first multilateral institution to launch discount note programs in Chinese renminbi and Turkish lira to eligible institutional investors globally, enabling the regular issuance of offshore discount notes and expanding the availability of short-term local-currency finance.In FY22, IFC issued $7.5 billion under the Global Discount Note Program.Dnomiatedin UD an CNHaturtiesraning overnight to 360 daysMinimum order is $100,000 aggregate face amount per maturity dateUncertified book-entry form  Offered through ten dealersAvailable in bearer form onlySetlemnt vFedwe {enter}").should('not.have.lengthOf', 1102)
        cy.get('#cphContent_btnSaveDraft').click()  ///SAVE DRAFT
        cy.get('[data-notify="message"]').should('have.text','Request saved as Draft')
        cy.get(':nth-child(1) > .black-text').click() //back home page
        cy.get(':nth-child(1) > :nth-child(8) > #lnkbtnEditReq').click()
        cy.get('#cphContent_rblKYCApproved > tbody > tr > :nth-child(1) > label').click()//kyc radio button yes
        cy.get('#cphContent_btnSaveN').click().wait(800)
         cy.get('#cphContent_btnSubmit').click() //SUBMIT BUTTON
        cy.get('[data-notify="message"]').should('have.text','Request Submitted Successfully.')
        //cy.get('[data-notify="message"]').should('have.text','Please approve KYC and then submit the request.')
        
} )
} )