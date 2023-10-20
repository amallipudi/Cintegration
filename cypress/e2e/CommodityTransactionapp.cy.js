describe('Commodity Transaction Application', () => {
    beforeEach(() => {
      cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
    cy.visit("http://web04/TEST-CommodityTransctionsApp/Pages/CommodityTransactionList.aspx")
    cy.viewport(1280, 1000)
    })
    it('Commodity Transaction Application: Mousehover of action buttons', () => {
    //cy.get('#lnkbtnView[title="View"]').eq(0).trigger('mouseover').should('be.visible').and('have.attr','View')
    //cy.get('td').should('contain','1').get('#lnkbtnView').trigger('mouseover').should('be.visible')
    cy.get('[title="View"]').eq(0).trigger('mouseover').should('be.visible').should('have.attr','title').should('contain','View')
  
  })
    
   it('Commodity Transaction Application grid validation', () => {
      
    cy.get('thead > tr > :nth-child(1)').and('contain',"#")
      cy.get('thead > tr > :nth-child(2)').and('contain',"GP Company")
      cy.get('thead > tr > :nth-child(3)').and('contain',"Transaction#")
      cy.get('thead > tr > :nth-child(4)').and('contain',"Transaction Description")
      cy.get('thead > tr > :nth-child(5)').and('contain',"Period Month/Year")
      cy.get('thead > tr > :nth-child(6)').and('contain',"Division")
      cy.get('thead > tr > :nth-child(7)').and('contain',"Contract#")
      cy.get('thead > tr > :nth-child(8)').and('contain',"Price")
      cy.get('thead > tr > :nth-child(9)').and('contain',"Broker")
      cy.get('thead > tr > :nth-child(10)').and('contain',"Created By")
      cy.get('thead > tr > :nth-child(11)').and('contain',"Transaction Date")
      cy.get('thead > tr > :nth-child(12)').and('contain',"Status")
      cy.get('thead > tr > :nth-child(13)').and('contain',"Actions")
      cy.get('#grid > thead').and('contain',"SR#").and('contain',"GP Company").and('contain',"Transaction#").and('contain',"Transaction Description").and('contain',"Period Month/Year").and('contain',"Division").and('contain',"Contract#").and('contain',"Price").and('contain',"Broker").and('contain',"Created By").and('contain',"Transaction Date").and('contain',"Actions")
    })
    it('Commodity Transaction Application: Actions buttons validations', () => {
      cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnView > .fas').should("be.visible")//View button
      cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnUpdate > .far').should("be.visible")//Edit button
      cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnCloseTransaction > .fa').should('not.be.disabled')//Close button
      cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnApprove > .fa').should("be.visible")//Approve button
      cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnDelete > .far').should("be.visible")//Cancel button
        })
  it('Commodity Transaction Application:Create New Transaction & Clone click', () => {
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
       cy.get('.confirm').click().wait(1000)
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
  it('Commodity Transaction Application:Approved Button Validation ', () => { 
    cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnApprove > .fa').should("be.visible").click()//Approve button
    cy.get('.cancel').should("be.visible")
    cy.get('.confirm').should("be.visible")
    //Approved Button Validation
    //cy.screenshot()
  })
  it('Commodity Transaction Application: Close Button Validation', () => {
    cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnCloseTransaction > .fa').should('not.be.disabled')//Close button
    
    //Close Button Validation
    //cy.screenshot()
  })
  it('Commodity Transaction Application: View Button Validation', () => {
    //View Button Validation
    cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnView > .fas').should("be.visible").click()//View button
    
    //cy.screenshot()
  })
  it('Commodity Transaction Application: Cancel button validations', () => {
    cy.get(':nth-child(1) > :nth-child(13) > #lnkbtnDelete > .far').should("be.visible").click()//Cancel button
    cy.get('.cancel').should("be.visible")
    cy.get('.confirm').should("be.visible")
    //Cancel Button Validation
    //cy.screenshot()
  })
  it('Commodity Transaction Applicationfilters hide', () => {
    cy.get('.panel-title > a').click().wait(1000)//filters hide
    //cy.screenshot()
  })
  it('Commodity Transaction Application logo', () => {
    cy.get('.targray_logo > img').should("be.visible").wait(1000)//logo
    //cy.screenshot()
  })
  it('Commodity Transaction Application : Create New Transaction button should be visable', () => {
    cy.get('#lnkbtnNewTrans').should("be.visible").wait(1000)//logo
    //cy.screenshot()
  })
  it('Commodity Transaction Application : Apply filter button should be visable', () => {
    cy.get('#lnkbtnApplyFilters').should("be.visible").wait(1000)//logo
    //cy.screenshot()
  })
  it('Commodity Transaction Application : REset filter button should be visable', () => {
    cy.get('#lnkBtnResetFilters').should("be.visible").wait(1000)//logo
    //cy.screenshot()
  })
  it('Commodity Transaction Application unwanted icon', () => {
    cy.get('#liBiopsMenuBar').click().wait(1000)//unwanted icon
   // cy.screenshot()
  })
  it('Commodity Transaction Application full name click', () => {
    cy.get('a[class="bars"]').click({force: true}).wait(3000)//full name click
    cy.get('.user-email').should('contain','Ananda Mohan Mallipudi')
    //cy.screenshot()
  })
  it('Commodity Transaction Application TransactionNumber filter', () => {
    cy.get('#tbxTransactionNumber').type('FN-TAR-COM-0004')//Transaction Number search
    cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
    
    //cy.screenshot()
  })
  it('Commodity Transaction Application :Newly added  as"status"filter', () => {
    cy.get('select[name="ctl00$cphContent$ddlStatus"]').and('contain','Approved').and('contain','Closed').and('contain','New') //Transaction Type dropdown
    cy.get('select[name="ctl00$cphContent$ddlStatus"]').select('Approved',{force: true}) //status filter
    cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
    
    //cy.screenshot()
  })

  it('Commodity Transaction Application:GoToPage filter', () => {
    cy.get('#tbxGoToPage').type('2').click()//Go search page
    cy.get('#cphContent_lnkbtnGoToPage').click().wait(3000)
    //cy.screenshot() 
  })
  it('Commodity Transaction Application:TransactionType filter', () => {
    cy.get('select[name="ctl00$cphContent$ddlTransactionType"]').and('contain','Buy').and('contain','Sell') //Transaction Type dropdown
    cy.get('select[name="ctl00$cphContent$ddlTransactionType"]').select('Buy',{force: true}) 
    cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
   // cy.screenshot()
  })
  it('Commodity Transaction Application:Gp Company Filter', () => {
    cy.get('select[name="ctl00$cphContent$ddlCompany"]').and('contain',"TIN").and('contain',"TCD").and('contain','TME').and('contain','TRP').and('contain','TTI')// Great Plains Company
    cy.get('select[name="ctl00$cphContent$ddlCompany"]').select('TIN',{force: true})
    cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
    //cy.screenshot()
  })
  it('Commodity Transaction Application:Createdby filter', () => {
    cy.get('#lnkbtnApplyFilters').click()
    cy.get('select[name="ctl00$cphContent$ddlCreatedby"]').and('contain',"Priyadharsini Neelagandan").and('contain',"Xavier Jolicoeur") // Created By
    cy.get('select[name="ctl00$cphContent$ddlCreatedby"]').select('Priyadharsini Neelagandan',{force: true})
    cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
   // cy.screenshot()
  })
  it('Commodity Transaction Application:StartDate filter', () => {
    cy.get('#tbxStartDate').type('2023-08-24').click({force: true})//StartDate
    cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
   // cy.screenshot()
  })
  it('Commodity Transaction Application:EndDate filter', () => {
    cy.get('#tbxEndDate').type('2019-09-11').click({force: true})//EndDate
    cy.get('#lnkbtnApplyFilters').click().wait(3000)//Applyfilter
    //cy.screenshot()
  })
} )