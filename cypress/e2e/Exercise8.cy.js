
describe('Login', () => {

  beforeEach(()=>{ 
    // Visit the page
    cy.visit('https://www.saucedemo.com/v1/index.html')

  })



  it('Valid Login', () => {

     //Fill in the username field with a valid username
     cy.get('input#user-name').type('standard_user')

     //Fill in the Password field
     cy.get("input[placeholder='Password']").type('secret_sauce')

     //Click the submit button
     cy.get('.btn_action').click()


  })
  


it('Invalid Login', () => {


   //Fill in the username field with an invalid username
   cy.wait(2000)
   cy.get('input#user-name').type('leticia_love')
   
   //Fill in the Password field
   cy.get("input[placeholder='Password']").type('secret_sauce')
   
   //Click the submit button
   cy.get('.btn_action').click()

   //Check if the error message appears
   cy.get('.error-button').should('be.visible')
 

})


it('Invalid Password', () => {


   //Fill in the username field with a valid username
   cy.get('input#user-name').type('standard_user')
  
  //Fill in the Password field with an invalid password
  cy.get("input[placeholder='Password']").type('sauce_sauce')
  
  //Click the submit button
  cy.get('.btn_action').click()

  //Check if the error message appears
  cy.get('.error-button').should('exist', 'Username and password do not match any user in this service')


})

it('Login with an empty username', () => {

  //Leave the username field empty

  //Fill in the Password field
  cy.get("input[placeholder='Password']").type('secret_sauce')

  //Click the submit button
  cy.get('.btn_action').click()

  //Check if the username field is empty
  cy.get('input#user-name').should('have.value', '')

})

it('Login with an empty password', () => {

  //Fill in the username field with a valid username
  cy.get('input#user-name').type('standard_user')

  //Leave the Password field empty

  //Click the submit button
  cy.get('.btn_action').click()

  //Check if the username field is empty
  cy.get("input[placeholder='Password']").should('have.value', '')

})

})
