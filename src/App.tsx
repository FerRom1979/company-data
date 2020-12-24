import React from 'react';
import HomePage from './components/HomePage/index';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardCompanies from './components/CardCompanies/index';

function App() {
  return (
    <div className="fluid">
      <HomePage />
      <CardCompanies />
    </div>
  );
}

export default App;
