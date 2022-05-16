import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add numbers', () => {

  const button1 = container.getByTestId('number1')
  const buttonadd = container.getByTestId('operator_add')
  const button4 = container.getByTestId('number4')
  const buttonequal = container.getByTestId('operator-equals')
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button1)
  fireEvent.click(buttonadd)
  fireEvent.click(button4)
  fireEvent.click(buttonequal)

  expect(runningTotal.textContent).toEqual('5')

})

it('should subtract numbers', () => {

  const button7 = container. getByTestId('number7')
  const buttonsubtract = container.getByTestId('operator-subtract')
  const button4 = container.getByTestId('number4')
  const buttonequal = container.getByTestId('operator-equals')
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button7)
  fireEvent.click(buttonsubtract)
  fireEvent.click(button4)
  fireEvent.click(buttonequal)

  expect(runningTotal.textContent).toEqual('3')

})

it('should multiply numbers', () => {

  const button3 = container.getByTestId('number3')
  const buttonmultiply = container.getByTestId('operator-multiply')
  const button5 = container.getByTestId('number5')
  const buttonequal = container.getByTestId('operator-equals')
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button3)
  fireEvent.click(buttonmultiply)
  fireEvent.click(button5)
  fireEvent.click(buttonequal)

  expect(runningTotal.textContent).toEqual('15')

})

it('should divide numbers', () => {



const button2 = container.getByTestId('number2')
const button1 = container.getByTestId('number1')
const buttondivide = container.getByTestId('operator-divide')
const button7 = container.getByTestId('number7')
const buttonequal = container.getByTestId('operator-equals')
const runningTotal = container.getByTestId('running-total');

fireEvent.click(button2)
fireEvent.click(button1)
fireEvent.click(buttondivide)
fireEvent.click(button7)
fireEvent.click(buttonequal)
expect(runningTotal.textContent).toEqual('3')

})

it('should concatenate multiple number clicks', () => {

  const button1 = container.getByTestId('number1')
  const button2 = container.getByTestId('number2')
  const button3 = container.getByTestId('number3')
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button1)
  fireEvent.click(button1)
  fireEvent.click(button2)
  fireEvent.click(button2)
  fireEvent.click(button3)
  fireEvent.click(button3)

  expect(runningTotal.textContent).toEqual('112233')

})

it('should chain multiple operations together', () =>{

  const button1 = container.getByTestId('number1')
  const buttonadd = container.getByTestId('operator_add')
  const button2 = container.getByTestId('number2')
  const buttonmultiply = container.getByTestId('operator-multiply')
  const buttonequal = container.getByTestId('operator-equals')
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button1)
  fireEvent.click(buttonadd)
  fireEvent.click(button2)
  fireEvent.click(buttonmultiply)
  fireEvent.click(button2)
  fireEvent.click(buttonequal)
  
  expect(runningTotal.textContent).toEqual('6')
  
})

it('should clear the running total without affecting the calculation', () => {

  const button8 = container.getByTestId('number8')
  const buttondivide = container.getByTestId('operator-divide')
  const button2 = container.getByTestId('number2')
  const buttonequal = container.getByTestId('operator-equals')
  const buttonadd = container.getByTestId('operator_add')
  const button1= container.getByTestId('number1')
  const buttonc = container.getByTestId('clear')
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button8)
  fireEvent.click(buttondivide)
  fireEvent.click(button2)
  fireEvent.click(buttonequal)

  expect(runningTotal.textContent).toEqual('4')

  fireEvent.click(buttonadd)
  fireEvent.click(button1)
  fireEvent.click(buttonc)

  expect(runningTotal.textContent).toEqual('0')

  fireEvent.click(button2)
  fireEvent.click(buttonequal)

  expect(runningTotal.textContent).toEqual('6')

  })

})


