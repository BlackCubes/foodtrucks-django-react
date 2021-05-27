import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  FooterContainer,
  FormContainer,
  LoginPage,
  NavbarContainer,
  ProfilePage,
  RegisterPage,
} from './containers';

import {
  AuthProvider,
  ReviewProvider,
  SocialProvider,
  TruckProvider,
} from './providers';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TruckProvider>
          <SocialProvider>
            <ReviewProvider>
              <NavbarContainer />
              <Switch>
                <Route exact path="/register">
                  <RegisterPage FormContainerComponent={FormContainer} />
                </Route>

                <Route exact path="/login">
                  <LoginPage FormContainerComponent={FormContainer} />
                </Route>

                <Route exact path="/myProfile">
                  <ProfilePage FormContainerComponent={FormContainer} />
                </Route>
              </Switch>
              <FooterContainer />
            </ReviewProvider>
          </SocialProvider>
        </TruckProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
