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
        
       cy.get('#tbxPeriod').type('09-2023').click({force: true})
       //cy.get('#tbxStartDate').type('2023-08-06').click({force: true}).wait(4000)//StartDate
       //cy.get('#tbxEndDate').type('2023-08-14').click({force: true}).wait(4000)//EndDate
      cy.get('#tbxLots').type('1.01')//Number of lots
      cy.get('#cphContent_divPeriod > .col-lg-3 > .form-line > .grid-table > tbody > tr > td > .ui-datepicker-trigger').dblclick()//period month/year
       cy.get(':nth-child(3) > .form-line > .switch > label > .lever').click()  //Hedged no/yes
       cy.get('#tbxDealNumber').type('TCTB-00017/3')//Deal Number
       cy.get('#tbxTransactionNote').type('anandananaananannanananana')
       cy.get(':nth-child(1) > .form-line > .switch > label').click()//This is a roll no/yes
       //cy.get(':nth-child(5) > .form-line > .switch > label > .lever').click().wait(1000)// This is a Hedge
    //Amount Details
       cy.get('#tbxPrice').type(1.00)//Price
       //Broker Details
       cy.get('select[name="ctl00$cphContent$ddlBroker"]').and('contain',"Atlas").and('contain',"Atlas Commodity Markets").and('contain','Biofuels Connect').and('contain','Dropet').and('contain','ED&F Man').and('contain',"Evolution Markets").and('contain',"FC Stone").and('contain','First National Oil Brokers').and('contain','HSBC Bank').and('contain','ICAP').and('contain',"IVG").and('contain',"Khandelwal Associates").and('contain','PFL').and('contain','RBC').and('contain','RCG').and('contain','RJO').and('contain','RJO Paper 1').and('contain','RJO Paper 2').and('contain','Star Supply (SCB)').and('contain','Tullett Prebon').and('contain','Weaver') //Broker dropdown
       cy.get('select[name="ctl00$cphContent$ddlBroker"]').select('FC Stone',{force: true}) 
       cy.get(':nth-child(5) > .row > :nth-child(2) > .btn-group').click()
       //cy.get(':nth-child(4) > .row > :nth-child(2) > .btn-group > .btn > .filter-option').type('Main').click()
       cy.get('select[name="ctl00$cphContent$ddlBrokerAccount"]').and('contain',"Main account (TRGY)").and('contain',"Main account (52060600)")//brokeraccount dropdown
       cy.get('select[name="ctl00$cphContent$ddlBrokerAccount"]').select('Main account (52060600)',{force: true}) //division
       
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
       cy.get('#cphContent_lblTransactionNumber').then($span => {
    const txt = $span.text()
    cy.log(txt)
    cy.wrap(txt).as('txt')
       
       cy.get('.breadcrumb > :nth-child(1) > a').click().wait(1000)
     cy.get('#tbxTransactionNumber').invoke('val',txt)//Transaction Number search

     cy.get('select[name="ctl00$cphContent$ddlStatus"]').and('contain',"Approved").and('contain',"Closed").and('contain',"New")//Option Type
     cy.get('select[name="ctl00$cphContent$ddlStatus"]').select('Approved',{force: true}) //division
       cy.get('#lnkbtnApplyFilters').click().wait(1000)//Applyfilter
       cy.get('#lnkbtnUpdate > .far').click()
       cy.get('#tbxPrice').clear().type(0.59)//Price
       cy.get('#lnkbtnCancel').click()
       cy.get('.confirm').click()
       cy.get('#lnkbtnClone').click().wait(500)
       cy.get('.confirm').click().wait(10000)
       //cy.get('div[class="sa-button-container"]').contains('Yes').dblclick().wait(6000)
       cy.get('#cphContent_lblTransactionNumber').then($span => {
        const txt2 = $span.text()
        cy.log(txt2)
      
       })
        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      
       //cy.get('#lnkbtnClone').should("be.visible")//.click()// Clone Transaction
       //cy.get('#lnkbtnCancel').should("be.visible")//.click() //Cancel Transaction
      } )
    })
  })