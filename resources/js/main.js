import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import EndPoints from './routes'
import Store from './services/store'
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<Provider store={Store}>
	    <EndPoints />
  	</Provider>
);