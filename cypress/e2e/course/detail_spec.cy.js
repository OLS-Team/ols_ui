describe('basic entry spec', () => {
  it('loads home page', () => {
    cy.visit('http://localhost:4000/course/1')
    cy.contains('OLS').click()
    cy.contains('Course Details')
  })
})