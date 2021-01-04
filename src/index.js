import './index.css';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple"
import reducer from './reducers';
import App from './routes/App'

const initialState = {
  trivia: {}
};

const createStoreWithMiddleware  = applyMiddleware(save())(createStore)
const store = createStoreWithMiddleware(reducer, load({ preloadedState: initialState }))
  
//const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('container')
  );


