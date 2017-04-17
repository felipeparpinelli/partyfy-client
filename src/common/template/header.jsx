import React from 'react'
import Login from '../../login/loginContent'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><i className='fa fa-music'></i></span>
            <span className='logo-lg'>
                <i className='fa fa-music'></i>
                <b> Partyfy </b>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Login />
        </nav>
    </header>
)
