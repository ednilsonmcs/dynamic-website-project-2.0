import React from 'react'

import {EcoAssist, EngeSafety, Grasiele, Lavorolab, Martiplast, Orella, Otimizare, Sugarshoes, Vigitec} from '../svg/ClientsLogos'

const LogoSection = () => (
    <section className="grid grid-cols-3 gap-6 md:gap-16 py-20 md:mx-auto container">
      <div className="flex mx-auto"><EcoAssist className="w-20 md:w-40 m-auto"/></div>
      <div className="flex mx-auto"><EngeSafety className="w-24 md:w-40 m-auto"/></div>
      <div className="flex mx-auto"><Grasiele className="w-20 md:w-40 m-auto"/></div>
      <div className="flex mx-auto"><Lavorolab className="w-24 md:w-40 m-auto"/></div>
      <div className="flex mx-auto"><Martiplast className="w-20 md:w-32 m-auto"/></div>
      <div className="flex mx-auto"><Orella className="w-24 md:w-40 m-auto"/></div>
      <div className="flex mx-auto"><Otimizare className="w-20 md:w-40 m-auto"/></div>
      <div className="flex mx-auto"><Sugarshoes className="w-24 md:w-40 m-auto"/></div>
      <div className="flex mx-auto"><Vigitec className="w-1/4 lg:w-1/5 m-auto"/></div> 
    </section>
)


export default LogoSection