import * as React from 'react'
import styled from 'styled-components';
import Socials from '../components/Socials';
import Topbar from '../components/Topbar';
import GlobalStyle from '../styles/GlobalStyle';

const IndexPage = () => {
    return (
      <IndexStyled>
        <GlobalStyle />
        <Topbar />
        <Socials />
      </IndexStyled>
    )
  }

const IndexStyled = styled.div`
  background-color: red;
`;

  export default IndexPage