import React from 'react';
import SEO from "../components/seo"

import Layout from '../components/layout/Layout';   
import PlanosSection from '../components/PlanosSection'

const PlanosPage = () => (
  <Layout>
    <SEO title="Planos" description="Conheça nossas soluções para você se destacar com as ferramentas Microsoft! Soluções para Excel, PowerPoint, Power BI, entre outras."/>
    <PlanosSection />
  </Layout>
)

export default PlanosPage