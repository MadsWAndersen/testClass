describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('ETest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080');
    cy.get('.todo-input').clear('J');
    cy.get('.todo-input').type('Hva så der Jacob og Ida');
    cy.get('.todo-button').click();
    cy.get('.todo-input').click();
    cy.get('.todo-input').clear('D');
    cy.get('.todo-input').type('Hva sker der, er i klaaar?');
    cy.get('.todo-button').click();
    cy.get('.todo-input').clear('D');
    cy.get('.todo-input').type('Min far hedder Henrik');
    cy.get('.todo-button').click();
    /* ==== End Cypress Studio ==== */
  });
})