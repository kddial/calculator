import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app';
import _ from 'lodash';
import { StyleSheetManager } from 'styled-components';

// Set lodash to window global variable for debugging
window._ = _;

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager
      disableVendorPrefixes={process.env.NODE_ENV === 'development'}
    >
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById('root'),
);
