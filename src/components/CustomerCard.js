import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8 flex flex-col">
    {/* <p className="text-xl font-semibold">{customer.title}</p> */}
    <p className="mt-6 text-lg font-light">{customer.content}</p>
    <div className="flex items-center mt-6 md:mt-auto">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
