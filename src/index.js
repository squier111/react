import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './all.css'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

ReactDOM.render(
	 <BrowserRouter>
   		 <App />
    </BrowserRouter>,
    document.getElementById('root')
);







