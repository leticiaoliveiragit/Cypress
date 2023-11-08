
describe('Add to Cart', () =>{

    beforeEach(() =>{

    // Visit the page
    cy.visit('https://www.saucedemo.com/v1/index.html')

    //Fill in the username field with a valid username
    cy.get('input#user-name').type('standard_user')

    //Fill in the Password field
    cy.get("input[placeholder='Password']").type('secret_sauce')
 
    //Click the submit button
    cy.get('.btn_action').click()

})


it('Add to cart', () => {
    //Verify if I am on the Products page
    cy.get('.product_label').contains('Products')

    //Select one intem on the page and add it to the cart
   cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()

   //Verify if the item that you chose was add to the cart
   cy.get('.fa-layers-counter.shopping_cart_badge').should('have.text', '1')

})


it('Remove from the cart', () => {

    //Verify if I am on the Products page
    cy.get('.product_label').contains('Products')

    //Select one intem on the page and remove it from the cart
   cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()

   //Verify if the cart is empty
   cy.get('.fa-layers-counter.shopping_cart_badge').should('exist', '0')

})


it('Successful Checkout', () => {

    //Verify if I am on the Products page
    cy.get('.product_label').contains('Products')

   //Select one intem on the page and add it to the cart
   cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()

   //Verify if the item that you chose was add to the cart
   cy.get('.fa-layers-counter.shopping_cart_badge').should('have.text', '1')

   //Go to the cart page
   cy.visit('https://www.saucedemo.com/v1/cart.html')

   //Click on the Checkout button
   cy.xpath('//*[@id="cart_contents_container"]/div/div[2]/a[2]').click()

    //Verify if I am on the Checkout:Your information page
    cy.get('.subheader').contains('Checkout: Your Information')

    //Fill in the First Name field
    cy.get('input#first-name').type('Leticia')

    //Fill in the Last Name field
    cy.get('input#last-name').type('Oliveira')

    //Fill in the Zip / Postal Code field
    cy.get('input#postal-code').type('1405-043')

    //Clcik on Cotinue button
   cy.get('.btn_primary.cart_button').click()

   //Verify if I am on the Checkout:Overview page
   cy.get('.subheader').contains('Checkout: Overview')

   //Click on the Finish button
   cy.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[8]/a[2]').click()

   //Check if the error message of a successful checkout appears
  cy.get('.complete-header').should('exist', 'THANK YOU FOR YOUR ORDER')

})
})



