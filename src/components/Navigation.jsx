import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

export default function Navigation() {
    return (
        <NavigationStyled>
            <ul className="nav-items">
                <li className="nav-item">
                    <LinkStyled to="/home/" activeClassName = "active-class">Home</LinkStyled>
                </li>
                <li className="nav-item">
                    <LinkStyled to="/about/" activeClassName = "active-class">About</LinkStyled>
                </li>
                <li className="nav-item">
                    <LinkStyled to="/portfolio/" activeClassName = "active-class">Portfolio</LinkStyled>
                </li>
                <li className="nav-item">
                    <LinkStyled to="/blog/" activeClassName = "active-class">Blog</LinkStyled>
                </li>
                <li className="nav-item">
                    <LinkStyled to="/contact/" activeClassName = "active-class">Contact</LinkStyled>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    .nav-items {
        display: flex;
        .nav-item {
            padding: 1rem;
        }
    }
`;

const LinkStyled = styled(Link) `
    color: var(--white-color);
`;