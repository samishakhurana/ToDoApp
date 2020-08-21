import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

const middleware = applyMiddleware(logger)

const reducer = (state = {'items': []}, action) => {
  switch(action.type) {
    case 'LIST_CHANGED': 
      return {...state, 'items': action.payload}
    default: 
      return state
  }
  
}

const store = createStore(reducer, middleware);

export default store;