import * as React from 'react'
import styled from 'styled-components';
import Socials from '../components/Socials';
import Topbar from '../components/Topbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import GlobalStyle from '../styles/GlobalStyle';

const IndexPage = () => {
  return (
    <IndexStyled>
      <GlobalStyle />
      <Topbar />
      <Hero />
      <Skills/>
      <Contact />
      <Socials />
    </IndexStyled>
  )
}

const IndexStyled = styled.div`
  background-color: red;
`;

export default IndexPage;

