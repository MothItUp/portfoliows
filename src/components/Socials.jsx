import React from 'react'
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {

    return (
        <SocialsStyled>
            <IconStyled>
                <a href="/" className = 'social-link'>
                    <FontAwesomeIcon icon={ faGithub } size = '2x' color='white' className='fa-icon'></FontAwesomeIcon>
                </a>
            </IconStyled>
            <IconStyled>
                <a href="/">
                    <FontAwesomeIcon icon={ faTwitter } size = '2x' color='white' className='fa-icon'></FontAwesomeIcon>
                </a>
            </IconStyled>
            <IconStyled>
                <a href="/">
                    <FontAwesomeIcon icon={ faTwitch } size = '2x' color='white' className='fa-icon'></FontAwesomeIcon>
                </a>
            </IconStyled>
            <Line />
        </SocialsStyled>
    )
}


const SocialsStyled = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 1;
    .fa-icon {
        transition: all 0.4s ease-in-out;
        &:hover {
            transform: translateX(8px);
        };
    };
`;

const IconStyled = styled.li`
    margin-top: 10px;
`;

const ChangeColor = keyframes`
    0%   {background-color: var(--white-color);}
    25%  {background-color: var(--red-color);}
    75%  {background-color: var(--green-color);}
    100% {background-color: var(--white-color);}
`;

const Line = styled.span`
    width: 5px;
    height: 5rem;
    margin-top: 10px;
    background-color: var(--white-color);
    animation: ${ChangeColor} 10s linear infinite;
`;
