
import data from "../fixtures/testdata.json"
import TestFilters from "../support/TestFliter"
describe('Organe Hrm site login', () =>{

    before('Launch Url', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        // let testdata;
    })
    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

   it('login', () => {
    cy.get("[name='username']").type(this.testdata.username)
    cy.get("[name='password']").type(this.testdata.password)
    cy.get("[type='submit']").click()
    cy.get('.orangehrm-quick-launch').each(($el,index)=>{
        expect($el).to.contain(this.testdata.quickLaunch[index])
    })
   })

//    it('validate all quick launch text', () =>{
//     cy.get('.orangehrm-quick-launch').each(($el,index)=>{
//         expect($el).to.contain(testdata.quickLaunch[index])

//     })
   })
  
    
