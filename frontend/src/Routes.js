import React from "react";
import { Switch } from "react-router-dom";
import RouteHandler from "./components/RouteHandler";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';

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
            <RouteHandler private exact path="/post-an-ad">
                <AddAd />
            </RouteHandler>
            <RouteHandler path="/ad/:id">
                <AdPage />
            </RouteHandler>
            <RouteHandler path="/ads">
                <Ads />
            </RouteHandler>
            <RouteHandler path="*">
                <NotFound />
            </RouteHandler>
        </Switch>
    )
}