import React, { Component } from "react";

class Content extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className='container-fluid'>
                        <button
                            type='button'
                            id='sidebarCollapse'
                            className='btn btn-info'
                        >
                            <i className='fas fa-align-left' />
                            <span>Toggle Sidebar</span>
                        </button>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Content;
