import React from 'react';
import {NavLink} from 'react-router-dom'
let active= {fontWeight:'bold', color:'red'}

const Navigation = ()=>
<nav className="navigation">
    <ul>
        <li><NavLink exact to="/" activeStyle={active}>Landing</NavLink></li>
        <li><NavLink  to="/home" activeStyle={active}>Home</NavLink></li>
        <li><NavLink  to="/signin" activeStyle={active}>Sign-in</NavLink></li>
        <li><NavLink exact to="/account" activeStyle={active}>Account</NavLink></li>
    
    </ul>
</nav>

export default Navigation;