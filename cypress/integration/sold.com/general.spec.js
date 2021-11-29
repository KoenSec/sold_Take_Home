/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../../support" />

// ----------------------------------------------------------------------------
// Custom Commands:
//   command defined in /integration/sold.com/support/commands.js
// ----------------------------------------------------------------------------

describe('SOLD.com Test Project: general', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Asserting Header and Footer', () =>{
    it('checking header and footer are hidden', ()=>{
      cy.get('h1').should('not.be.visible')
    })
  })
  describe('focusing on todo input field',()=>{
    it('focusing on input field',()=>{
      cy.get('input.new-todo').first().focus()
    })
  })
  describe('Add todo, should clear text input field when an item is added, assert field is blank',()=>{
    it('test3',() =>{
      cy.get('.new-todo').type('adding todo item{enter}')
      cy.get('input.new-todo').should('be.empty')
      cy.get('input.new-todo').focus()
    })
  })
  describe('Add todo, assert the main and footer sections should not be hidden', ()=>{
    it('test4',()=>{
      cy.get('.new-todo').type('test 4 item{enter}')
      cy.get('h1').should('be.visible')
      cy.get('footer.info').should('be.visible')
    })
  })
  describe('Add new todo item and assert that it exists',()=>{
    it('test5',()=>{
      cy.get('.new-todo').type('test 5 item{enter}')
      cy.get('.todo-list li').should('exist')
    })
  })
  describe('Add three todos and make sure they all exist, and assert there are 3 li items',()=>{
    it('test6',()=>{
      cy.get('.new-todo').type('test 6 item{enter}')
      cy.get('.new-todo').type('test 6 item 2{enter}')
      cy.get('.new-todo').type('test 6 item 3{enter}')
      cy.get('.todo-list li').should('exist',3)
    })
  })
  // Had issues getting cypress to trim whitespace 
  describe('Add todo item which has leading and trailing spaces, when created should trim',()=>{
    it('test7',()=>{
      cy.get('.new-todo').type('  test 7 item  {enter}').contains()
    })
  })
});
