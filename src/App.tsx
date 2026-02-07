import './App.css'
import Button from './components/Button'

function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <div className='text-xl font-bold'>Calculator</div>
      <div className='w-1/3 grid grid-cols-4 gap-0.5 bg-gray-400'>
      <input disabled={true} className='col-span-full grid-rows-2'></input>

      <Button text='⌫' color='gray' />
      <Button text='AC' color='gray' />
      <Button text='%' color='gray' />
      <Button text='÷' color='orange' />

      <Button text='7' color='gray' />
      <Button text='8' color='gray' />
      <Button text='9' color='gray' />
      <Button text='x' color='orange' />

      <Button text='4' color='gray' />
      <Button text='5' color='gray' />
      <Button text='6' color='gray' />
      <Button text='-' color='orange' />

      <Button text='1' color='gray' />
      <Button text='2' color='gray' />
      <Button text='3' color='gray' />
      <Button text='+' color='orange' />

      <Button text='+/-' color='gray' />
      <Button text='0' color='gray' />
      <Button text='.' color='gray' />
      <Button text='=' color='orange' />
      </div>
    </div>
  )
}

export default App