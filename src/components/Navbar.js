import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <React.Fragment>
                <nav className='navbar navbar-expand-lg navbar-dark bg-purple'>
                    <a className='navbar-brand' href='#'>
                        James Billy O. Vasig
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon' />
                    </button>

                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item active'>
                                <a className='nav-link' href='#'>
                                    Home{" "}
                                    <span className='sr-only'>(current)</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Link
                                </a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle'
                                    href='#'
                                    id='navbarDropdown'
                                    role='button'
                                    data-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                >
                                    Dropdown
                                </a>
                                <div
                                    className='dropdown-menu'
                                    aria-labelledby='navbarDropdown'
                                >
                                    <a className='dropdown-item' href='#'>
                                        Action
                                    </a>
                                    <a className='dropdown-item' href='#'>
                                        Another action
                                    </a>
                                    <div className='dropdown-divider' />
                                    <a className='dropdown-item' href='#'>
                                        Something else here
                                    </a>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link disabled' href='#'>
                                    Disabled
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='btn btn-success my-2 my-sm-0 text-white'
                                    href='https://kreativjamesz.github.io'
                                    target='_blank'
                                >
                                    My Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
