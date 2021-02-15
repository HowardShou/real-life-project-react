import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './creditFrom.scss'

const Number = ({ value, isActive }) => {
  const [reservedValue, setReservedValue] = useState('')
  useEffect(() => {
    if (value.length > reservedValue.length) setReservedValue(value)
  }, [value, reservedValue.length])

  // #是自己一套系統
  const empty = new Array(16).fill(undefined).map((item, idx) => (
    <CSSTransition in={!value[idx]} timeout={250} classNames='slide-fade-up' key={`num_#_${idx}`}>
      <div className={`num`}>#</div>
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
      <div className={`num`}>{item === undefined ? reservedValue[idx] : item}</div>
    </CSSTransition>
  ))

  return (
    <div className={`numbers_container ${isActive ? 'active' : ''}`}>
      <div className='numbers'>{empty}</div>
      <div className='numbers'>{divs}</div>
    </div>
  )
}

export default Number
