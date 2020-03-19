import React from 'react'

import PlanilhasSection from '../components/PlaninhaSection'
import planilhasData from '../data/planilhas-data'
import Layout from '../components/layout/Layout';

const PlanilhasGratuitasPage = () => (
  <Layout>
    <div className="mb-16" style={{background: "linear-gradient(29deg, #5B87B5, #3B5F9E 70%)"}}>
      <h1 className="text-white text-6xl text-center font-bold pt-24">Planilhas Gratuitas Dynamic</h1>
      <p className="text-white text-xl text-center font-light pt-2 pb-24">Feitas especialmente para você.</p>
    </div>
    {planilhasData.map(data => (
      <PlanilhasSection id={data.id} title={data.title} description={data.description} img={data.img} reverseOrder={data.reverseOrder} />
    ))}
  </Layout>
)

export default PlanilhasGratuitasPage