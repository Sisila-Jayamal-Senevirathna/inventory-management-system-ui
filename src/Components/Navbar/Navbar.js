import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";
import './Navbar.css';

const Navbar =()=>{
    return(
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/CoralList" activeStyle>
                    Coral List
                </NavLink>
                <NavLink to="/TankMapping" activeStyle>
                    Tank Mapping
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;