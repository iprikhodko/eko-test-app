import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import CostCalculatorContainer from './containers/CostCalculator';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <CostCalculatorContainer />
    </div>
  )
};

export default App;