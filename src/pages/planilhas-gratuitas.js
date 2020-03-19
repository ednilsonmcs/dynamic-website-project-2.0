import React from 'react'

import PlanilhasSection from '../components/PlaninhaSection'
import planilhasData from '../data/planilhas-data'
import Layout from '../components/layout/Layout';

const PlanilhasGratuitasPage = () => (
  <Layout>
    <h1 className="text-primary text-6xl text-center font-bold pt-24">Planilhas Gratuitas Dynamic</h1>
    <p className="text-primary text-xl text-center font-light pt-2 pb-24">Feitas especialmente para você.</p>
    {planilhasData.map(data => (
      <PlanilhasSection id={data.id} title={data.title} description={data.description} img={data.img} reverseOrder={data.reverseOrder} />
    ))}
  </Layout>
)

export default PlanilhasGratuitasPage