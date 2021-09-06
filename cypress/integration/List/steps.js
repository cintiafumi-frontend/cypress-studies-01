/// <reference types="cypress" />

Given(/^a website without records$/, () => {
  cy.server();
  cy.route({
    method: 'GET',
    url: '**/api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: 'fx:webtable-get-empty',
  }).as('getNewTabel');
});

When(/^access the list$/, () => {
  cy.visit('WebTable.html');
});

Then(/^I should see an empty list$/, () => {
  cy.get('div[role=row]').should('have.length', 1);
});

Given(/^a website with one record$/, () => {
  cy.server();
  cy.route({
    method: 'GET',
    url: '**/api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: 'fx:webtable-get-one',
  });
});

Then(/^I should see only one record$/, () => {
  cy.get('div[role=row] div[role=gridcell]')
    .eq(4)
    .find('div')
    .as('gridCellPhone');
  cy.get('@gridCellPhone').should('contain.text', '987654321');
});
