describe('My First Test', () => {
  it('Visits the my website', () => {
    cy.visit('https://elidouglas.com/')
    cy.wait(1000)

    cy.get('#count').then(($count) => {
      const num1 = parseFloat($count.text())
      cy.reload()
      cy.wait(1000)

      cy.get('#count').then(($count) => {
        const num2 = parseFloat($count.text())

        expect(num2).to.be.greaterThan(num1)
      })
    })
  })
})