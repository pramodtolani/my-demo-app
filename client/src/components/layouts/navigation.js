import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class navigation extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> 
                                <a data-toggle="dropdown" className="dropdown-toggle" href="javasctipt:void(0)">
                                    <span className="clear"> 
                                        <span className="block m-t-xs"> 
                                            <strong className="font-bold">David Williams</strong>
                                        </span> 
                                    </span> 
                                </a>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>
                        <li className={(window.location.pathname).match('users') ? 'active' : ''}>
                            <NavLink exact to="/users/list">
                                <i className="fa fa-user"></i> 
                                <span className="nav-label">Users</span> 
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level">
                                <li className={window.location.pathname == '/users/list' ? 'active' : ''}>
                                    <NavLink exact to="/users/list">List</NavLink>
                                </li>
                                <li className={window.location.pathname == '/users/add' ? 'active' : ''}>
                                    <NavLink exact to="/users/add">Add</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={(window.location.href).match('change-password') ? 'active' : ''}>
                            <a>
                                <i className="fa fa-key"></i> 
                                <span className="nav-label">Change Password</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
