import React from 'react';
import Layout from './components/Layout';
import Heading from './components/Heading';
import Contacts from './components/Contacts';
import Counter from './components/Counter';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Heading />
        <Counter />
        <Contacts />
      </Layout>
    </>
  );
}

export default App;
