import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import bgStars from '../assets/bg-stars.svg';
import bgHill from '../assets/pattern-hills.svg';

const Container = styled.main`
  background-image: url(${bgHill}), url(${bgStars}),
    linear-gradient(to bottom, hsl(235, 16%, 14%), hsl(236, 21%, 26%));
  background-position: bottom, center;
  background-repeat: no-repeat, repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Layout({ children }) {
  return (
    <Fragment>
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  );
}
