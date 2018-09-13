import React from 'react';
import {NavLink} from 'react-router-dom'
let active= {fontWeight:'bold', color:'red'}

const Navigation = ()=>
<div>
    <ul>
        <li><NavLink exact to="/" activeStyle={active}>Landing</NavLink></li>
        <li><NavLink  to="/home" activeStyle={active}>Home</NavLink></li>
        <li><NavLink  to="/signin" activeStyle={active}>Sign-in</NavLink></li>
        <li><NavLink exact to="/account" activeStyle={active}>Account</NavLink></li>
    
    </ul>
</div>

export default Navigation;