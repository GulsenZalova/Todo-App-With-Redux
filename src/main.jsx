import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css'
import reducer from "./store/reducers/todoReducer"
import { createStore } from 'redux';

const todoStore=createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </BrowserRouter>
)
