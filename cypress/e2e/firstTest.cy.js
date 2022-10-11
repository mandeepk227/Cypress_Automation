/// <reference types="cypress" />

import selectors from '../Selectors/selectors.json'

describe('My Test Suite', () => {
  const productName = "Apple MacBook Pro 13-inch"
  const invalidProductQuantity = 1
  const validProductQuantity = 2
  const errorMsg = 'The minimum quantity allowed for purchase is 2.'
  const successMsg = 'The product has been added to your shopping cart'

  it('Verify the title of page', () => {

    cy.visit('https://demo.nopcommerce.com');
    cy.title().should('eq','nopCommerce demo store' );
  })

  it('e2e test case', () => {
    cy.visit('https://demo.nopcommerce.com');
    cy.get(selectors.searchBox).type(productName);
    cy.get(selectors.wrapperMenu).click();
    cy.get(selectors.quantityInput).clear().type(invalidProductQuantity);
    cy.get(selectors.addToCartButton).click();
    cy.get(selectors.error).contains(errorMsg).should('be.visible');
    cy.get(selectors.quantityInput).clear().type(validProductQuantity);
    cy.get(selectors.addToCartButton).click();
    cy.get(selectors.success).contains(successMsg).should('be.visible');

  })

})