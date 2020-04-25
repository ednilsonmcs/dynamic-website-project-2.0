import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`bg-white rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.5)'
    }}
  >
    {children}
  </div>
);

export default Card;
