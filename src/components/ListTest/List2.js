import React, { useRef } from 'react'
import dummyGen from './dummy'
import './ListTest.scss'

const List = () => {
  const data = useRef(dummyGen())
  return (
    <div className='listContainer'>
      <button onClick={() => console.log('sudoSubmit', data.current)}>sudoSubmit</button>
      <div className='inputContainer'>
        {data.current.map((item, idx) => (
          <input
            key={idx}
            defaultValue={item.value}
            onChange={(e) => {
              data.current[idx].value = e.target.value
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default List
