
import selectors from '../Selectors/selectors.json'


describe('My Test Suite', () => {
  const productName = "Apple MacBook Pro 13-inch"
  const invalidProductQuantity = 1
  const validProductQuantity = 2
  const errorMsg = 'The minimum quantity allowed for purchase is 2.'
  const successMsg = 'The product has been added to your shopping cart'

  beforeEach('Verify the title of page', () => {
    cy.visit('https://demo.nopcommerce.com');
    cy.title().should('eq','nopCommerce demo store' );
    cy.get(selectors.searchBox).type(productName);
    cy.get(selectors.wrapperMenu).click();
  })

  it('Verify error message by adding invalid product quantity ', () => {
    cy.get(selectors.quantityInput).scrollIntoView().clear().type(invalidProductQuantity);
    cy.get(selectors.addToCartButton).click();
    cy.get(selectors.error).contains(errorMsg).should('be.visible');
    cy.get('.error').find('.close').click({force:true});
  })

  it('Verify error message by adding valid product quantity ', () => {
    cy.get(selectors.quantityInput).scrollIntoView().clear().type(validProductQuantity);
    cy.get(selectors.addToCartButton).click();
    cy.get(selectors.success).contains(successMsg).should('be.visible');
    cy.get(selectors.flyCart).invoke('show').find(selectors.cartButton).click();
    cy.get(selectors.productName).should('contain', productName);
  })

})