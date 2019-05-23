import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history } from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// import App from './components/App';
import Dashboard from './components/Dashboard';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
