import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder, classMargin }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`${classMargin} mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
        style={{
          boxShadow: '0 0px 12px 6px rgba(0,0,0,.20)'
        }}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
