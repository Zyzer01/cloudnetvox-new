import React from 'react';
import Counter from './Counter';
// import './styles/new.css';

const BeforeFooter = () => {
  return (
    <div
      className="text-primary"
      style={{ height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Counter value={1000} />
    </div>
  );
};

export default BeforeFooter;
