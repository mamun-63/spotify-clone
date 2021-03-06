import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';


ReactDOM.render(
  <React.StrictMode>
    {/* DataLayer or StateProvider, has two props */}
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);


