/// <reference types="cypress" />

describe('Walky Doggy app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays nav correctly', () => {
    cy.get('nav a').should('have.length', 3);

    cy.get('nav a').first().should('have.text', 'Home');
    cy.get('nav>a').eq(1).should('have.text', 'My Account');
    cy.get('nav a').last().should('have.text', 'Walker');
  });

  it('displays title', () => {
    cy.get('h1').should('have.text', 'Home');
  });

  it('check Home nav links works', () => {
    cy.contains('Home').click();
    cy.url().should('include', '/');
  });

  it('check Home nav links works', () => {
    cy.contains('My Account').click();
    cy.url().should('include', '/myaccount');
  });

  it('check Home nav links works', () => {
    cy.contains('Walker').click();
    cy.url().should('include', '/walker');
  });
});
