import { useState } from 'react'
import './App.scss'
import ListTest from 'components/ListTest'
import CreditCardForm from 'components/CreditCardForm'

function App() {
  const [state] = useState('1')
  return (
    <div id='App'>
      <div className='nav'>navnav</div>
      <div className='container'>
        {state === '0' ? <ListTest /> : null}
        {state === '1' ? <CreditCardForm /> : null}
      </div>
    </div>
  )
}

export default App
