import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const operators: readonly string[] = ['+', '-', 'x', '÷', '%']
  const [expression, setExpression] = useState<string[]>([])

  function isValidNumber(s: string) {
    return s.trim() !== "" && !Number.isNaN(Number(s))
  }

  function containsOperator(items: string[]): boolean {
    for (const item of items) {
      if (operators.includes(item)) {
        return true
      }
    }

    return false
  }

  function evaluate(): string {
    let x: number | null = null
    let y: number | null = null
    let op: string | null = null

    for (const item of expression) {
      if (operators.includes(item)) {
        if (op === null) {
          op = item
        }
      } else {
        if (x === null) {
          x = Number(item)
        } else if (y === null) {
          y = Number(item)
        }
      }

      if (x !== null && y !== null && op !== null) {
        switch (op) {
          case '+':
            x = x + y
            break
          case '-':
            x = x - y
            break
          case 'x':
            x = x * y
            break
          case '÷':
            x = x / y
            break
          case '%':
            x = x % y
            break
          default:
            throw new Error("Unable to evaluate expression!")  
        }

        y = null
        op = null
      }
    }

    if (x !== null) {
      return x.toFixed(4).toString()
    } else {
      return Number.MIN_SAFE_INTEGER.toString()
    }
  }

  const changeResult = (text: string) => {
    if (text === 'AC') {
      setExpression([])
    } else if (text === '⌫') {
      setExpression(expression.slice(0, expression.length - 1))
    } else if (text === '=') {
      let size: number = expression.length

      if (containsOperator(expression) && size % 2 === 1 && size > 1) {
        setExpression([evaluate()])
      }
    } else if(text === '+/-') {
      let last: string = expression[expression.length - 1]

      if (isValidNumber(last)) {
        let x: number = -1 * Number(last)

        setExpression([...expression.slice(0, expression.length - 1), x.toString()])
      }
    } else if(text === '.') {
      let last: string = expression[expression.length - 1]

      if (isValidNumber(last) && last.charAt(last.length - 1) !== '.') {
        setExpression([...expression.slice(0, expression.length - 1), last + '.'])
      }
    } else {
      let len: number = expression.length

      if (operators.includes(text)) {
        if (len > 0 && !operators.includes(expression[len - 1])) {
          setExpression([...expression, text])
        }
      } else if(isValidNumber(text)) {
        let last: string = expression[len - 1]

        if (len === 0 || operators.includes(last)) {
          setExpression([...expression, text])
        } else {
          setExpression([...expression.slice(0, len - 1), last + text])
        }
      }
    }

    // console.log(expression.length)
    // console.log(expression)
  }

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <div className='text-xl font-bold'>Calculator</div>
      <div className='w-1/3 grid grid-cols-4 gap-0.5 bg-gray-400'>
      <input type='text' value={expression.join("")} disabled={true} className='col-span-full text-right' />

      <Button changeResult={changeResult} text='⌫' color='gray' />
      <Button changeResult={changeResult} text='AC' color='gray' />
      <Button changeResult={changeResult} text='%' color='gray' />
      <Button changeResult={changeResult} text='÷' color='orange' />

      <Button changeResult={changeResult} text='7' color='gray' />
      <Button changeResult={changeResult} text='8' color='gray' />
      <Button changeResult={changeResult} text='9' color='gray' />
      <Button changeResult={changeResult} text='x' color='orange' />

      <Button changeResult={changeResult} text='4' color='gray' />
      <Button changeResult={changeResult} text='5' color='gray' />
      <Button changeResult={changeResult} text='6' color='gray' />
      <Button changeResult={changeResult} text='-' color='orange' />

      <Button changeResult={changeResult} text='1' color='gray' />
      <Button changeResult={changeResult} text='2' color='gray' />
      <Button changeResult={changeResult} text='3' color='gray' />
      <Button changeResult={changeResult} text='+' color='orange' />

      <Button changeResult={changeResult} text='+/-' color='gray' />
      <Button changeResult={changeResult} text='0' color='gray' />
      <Button changeResult={changeResult} text='.' color='gray' />
      <Button changeResult={changeResult} text='=' color='orange' />
      </div>
    </div>
  )
}

export default App