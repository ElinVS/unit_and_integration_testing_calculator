describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();

    cy.get('.display').should('contain', '2')

  })

  it('should update the display of the running total', () => {
    cy.get('#number2').click()
    cy.get('#number6').click()

    cy.get('.display').should('contain', '26')

  })

  it('should update the display with the arithmetically operation: add', () => {

    cy.get('#number2').click();
    cy.get('#operator_add').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '5')

  })

  it('should update the display with the arithmetically operation: subtract', () => {

    cy.get('#number9').click()
    cy.get('#operator-subtract').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '5')

  })

  it('should update the display with the arithmetically operation: multiply', () => {

    cy.get('#number7').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '14')

  })

  it('should update the display with the arithmetically operation: divide', () => {

    cy.get('#number5').click()
    cy.get('#number0').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '25')
    

  })

  it('should chain multiple operators together', () => {

    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '25')

  })

  it('should handle positive calculations', () =>{

    cy.get('#number5').click()
    cy.get('#operator_add').click()
    cy.get('#number6').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '605')

  })

  it('should handle negative calculations', () =>{

    cy.get('#number5').click()
    cy.get('#number0').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#number7').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '-34')

  })


  it('should handle decimal calculations', () =>{

    cy.get('#number8').click()
    cy.get('#decimal').click()
    cy.get('#number5').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#decimal').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()

    cy.get('.display').should('contain', '21.25')

  })

  it('should handle large number calculations', () =>{

  cy.get('#number2').click()
  cy.get('#number2').click()
  cy.get('#number2').click()
  cy.get('#number2').click()
  cy.get('#number2').click()
  cy.get('#number2').click()
  cy.get('#operator-multiply').click()
  cy.get('#number1').click()
  cy.get('#number2').click()
  cy.get('#number3').click()
  cy.get('#number4').click()
  cy.get('#number5').click()
  cy.get('#number6').click()
  cy.get('#operator-equals').click()

  cy.get('.display').should('contain', '27434639232')

})

it('should display error when a number is divided with 0', () => {

  cy.get('#number8').click()
  cy.get('#operator-divide').click()
  cy.get('#number0').click()
  cy.get('#operator-equals').click()

  cy.get('.display').should('contain', 'error')

})

})
