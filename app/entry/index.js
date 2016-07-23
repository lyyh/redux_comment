import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from '../components/app/App'
import todoApp from '../reducers'

let store = createStore(todoApp)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,	
	document.getElementById('container')
	)