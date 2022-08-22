describe('My First Test', () => {
  it('Visits the my website', () => {
    cy.visit('https://elidouglas.com/')

    cy.wait(500)

    cy.get('#count').then(($count) => {
      const num1 = parseFloat($count.text())
      console.log(num1)
      cy.reload()
      cy.wait(500)

      cy.get('#count').then(($count) => {
        
        const num2 = parseFloat($count.text())
        console.log(num2)

        expect(num2).to.eq(num1 + 1)
      })
    })
  })
})