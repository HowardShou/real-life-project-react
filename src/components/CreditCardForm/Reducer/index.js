const defaultParams = {
  value: '',
  errMsg: '',
  onFocus: null,
}

const initArgs = {
  cardNum: {
    ...defaultParams,
  },
  cardName: {
    ...defaultParams,
  },
  month: {
    ...defaultParams,
  },
  year: {
    ...defaultParams,
  },
  cvc: {
    ...defaultParams,
  },
}

export function initStateGen(args = initArgs) {
  return args
}

export function reducer(state, action) {
  switch (action.type) {
    case 'cardNumChange':
      return {
        ...state,
        cardNum: {
          ...state.cardNum,
          value: action.payload,
        },
      }
    case 'cardNumErr':
      return {
        ...state,
        cardNum: {
          ...state.cardNum,
          errMsg: action.payload,
        },
      }
    case 'cardNumFocus':
      return {
        ...state,
        cardNum: {
          ...state.cardNum,
          onFocus: action.payload,
        },
      }
    case 'cardNameChange':
      return {
        ...state,
        cardName: {
          ...state.cardName,
          value: action.payload,
        },
      }
    case 'cardNameErr':
      return {
        ...state,
        cardName: {
          ...state.cardName,
          errMsg: action.payload,
        },
      }
    case 'cardNameFocus':
      return {
        ...state,
        cardName: {
          ...state.cardName,
          onFocus: action.payload,
        },
      }
    case 'monthChange':
      return {
        ...state,
        month: {
          ...state.month,
          value: action.payload,
        },
      }
    case 'monthErr':
      return {
        ...state,
        month: {
          ...state.month,
          errMsg: action.payload,
        },
      }
    case 'monthFocus':
      return {
        ...state,
        month: {
          ...state.month,
          onFocus: action.payload,
        },
      }
    case 'yearChange':
      return {
        ...state,
        year: {
          ...state.year,
          value: action.payload,
        },
      }
    case 'yearErr':
      return {
        ...state,
        year: {
          ...state.year,
          errMsg: action.payload,
        },
      }
    case 'yearFocus':
      return {
        ...state,
        year: {
          ...state.year,
          onFocus: action.payload,
        },
      }
    case 'cvcChange':
      return {
        ...state,
        cvc: {
          ...state.cvc,
          value: action.payload,
        },
      }
    case 'cvcErr':
      return {
        ...state,
        cvc: {
          ...state.cvc,
          errMsg: action.payload,
        },
      }
    case 'cvcFocus':
      return {
        ...state,
        cvc: {
          ...state.cvc,
          onFocus: action.payload,
        },
      }
    case 'resetAll':
      return initStateGen(action.payload)
    default:
      return state
  }
}
