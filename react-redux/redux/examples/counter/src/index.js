import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import reducers from './reducers/products'

function logger1({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch--1--next, action:', next, action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch--1', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    // return returnValue
  }
}

function logger2({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch--2--next, action:', next, action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch--2', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    // return returnValue
  }
}

function logger3({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch--3--next, action:', next, action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch--3', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    // return returnValue
  }
}

const store = createStore(reducers, applyMiddleware(logger1, logger2, logger3))

console.log(store.getState())
const rootEl = document.getElementById('root')

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState().counter}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  )

render()
store.subscribe(render)
