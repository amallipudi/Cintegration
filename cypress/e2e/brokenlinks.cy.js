describe('Broken Link', () => {
   
      
    it('Find all broken links', () => {
    
        cy.viewport(1280, 1000)
     
        cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
        cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
        let brokenLinks=0
      let activeLinks=0
    cy.get('a').each(($link, index) => {
            const href= $link.attr('href')
        
        if (href) {
        cy.request({url: href , failOnStatusCode: false}).then((response)=>{
            if(response.status>= 400) {
cy.log('**** link ${index + 1} is Broken Link **** ${href}')
brokenLinks++
            }
            else{
                cy.log('**** link ${index + 1} is Active Link **** ${href}')
                activeLinks++
            }
        })
    }
    })
    .then(($links) => {
        const totalLinks = $links.length
        cy.log('**** total links **** ${totalLinks}')
        cy.log('**** broken links **** ${brokenLinks}')
        cy.log('**** active links **** ${activeLinks}')
        })
    })
    })
    