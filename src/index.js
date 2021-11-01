import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import {store, persistor} from "./redux/store"

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>

    </Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
