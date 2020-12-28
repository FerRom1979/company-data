import React from 'react';
import Companies from '../Companies/index';
import FormData from '../FormData/index';

const HomePage = () => {
  return (
    <div className="fluid ">
      <div className="row ">
        <div className="col-8  ">
          <Companies />
        </div>
        <div className="col-4 ">
          <FormData />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
