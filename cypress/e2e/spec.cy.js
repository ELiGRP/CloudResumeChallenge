describe('My First Test', () => {
  it('Visits the my website', () => {
    cy.visit('https://elidouglas.com/')

    cy.get('#count').then(($count) => {
      const num1 = parseFloat($count.text())
    
  })
})
})