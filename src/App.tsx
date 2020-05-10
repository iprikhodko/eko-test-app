import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import CostCalculatorContainer from './containers/CostCalculator';

const Container = styled.div`
  margin: 40px;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <CostCalculatorContainer />
  </Container>
);

export default App;