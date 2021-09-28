import React from "react";
import { Switch } from "react-router-dom";
import RouteHandler from "./components/RouteHandler";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler path="/about">
                <About />
            </RouteHandler>
            <RouteHandler path="/signin">
                <SignIn />
            </RouteHandler>
            <RouteHandler path="/signup">
                <SignUp />
            </RouteHandler>
            <RouteHandler private path="/post-an-ad">
                <About />
            </RouteHandler>
            <RouteHandler path="/ad/:id">
                <AdPage />
            </RouteHandler>
            <RouteHandler path="*">
                <NotFound />
            </RouteHandler>
        </Switch>
    )
}