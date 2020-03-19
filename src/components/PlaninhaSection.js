import React from 'react'

const PlanilhasSection = ({id, title, description, img, reverseOrder}) => (
  <div className="py-12" key={id}>
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <h3 className="text-center text-4xl">{title}</h3>
        <p className="text-center font-md">{description}</p>
      </div>
      <div
        className={`mt-10 lg:mt-0 w-1/2 lg:w-1/3 ${reverseOrder && `order-last lg:order-first`}`}
      >
        <img src={img} />
      </div>
    </div>
  </div>
)

export default PlanilhasSection