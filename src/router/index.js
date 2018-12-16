import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ScrollButton from "../components/ScrollButton";

import Home from "../pages/Home";
import Autotaks from "../pages/Autotaks";
import NotFound from "../pages/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Routes extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <React.Fragment>
                    <div className='App'>
                        <Route
                            path={process.env.PUBLIC_URL + "/"}
                            render={props => <Navbar {...props} />}
                        />
                        <div className='wrapper'>
                            <Sidebar />

                            <div id='content'>
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/about' component={Autotaks} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                        </div>
                        <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default Routes;
