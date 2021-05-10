import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './common/Base';

import {
  FooterContainer,
  FormContainer,
  LoginPage,
  NavbarContainer,
  ProfilePage,
} from './containers';

import { AuthProvider, TruckProvider } from './providers';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TruckProvider>
          <NavbarContainer />
          <Main>
            <Switch>
              <Route exact path="/login">
                <LoginPage FormContainerComponent={FormContainer} />
              </Route>

              <Route exact path="/myProfile">
                <ProfilePage FormContainerComponent={FormContainer} />
              </Route>
            </Switch>
          </Main>
          <FooterContainer />
        </TruckProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
