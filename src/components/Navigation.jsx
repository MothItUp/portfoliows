import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import Ourlogo from "../components/icons/ourlogo.svg"

export default function Navigation() {
    return (
        <NavigationStyled>       
                <a href="https://github.com/MothItUp"><img src={Ourlogo} alt="Moth It Up logo"/></a>   
                <ul className="nav-items">
                    <li className="nav-item">
                        <LinkStyled to="/#home" activeClassName = "active-class home-nav">Home</LinkStyled>
                    </li>
                    <li className="nav-item">
                        <LinkStyled to="/#about" activeClassName = "active-class about-nav">About</LinkStyled>
                    </li>
                    <li className="nav-item">
                        <LinkStyled to="/#contact" activeClassName = "active-class contac-nav">Contact</LinkStyled>
                    </li>
                </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav `
    z-index: 3;
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

const ChangeColor = keyframes`
    0%   {background-color: var(--white-color);}
    25%  {background-color: var(--red-color);}
    75%  {background-color: var(--green-color);}
    100% {background-color: var(--white-color);}
`;

const LinkStyled = styled(Link) `
    position: relative;
    color: rgba(255,250,255,1); /* var(--white-color) w/ alpha control */
    text-decoration: none;
    /* text-decoration: underline 0.1rem rgba(255,255,255,0); 
    transition: text-decoration-color 600ms;
    &:hover {
        text-decoration: underline 0.15rem var(--white-color);
    } */
    &:after{
        background: none repeat scroll 0 0 transparent;
        background-color: var(--white-color);
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        transition: all 0.3s ease-in-out;
        animation: ${ChangeColor} 5s linear infinite;
        transform: scaleX(0);
    }

    &:hover {
        color: rgba(255,250,255,1); /* var(--white-color) w/ alpha control */
    }

    &:hover:after{
        transform: scaleX(1);
    }
`;
