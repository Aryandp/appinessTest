

import 'assets/css/main.scss';
import App from 'container/App';
import LoginView from 'modules/auth/views/LoginView';
import LogoutView from 'modules/auth/views/LogoutView';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" name="Login Page" component={LoginView} />
          <Route path="/logout" name="Logout Page" component={LogoutView} />
          <Route path="/" name="Home Page" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
