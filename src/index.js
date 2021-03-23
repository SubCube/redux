import {createStore} from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.value;
    default:
      return state;

  }
}

const inc = ()=> ({type: 'INC'})
const dec = ()=> ({type: 'DEC'})
const rnd = (value)=> ({type: 'RND', value})

const store = createStore(reducer)

document.querySelector('#inc').addEventListener('click', () => {
  store.dispatch(inc())
})
document.querySelector('#dec').addEventListener('click', () => {
  store.dispatch(dec())
})
document.querySelector('#rnd').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10)
  store.dispatch(rnd(randomValue))
})

const update = () => {
  document.getElementById('counter').textContent = store.getState()
}

store.subscribe(update)


// let state = reducer(undefined, {})
//  state = reducer(state, {type: 'INC'})
// console.log(state)
// state = reducer(state, { type: 'INC' })
// console.log(state)

