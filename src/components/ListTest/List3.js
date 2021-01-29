import React, { useState, useRef } from 'react'
import dummyGen from './dummy'
import './ListTest.module.scss'

const Input = (props) => {
  const [state, setState] = useState(props.item.value)
  return (
    <input
      value={state}
      onChange={(e) => {
        setState(e.target.value)
        // props.refData[props.idx].value = e.target.value
      }}
    />
  )
}

const List = () => {
  const data = useRef(dummyGen())
  return (
    <div className='listContainer'>
      <button onClick={() => console.log('sudoSubmit', data.current)}>sudoSubmit</button>
      <div className='inputContainer'>
        {data.current.map((item, idx) => (
          <Input
            key={idx}
            item={item}
            refData={data.current}
            idx={idx}
            // value={item.value}
            // onChange={(e) => {
            //   data[idx].value = e.target.value;
            //   setData([...data]);
            // }}
          />
        ))}
      </div>
    </div>
  )
}

export default List
