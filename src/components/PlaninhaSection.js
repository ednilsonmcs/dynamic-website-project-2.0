import React from 'react'
import Button from './Button'

const PlanilhasSection = ({id, title, description, img, downloadLink, reverseOrder}) => (
  <div className="py-12 mb-24" key={id}>
    <div 
      className={`container mx-auto px-16 items-center flex flex-col justify-between lg:flex-row border-primary  ${reverseOrder ? `border-r-2` : `border-l-2`}`}
      >
      <div className="lg:w-1/2">
        <h3 className={`font-light text-5xl ${reverseOrder ? `text-right` : `text-left `}`}>{title}</h3>
        <p className={`font-light front-md ${reverseOrder ? `text-right` : `text-left `}`}>{description}</p>
        <a href={downloadLink} target="_blank"><Button className={`flex mt-4 ${reverseOrder ? 'ml-auto' : 'mr-auto'}`}>FAZER DOWNLOAD DA PLANILHA</Button></a>
      </div>
      <div
        className={`mt-10 lg:mt-0  pl-auto lg:w-5/12 ${reverseOrder && `order-last lg:order-first`}`}
      >
        <img className="w-100" src={img} />
      </div>
    </div>
  </div>
)

export default PlanilhasSection