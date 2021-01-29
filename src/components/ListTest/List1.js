import React, { useState } from 'react'
import dummyGen from './dummy'

const List = () => {
  const [data, setData] = useState(() => dummyGen())
  return (
    <div className='listContainer'>
      <button onClick={() => console.log('sudoSubmit', data)}>sudoSubmit</button>
      <div className='inputContainer'>
        {data.map((item, idx) => (
          <input
            key={idx}
            value={item.value}
            onChange={(e) => {
              const _data = [...data]
              _data[idx].value = e.target.value
              setData(_data)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default List
