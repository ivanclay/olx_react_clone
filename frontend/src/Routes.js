import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/signin">
                <SignIn />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}