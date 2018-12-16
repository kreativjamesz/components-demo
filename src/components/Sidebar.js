import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            toggleicon: false
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    toggleSideBar = evt => {
        evt.preventDefault();
        console.log("The link was clicked.");
        this.setState({
            condition: !this.state.condition,
            toggleicon: !this.state.toggleicon
        });
    };

    render() {
        return (
            <React.Fragment>
                <nav
                    id='sidebar'
                    className={this.state.condition ? "active" : null}
                >
                    <div className='sidebar-header'>
                        <button
                            type='button'
                            id='sidebarCollapse'
                            className='btn btn-purple'
                            onClick={e => this.toggleSideBar(e)}
                        >
                            {" "}
                            <FontAwesomeIcon
                                color='#fafafa'
                                size='lg'
                                icon={
                                    this.state.condition
                                        ? "arrow-right"
                                        : "arrow-left"
                                }
                            />{" "}
                        </button>
                        <h3>Topic Covers</h3>
                    </div>

                    <ul className='list-unstyled components'>
                        <li className=''>
                            <a
                                href='#homeSubmenu'
                                data-toggle='collapse'
                                aria-expanded='false'
                                className='dropdown-toggle'
                            >
                                Autotaks
                            </a>
                            <ul
                                className='collapse list-unstyled'
                                id='homeSubmenu'
                            >
                                <li>
                                    <a href='#'>Home 1</a>
                                </li>
                                <li>
                                    <a href='#'>Home 2</a>
                                </li>
                                <li>
                                    <a href='#'>Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a
                                href='#pageSubmenu'
                                data-toggle='collapse'
                                aria-expanded='false'
                                className='dropdown-toggle'
                            >
                                Reinsurance
                            </a>
                            <ul
                                className='collapse list-unstyled'
                                id='pageSubmenu'
                            >
                                <li>
                                    <a href='#'>Page 1</a>
                                </li>
                                <li>
                                    <a href='#'>Page 2</a>
                                </li>
                                <li>
                                    <a href='#'>Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>Subject of Insurance</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}
export default Sidebar;
