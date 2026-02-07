import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [result, setResult] = useState('');

  const changeResult = (text: string) => {
    if (text === 'AC') {
      setResult('')
    } else if (text === '⌫') {
      setResult(result.substring(0, result.length - 1))
    } else {
      setResult(result + text)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <div className='text-xl font-bold'>Calculator</div>
      <div className='w-1/3 grid grid-cols-4 gap-0.5 bg-gray-400'>
      <input type='text' value={result} disabled={true} className='col-span-full text-right' />

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