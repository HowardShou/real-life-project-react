import React, { useMemo, useCallback, useReducer } from 'react'
import { DisplayNumber, DisplayName } from './components'
import { reducer, initStateGen } from './Reducer'
import { CSSTransition } from 'react-transition-group'
import './components/creditFrom.scss'
import { years, months, statusDetector, companyDetector } from './config'

//Main component
const CreditForm = ({ initArgs }) => {
  const [{ cardNum, cardName, month, year, cvc, submit }, dispatch] = useReducer(reducer, initArgs, initStateGen)
  const company = useMemo(() => companyDetector(cardNum.value), [cardNum.value])

  const cardNumChange = useCallback(
    (e) => {
      const rule = /\d/
      let _payload = e.target.value.replace(/\s/g, '')
      if (rule.test(_payload) || _payload.length === 0) return dispatch({ type: 'cardNumChange', payload: _payload })
    },
    [dispatch]
  )
  const cardNumFocus = useCallback(() => dispatch({ type: 'cardNumFocus', payload: true }), [dispatch])
  const cardNumBlur = useCallback(() => dispatch({ type: 'cardNumFocus', payload: false }), [dispatch])

  const cardNameChange = useCallback((e) => dispatch({ type: 'cardNameChange', payload: e.target.value }), [dispatch])
  const cardNameFocus = useCallback(() => dispatch({ type: 'cardNameFocus', payload: true }), [dispatch])
  const cardNameBlur = useCallback(() => dispatch({ type: 'cardNameFocus', payload: false }), [dispatch])

  const monthChange = useCallback((e) => dispatch({ type: 'monthChange', payload: e.target.value }), [dispatch])
  const monthFocus = useCallback(() => dispatch({ type: 'monthFocus', payload: true }), [dispatch])
  const monthBlur = useCallback(() => dispatch({ type: 'monthFocus', payload: false }), [dispatch])

  const yearChange = useCallback((e) => dispatch({ type: 'yearChange', payload: e.target.value }), [dispatch])
  const yearFocus = useCallback(() => dispatch({ type: 'yearFocus', payload: true }), [dispatch])
  const yearBlur = useCallback(() => dispatch({ type: 'yearFocus', payload: false }), [dispatch])

  const cvcChange = useCallback((e) => dispatch({ type: 'cvcChange', payload: e.target.value }), [dispatch])
  const cvcFocus = useCallback(() => dispatch({ type: 'cvcFocus', payload: true }), [dispatch])
  const cvcBlur = useCallback(() => dispatch({ type: 'cvcFocus', payload: false }), [dispatch])

  const frontSide = (
    <div className={cvc.onFocus ? 'shouldHide' : ''}>
      <div className='layout-row space-between header'>
        <div className='chip' />
        <div className='deliver-company'>
          <CSSTransition in={true} timeout={250} classNames='slide-fade-up' appear key={company}>
            <div className={`current-company ${company}`}></div>
          </CSSTransition>
        </div>
      </div>
      <div className='body'>
        <DisplayNumber value={cardNum.value} isActive={cardNum.onFocus} />
      </div>
      <div className='layout-row footer'>
        <div className={`layout-column card-holder ${cardName.onFocus ? 'active' : ''}`}>
          <span className='subtitle'>Card Holder</span>

          <DisplayName value={cardName.value} isActive={cardName.onFocus} />
        </div>
        <div className={`layout-column card-expires ${month.onFocus || year.onFocus ? 'active' : ''}`}>
          <span className='subtitle'>Expires</span>
          <div className='expires'>
            <CSSTransition
              in={true}
              timeout={250}
              classNames='slide-fade-up'
              appear
              key={month.value ? month.value : 'month_init'}
            >
              <div className='month'>{`${
                month.value ? (month.value.length === 2 ? month.value : `0${month.value}`) : 'MM'
              }`}</div>
            </CSSTransition>
            /
            <CSSTransition
              in={true}
              timeout={250}
              classNames='slide-fade-up'
              appear
              key={year.value ? year.value : 'year_init'}
            >
              <div className='year'>{`${year.value ? year.value.slice(2, 4) : 'YY'}`}</div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  )
  const backSide = (
    <div className={cvc.onFocus ? '' : 'shouldHide'}>
      <div className='layout-row space-between header'>
        <div className='black-bar'></div>
      </div>
      <div className='body'>
        <div className='layout-column cvc-num'>
          <span>cvc</span>
          <div className='white-bar'>{cvc.value}</div>
        </div>
      </div>
      <div className='layout-row footer'>
        <CSSTransition in={true} timeout={250} classNames='slide-fade-up' appear key={company}>
          <div className={`current-company ${company}`}></div>
        </CSSTransition>
      </div>
    </div>
  )

  return (
    <div className='card-form layout-column'>
      <div className={`fancy-card ${statusDetector(cvc.onFocus)}`}>
        {/* 回想起來v-if與v-show的差異!一般這種條件式的寫法會摧毀整個dom，然而卻把我用transition加上去的calss也清掉了，所以要靠display:none去解決! */}
        {frontSide}
        {backSide}
      </div>
      <div className='layout-column input-container'>
        <span className='title'>Card Number</span>
        <input
          className='input'
          maxLength='16'
          type='text'
          value={cardNum.value}
          onChange={cardNumChange}
          onFocus={cardNumFocus}
          onBlur={cardNumBlur}
        />
        <span className='errMsg'></span>
      </div>
      <div className='layout-column input-container'>
        <span className='title'>Card Name</span>
        <input
          className='input'
          type='text'
          value={cardName.value}
          onChange={cardNameChange}
          onFocus={cardNameFocus}
          onBlur={cardNameBlur}
        />
        <span className='errMsg'></span>
      </div>
      <div className='layout-row space-between input-container'>
        <div className='layout-column expiration-date'>
          <span className='title'>Expiration Date</span>
          <div className='layout-row select-container'>
            <select
              className='small-column'
              name='month'
              value={month.value}
              onChange={monthChange}
              onFocus={monthFocus}
              onBlur={monthBlur}
            >
              {months}
            </select>
            <select
              className='small-column'
              name='year'
              value={year.value}
              onChange={yearChange}
              onFocus={yearFocus}
              onBlur={yearBlur}
            >
              {years}
            </select>
          </div>
        </div>
        <div className='layout-column cvc'>
          <span className='title'>CVC</span>
          <input
            className='small-column'
            maxLength='3'
            type='text'
            value={cvc.value}
            onChange={cvcChange}
            onFocus={cvcFocus}
            onBlur={cvcBlur}
          />
        </div>
      </div>
      <div className='layout-row button-container'>
        <div className='submit' onClick={submit}>
          Submit
        </div>
        <div className='reset' onClick={() => dispatch({ type: 'resetAll', payload: initArgs })}>
          Reset
        </div>
      </div>
    </div>
  )
}

export default CreditForm
