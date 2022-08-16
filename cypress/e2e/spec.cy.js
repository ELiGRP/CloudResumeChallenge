describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://elidouglas.com/')

    cy.get('#count')
      .invoke('text')
      .then(Number)
      .then((n) => {
        cy.reload()
        // check the incremented value
        cy.contains('#count', String(n + 1))
  })
})
})
