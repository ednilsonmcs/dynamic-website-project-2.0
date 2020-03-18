import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout/Layout';

const NotFoundPage = () => (
  <Layout>
    <section className="pt-20">
      <div className="container mx-auto px-8 items-center">
        <h1 className="text-3xl font-light leading-tight mb-6">404: Página não encontrada</h1>
        <p className="mb-6">Essa página não existe, clique no link abaixo para voltar para a Home.</p>
        <Link to="/">Voltar para a Home</Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
