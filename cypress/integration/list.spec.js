/// <reference types="cypress" />

context('List', () => {
  it('Empty list', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/api/1/databases/userdetails/collections/newtable?**',
      status: 200,
      response: 'fx:webtable-get-empty',
    }).as('getNewTabel');

    cy.visit('WebTable.html');

    cy.get('div[role=row]').should('have.length', 1);
  });

  it('List with one record', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/api/1/databases/userdetails/collections/newtable?**',
      status: 200,
      response: 'fx:webtable-get-one',
    });

    cy.visit('WebTable.html');

    cy.get('div[role=row] div[role=gridcell]')
      .eq(4)
      .find('div')
      .as('gridCellPhone');
    cy.get('@gridCellPhone').should('contain.text', '987654321');
  });
});
