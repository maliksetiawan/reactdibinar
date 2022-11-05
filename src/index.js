import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/index.css';
import 'assets/style.css'
import 'assets/App.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'assets/carimobil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/rent.css';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from 'ex-redux';

 const history = createBrowserHistory()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}> 
<Router history={history}>
    <App />
  </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
