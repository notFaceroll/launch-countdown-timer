import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export default function Heading(props) {
  return (
    <Header>
      <h1>we're launching soon</h1>
    </Header>
  );
}
