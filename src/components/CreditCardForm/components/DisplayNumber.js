import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './creditFrom.scss'

const Number = ({ value, isActive }) => {
  const [reservedValue, setReservedValue] = useState('')
  useEffect(() => {
    if (value.length > reservedValue.length) setReservedValue(value)
  }, [value])

  // #是自己一套系統
  const empty = new Array(16).fill(undefined).map((item, idx) => (
    <CSSTransition in={!value[idx]} timeout={250} classNames='slide-fade-up' key={`num_#_${idx}`}>
      <div className={`num2`}>#</div>
    </CSSTransition>
  ))

  const arr = new Array(16).fill(undefined)
  if (value !== '') {
    for (let i = 0, l = value.length; i < l; i++) {
      arr[i] = value[i]
    }
  }

  const divs = arr.map((item, idx) => (
    <CSSTransition in={!!item} timeout={250} classNames='slide-fade-up' key={`num_${idx}`}>
      <div className={`num2`}>{item === undefined ? reservedValue[idx] : item}</div>
    </CSSTransition>
  ))

  return (
    <div className={`Nums2 ${isActive ? 'active' : ''}`}>
      <div className='test'>{empty}</div>
      <div className='test'>{divs}</div>
    </div>
  )
}

export default Number
