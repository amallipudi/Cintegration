describe('Commodity Transaction Application', () => {
    beforeEach(() => {
      cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
    cy.visit("http://web04/TEST-CommodityTransctionsApp/Pages/CommodityTransactionList.aspx")
    cy.viewport(1280, 1000)
    })
    it.only('Commodity Transaction Application:Create New Transaction', () => {
        cy.get('#lnkbtnNewTrans').click()
      cy.get('select[name="ctl00$cphContent$ddlCompany"]').and('contain',"TIN").and('contain',"TCD").and('contain','TME').and('contain','TRP').and('contain','TTI')// Great Plains Company
       cy.get('select[name="ctl00$cphContent$ddlCompany"]').select('TTI',{force: true}) 
       cy.get('tr > :nth-child(1) > label').click()//Transaction Type Buy
       //cy.get('tr > :nth-child(2) > label').click()//Transaction Type Sell
       cy.get('#tbxTransactionDate').type('2023-08-21').click({force: true})//Transaction Date
       cy.get('select[name="ctl00$cphContent$ddlDivision"]').and('contain',"Biofuels").and('contain',"Cotton").and('contain','Feedstock').and('contain','Pulses') //Division
       cy.get('select[name="ctl00$cphContent$ddlDivision"]').select('Cotton',{force: true}) //division
       cy.get('select[name="ctl00$cphContent$ddlCommodity"]').and('contain',"AUD/USD Forward").and('contain',"AUD/USD Time Option").and('contain','Bal-Month Gasoil Swap').and('contain','CAD/USD Forward').and('contain','CAD/USD Time Option').and('contain','CBOT Ethanol Forward Month Swap').and('contain',"CBOT Ethanol Futures").and('contain',"CHF/USD Forward").and('contain','CHF/USD Time Option').and('contain','CHI ETH SWAP').and('contain','CHICAGO SRW WHEAT FUTURES').and('contain','CNY/USD Forward').and('contain',"CNY/USD Time Option").and('contain',"Corn").and('contain','Corn Futures').and('contain','Cotton No. 2 1-Month Calendar Spread Options').and('contain','Cotton No. 2 2-Month Calendar Spread Options').and('contain','Cotton No. 2 Futures').and('contain','Cotton No. 2 Options').and('contain','Crude Oil').and('contain','Crush').and('contain','DDGS').and('contain','EUR/USD Forward').and('contain','EUR/USD Time Option').and('contain','Fame 0').and('contain','Fame 0 - Gasoil').and('contain','Gasoil Futures').and('contain','Gasoil Swaps').and('contain','GBP/USD Forward').and('contain','GBP/USD Time Option').and('contain','Guar splits').and('contain','Heating Oil Futures').and('contain','INR/USD Forward').and('contain','INR/USD Time Option').and('contain','JPY/USD Forward').and('contain','JPY/USD Time Option').and('contain','LCFS').and('contain','Milling Wheat No. 2 Futures').and('contain','Nat. Gas').and('contain','Natural Gasoline').and('contain','NOK/USD Forward').and('contain','NOK/USD Time Option').and('contain','Palm Oil Futures').and('contain','').and('contain','Palm Oil Swaps').and('contain','Rapeseed Futures').and('contain','RBOB Gasoline').and('contain','RINs').and('contain','RME').and('contain','RME – Gasoil').and('contain','RSO').and('contain','SEK/USD Forward').and('contain','SEK/USD Time Option').and('contain','SOYBEAN MEAL FUTURES').and('contain','soybean oil').and('contain','Sugar No. 11 Futures').and('contain','T2 Ethanol Swap').and('contain','Weekly Cotton No. 2 Options').and('contain','').and('contain','').and('contain','').and('contain','').and('contain','White Sugar Futures')
       cy.get('select[name="ctl00$cphContent$ddlCommodity"]').select('Cotton No. 2 2-Month Calendar Spread Options',{force: true}).wait(2000) //commodity
       //cy.get('#tbxStartDate').type('2023-08-06').click({force: true}).wait(4000)//StartDate
       //cy.get('#tbxEndDate').type('2023-08-14').click({force: true}).wait(4000)//EndDate
      cy.get('#tbxLots').type('1.01')//Number of lots
      cy.get('#cphContent_divPeriod > .col-lg-3 > .form-line > .grid-table > tbody > tr > td > .ui-datepicker-trigger').dblclick()//period month/year
       cy.get(':nth-child(3) > .form-line > .switch > label > .lever').click()  //Hedged no/yes
    //Amount Details
       cy.get('#tbxPrice').type(1.00)//Price
       //Broker Details
       cy.get('select[name="ctl00$cphContent$ddlBroker"]').and('contain',"Atlas").and('contain',"Atlas Commodity Markets").and('contain','Biofuels Connect').and('contain','Dropet').and('contain','ED&F Man').and('contain',"Evolution Markets").and('contain',"FC Stone").and('contain','First National Oil Brokers').and('contain','HSBC Bank').and('contain','ICAP').and('contain',"IVG").and('contain',"Khandelwal Associates").and('contain','PFL').and('contain','RBC').and('contain','RCG').and('contain','RJO').and('contain','RJO Paper 1').and('contain','RJO Paper 2').and('contain','Star Supply (SCB)').and('contain','Tullett Prebon').and('contain','Weaver') //Broker dropdown
       cy.get('select[name="ctl00$cphContent$ddlBroker"]').select('FC Stone',{force: true}) 
       cy.get(':nth-child(5) > .row > :nth-child(2) > .btn-group').click()
       cy.get(':nth-child(5) > .row > :nth-child(2) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').type('Main').click()
    
       //cy.get('select[name="ctl00$cphContent$ddlBrokerAccount"]').should('contain',"Main account (TRGY)").click()
       //cy.get('select[name="ctl00$cphContent$ddlBrokerAccount"]') 
       cy.get('#tbxDealNumber').type('TCTB-00017/3')//Deal Number
       cy.get(':nth-child(4) > .form-line > .switch > label > .lever').click()//This is a roll no/yes
       cy.get(':nth-child(5) > .form-line > .switch > label > .lever').click().wait(1000)// This is a Hedge
       cy.get('#tbxStrikePrice').type('1.011')  //StrikePrice
       cy.get('select[name="ctl00$cphContent$ddlOptionType"]').and('contain',"Call Option").and('contain',"Put Option")//Option Type
       cy.get('select[name="ctl00$cphContent$ddlOptionType"]').select('Call Option',{force: true}) //division
       cy.get('select[name="ctl00$cphContent$ddlContractSeries"]').and('contain',"Regular Options").and('contain',"Serial Options")//Option Type
       cy.get('select[name="ctl00$cphContent$ddlContractSeries"]').select('Serial Options',{force: true}) //division
       cy.get(':nth-child(4) > .form-line > .grid-table > tbody > tr > td > .ui-datepicker-trigger').dblclick()
       //cy.screenshot()
       //cy.get('#lnkbtnClone').should('not.be.disabled');// Clone Transaction
       //cy.get('#lnkbtnCancel').should('not.be.disabled');//Cancel Transaction
       cy.get('#lnkbtnSave').click().wait(3000) // Save Transaction
       cy.get('[data-notify="message"]').should('have.text','Transaction Saved Successfully.')
       cy.get('#cphContent_lblTransactionNumber').each(($span) => cy.log($span.text()))
       //cy.get('span[id="#cphContent_lblTransactionNumber"]').each(($span) => cy.log($span.text()))
       cy.get('span').each(($span) => cy.log($span.text()))
       //cy.get('span').log($span.text())
       //cy.get('span[id="#cphContent_lblTransactionNumber"]').each(($span) => cy.log($span.text()))
        
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      
       //cy.get('#lnkbtnClone').should("be.visible")//.click()// Clone Transaction
       //cy.get('#lnkbtnCancel').should("be.visible")//.click() //Cancel Transaction
      } )
      it('Commodity Transaction Application: Actions buttons validations of close transaction', () => {
        cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnView > .fas').should("be.visible")//View button
        cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnUpdate > .far').should("be.visible")//Edit button
        cy.get('select[name="ctl00$cphContent$ddlStatus"]').and('contain','All...').and('contain','Approved').and('contain','Closed') //Transaction Type dropdown
        cy.get('select[name="ctl00$cphContent$ddlStatus"]').select('Approved',{force: true}) 
        cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
        cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnCloseTransaction > .fa').should("be.visible")//Clone button
        cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnCloseTransaction > .fa').click()
        cy.get('#tbxClosingDate').type('2023-08-2-4-4-5-5-7-8-5-5--11-0-0-1-1-1--7-8-8-9--2-2-2-00-1-1-').click({force: true})
        cy.get('#lnkbtnClose').click().wait(6000)
        //cy.get('#lnkbtnCancel').click()
        cy.get(':nth-child(2) > a').click()
          })
    })    