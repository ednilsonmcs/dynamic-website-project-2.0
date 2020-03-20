import React from 'react'
import Button from './Button'

const PlanilhasSection = ({id, title, description, img, downloadLink}) => (
  <div className="py-12 mb-24" key={id}>
    <div 
      className={`container mx-auto px-16 text-center`}
      >

        <h3 className={`font-light text-5xl lg:text-6xl`}>{title}</h3>
        <p className={`font-light front-md my-8`}>{description}</p>
      <div
        className={`w-100 mx-auto`}
      >
        <img className="w-100 pl-auto" src={img} />
        <a href={downloadLink} target="_blank"><Button className={`flex mx-auto mt-6`}>DOWNLOAD</Button></a>
      </div>
    </div>
  </div>
)

export default PlanilhasSection