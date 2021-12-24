import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import Ourlogo from "../components/icons/ourlogo.svg"

export default function Navigation() {
    return (
        <NavigationStyled>       
                <a href="https://github.com/MothItUp"><img src={Ourlogo} alt="Moth It Up logo"/></a>   
                <ul className="nav-items">
                    <li className="nav-item">
                        <LinkStyled to="/" activeClassName = "active-class">Home</LinkStyled>
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
    align-items: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    img{
        height: 50px;
        margin-left: 1rem;
    }
    .nav-items {
        display: flex;
        .nav-item {
            padding: 1rem;
            font-size: 1.2rem;
        }
    }
`;

const LinkStyled = styled(Link) `
    color: var(--white-color);
    text-decoration: underline 0.15rem rgba(255,255,255,0);
    transition: text-decoration-color 600ms;
    &:hover,
    &:focus {
        text-decoration: underline 0.2rem var(--white-color);
    }
`;

