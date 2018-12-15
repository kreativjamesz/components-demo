import React, { Component } from "react";
import logo from "../logo.svg";
import { NavLink, Link, withRouter } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className='uk-navbar-container '>
                    <nav className='uk-navbar uk-background-primary uk-light'>
                        <div className='uk-navbar-left'>
                            <a href='../' className='uk-navbar-item uk-logo'>
                                <img
                                    src={logo}
                                    className='App-logo'
                                    alt='logo'
                                />
                            </a>
                        </div>
                        <div className='uk-navbar-right'>
                            <ul className='uk-navbar-nav uk-visible@m'>
                                <li className='uk-navbar-item'>
                                    <a className='' href='./topic3'>
                                        Topic 3
                                    </a>
                                </li>
                                <li className='uk-navbar-item'>
                                    <a className='' href='./topic4'>
                                        Topic 4
                                    </a>
                                </li>
                                <li className='uk-navbar-item'>
                                    <a className='' href='./topic5'>
                                        Topic 5
                                    </a>
                                </li>
                            </ul>
                            <div className='uk-navbar-item uk-visible@m'>
                                <a
                                    href=''
                                    className='uk-button uk-button-default tm-button-default uk-icon uk-light'
                                >
                                    <canvas
                                        uk-icon='icon: home'
                                        width='20'
                                        height='20'
                                        className='uk-icon'
                                        hidden='true'
                                    />{" "}
                                    Portfolio
                                </a>
                            </div>
                            <a
                                uk-navbar-toggle-icon=''
                                href='#my-id'
                                uk-toggle=''
                                className='uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon uk-light'
                            />
                        </div>
                    </nav>
                </div>
                <div id='my-id' className='uk-offcanvas'>
                    <p>Hello World</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
