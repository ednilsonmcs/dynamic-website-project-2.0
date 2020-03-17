import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DynamicLogo from '../svg/DynamicLogo'
import LottieWork from '../components/LottieWork'

const ParaVocePage = () => (
  <Layout>
    <section className="pt-20 md:pt-40" id="top">
      <div className="container mx-auto px-8 lg:flex items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="w-3/5">
            <DynamicLogo />
          </div>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Aulas particulares das ferramentas da Microsoft personalizadas para você. 
          </p>
          <p className="mt-8 md:mt-12">
            <Button><AnchorLink className="text-white hover:text-white" href="#solucoes">Conheça os Planos</AnchorLink></Button>
          </p>
        </div>
        <div className="m-0 lg:w-1/2">
          <LottieWork />
        </div>
      </div>
    </section>
  </Layout>
)

export default ParaVocePage