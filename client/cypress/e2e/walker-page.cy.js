/// <reference types="cypress" />

describe('Walky Doggy app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/walker');
  });

  it('each walk is correct', () => {
    cy.get('.event-day-month').should('not.be.empty');
    cy.get('.list-title').should('not.be.empty');
    cy.get('.list-date').should('not.be.empty');
    cy.get('.list-venue').should('not.be.empty');
  });

  it('check click btn', () => {
    cy.get('.btn').eq(2).click();
    cy.url().should('include', '/form');
  });
});
