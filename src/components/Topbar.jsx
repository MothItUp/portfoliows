import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

export default function Topbar() {
    return (
        <TopbarStyled>
            <Navigation />
        </TopbarStyled>
    )
}

const TopbarStyled = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    background-color: var(--topbar-dark-color);
`;

