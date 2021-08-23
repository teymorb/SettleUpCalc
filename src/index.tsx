import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import store from '../src/App/store'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);