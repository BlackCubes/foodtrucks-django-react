import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './containers';

import AuthProvider from './providers';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
