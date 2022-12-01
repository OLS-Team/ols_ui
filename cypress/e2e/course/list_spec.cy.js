describe('basic entry spec', () => {
  context('content', () => {
    it('loads home page', () => {
      cy.visit('http://localhost:4000/courses')
      cy.contains('Courses').click()
      cy.contains('Available Courses')
    })
    it('shows selected course page', () => {
      cy.contains('OLS').click()
      cy.contains('Course Details')
    })
  })
})