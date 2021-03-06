import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";

import { DashboardRoutes } from "./DashboardRoutes";
import { LoginScreen } from "../components/login/LoginScreen";

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />

                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}
