import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './utils/store'
import App from '~/App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <h2>[{ process.env.API_URL }]</h2>
      <App />
    </Router>
  </Provider>
);