// © 2018 BTL GROUP LTD -  This package is licensed under the MIT license https://opensource.org/licenses/MIT
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'

import 'interbit-ui-components/dist/css/interbit.css'

import App from './App'

import ScrollToTop from './components/ScrollToTop'
import reducers from './redux'

const store = createStore(reducers, composeWithDevTools())

// eslint-disable-next-line react/no-render-return-value
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
