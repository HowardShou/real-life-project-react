import { useState } from 'react'
import './App.scss'
import ListTest from 'components/ListTest'
import CreditCardForm from 'components/CreditCardForm'
import IG from 'components/IG'

function App() {
  const [state, setState] = useState('1')
  return (
    <div id='App'>
      <div className='nav'>
        <div>navnav</div>
        <button onClick={() => setState('0')}>change ListTest</button>
        <button onClick={() => setState('1')}>change CreditCardForm</button>
        <button onClick={() => setState('2')}>change IG</button>
      </div>
      <div className='container'>
        {state === '0' ? <ListTest /> : null}
        {state === '1' ? <CreditCardForm /> : null}
        {state === '2' ? <IG /> : null}
      </div>
    </div>
  )
}

export default App
