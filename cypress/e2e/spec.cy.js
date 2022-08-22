describe('My First Test', () => {
  it('Visits the my website', () => {
    cy.visit('https://elidouglas.com/')
    cy.wait(500)
    cy.get('#count')
    .then(($count) => {
      var num1 = parseFloat($count.text())
      console.log(num1)
    })
  })
})