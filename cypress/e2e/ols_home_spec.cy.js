describe('basic entry spec', () => {
  it('loads home page', () => {
    cy.visit('http://localhost:4000')
    cy.contains("Open Learning Server")
    cy.contains("Site Home Page")
  })
})