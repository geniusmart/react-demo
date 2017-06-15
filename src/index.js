import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'
import {LOADING,CHANGE} from './actions'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <App name={store.getState().name}
       onChange = {()=>store.dispatch({type:CHANGE})}
       onSearch = {(name)=>store.dispatch({type:LOADING},name)} />,
  rootEl
)

render()
store.subscribe(render)
