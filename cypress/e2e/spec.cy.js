describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://elidouglas.com/')

    cy.get('Visitors')
  })
})
