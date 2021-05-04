import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './common/Base';

import { FormContainer, LoginPage } from './containers';

import AuthProvider from './providers';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Main>
          <Switch>
            <Route exact path="/login">
              <LoginPage FormContainerComponent={FormContainer} />
            </Route>
          </Switch>
        </Main>
      </AuthProvider>
    </Router>
  );
}

export default App;
