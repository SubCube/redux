import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
// import * as actions from './actions'
import App from './components/app'

// Функция bindActionCreators from REDUX
// const bindActionCreator = (creator, dispatch) => (...args)=> {
//   dispatch(creator(...args))
// }

const store = createStore(reducer)
// const { dispatch } = store


// const {inc,dec, rnd, res} = bindActionCreators(actions, dispatch)

// document.querySelector('#inc').addEventListener('click', inc)
// document.querySelector('#dec').addEventListener('click', dec)
// document.querySelector('#res').addEventListener('click', res)
// document.querySelector('#rnd').addEventListener('click', () => {
//   const randomValue = Math.floor(Math.random() * 10)
//   rnd(randomValue)
// })


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'))



