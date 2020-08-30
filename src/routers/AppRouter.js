import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

  const { user } = useContext( AuthContext );

  return (
    <Router>
      <div>
        <Switch>

          {
            ( user.logged ) 

            ? <Route path="/" component={ DashboardRoutes } />

            :  
              <>

                <Route exact path="/login" component={ LoginScreen } />

                <Redirect to="/login" /> 

              </>
          }

        </Switch>
      </div>
    </Router>
  )
}
