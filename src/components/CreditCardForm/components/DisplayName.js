import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import './creditFrom.scss'

const Name = ({ value, isActive }) => {
  const [maxLength, setMaxLength] = useState(value.length)
  const [reservedValue, setReservedValue] = useState(value)

  useEffect(() => {
    if (value.length > maxLength) {
      setMaxLength(value.length)
      setReservedValue(value)
    }
  }, [value])

  let arr = new Array(maxLength).fill(undefined)
  for (let i = 0, l = maxLength; i < l; i++) {
    arr[i] = value[i]
  }
  const divs = arr.map((item, idx) => (
    <CSSTransition in={!!item} timeout={250} classNames='slide-fade-right' key={`name_${idx}`} appear>
      {/* 如果是使用者在input輸入空白，則會產生一個空的div，但空的div沒有長度，自會黏在一起，因此需要特別處理 */}
      <div className={`name ${item === ' ' ? 'empty' : ''}`}>
        {/* transition的目標如果是空的，即使class加上去也沒用 */}
        {item === undefined ? reservedValue[idx] : item}
      </div>
    </CSSTransition>
  ))

  const owner = (
    <CSSTransition in={!value} timeout={250} classNames='slide-fade-up' appear>
      <div className='numbers'>Owner</div>
    </CSSTransition>
  )

  return (
    <div className={`card-name ${isActive ? 'active' : ''}`}>
      {owner}
      <div className='numbers'>{divs}</div>
    </div>
  )
}

export default Name
