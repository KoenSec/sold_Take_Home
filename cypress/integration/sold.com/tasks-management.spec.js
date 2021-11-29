/// <reference types="cypress" />

const { eq } = require("lodash");

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../../support" />

// ----------------------------------------------------------------------------
// Custom Commands:
//   command defined in /integration/sold.com/support/commands.js
// ----------------------------------------------------------------------------

describe('SOLD.com Test Project: task management', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('management-tests',()=>{
    it('Using setup method, then mark all as completed. After marked complete, assert all items have “completed” class',()=>{
      cy.get('.new-todo').type('new item 1{enter}')
      cy.get('.new-todo').type('new item 2{enter}')
      cy.get('input.toggle').click({ multiple: true })
      cy.get('input.toggle').should('be.enabled')
    })
    it('mark all as completed. After marked complete, toggle completed flag and assert the completed class has been removed',()=>{
      cy.get('.new-todo').type('new item 1{enter}')
      cy.get('.new-todo').type('new item 2{enter}')
      cy.get('input.toggle').click({ multiple: true })
      cy.get('input.toggle').should('be.enabled')
      cy.get('input.toggle').click({ multiple: true })
      cy.get('.todo-list li').should('not.equal','completed')
    })
    // Had issues getting cypress to assert 2 items left text 
    it('assert the “.todo-count” has text 2 items left',()=>{
      cy.get('.new-todo').type('new item 1{enter}')
      cy.get('.new-todo').type('new item 2{enter}')
      cy.get('span.todo-count').should('equal','2 items left')
    })
  })
});
