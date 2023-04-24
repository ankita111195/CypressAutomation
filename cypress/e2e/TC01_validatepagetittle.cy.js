/* validate page tittle and search an item */

describe('validate page tittle of amazon site', () => {
  before('Launch Url', () => {
    cy.visit('https://www.flipkart.com/')
  })

  it('validate page tittle', () => {
    
    cy.get("//a[text()='Login']").click()
    
  })


})