import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

export default function Navigation() {
    return (
        <NavigationStyled>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/home/" activeClassName = "active-class">Home</Link>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav `

`;