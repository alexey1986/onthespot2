import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
