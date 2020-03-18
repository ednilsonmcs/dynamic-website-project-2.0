import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import LineButton from '../components/LineButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DynamicLogo from '../svg/DynamicLogo'
import LottieWork from '../components/LottieWork'

const CursosPage = () => (
  <Layout>
    <section className="pt-20" id="top">
      <div className="container mx-auto px-8 lg:flex items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="w-3/5 mx-auto lg:mx-0">
            <DynamicLogo />
          </div>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Aulas particulares das ferramentas da Microsoft personalizadas para você. 
          </p>
          <p className="mt-8 md:mt-12">
            <Button><AnchorLink className="text-white hover:text-white" href="#planos">Conheça os Planos</AnchorLink></Button>
          </p>
        </div>
        <div className="m-0 hidden lg:w-1/2 lg:block">
          <LottieWork />
        </div>
      </div>
    </section>
    <section id="planos" className="my-20 py-16 pb-20 lg:mb-40 lg:mt-48" style={{background: "linear-gradient(29deg, #5B87B5, #3B5F9E 70%)"}}>
    <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-5xl  text-white mx-4 md:mx-0">Entre em contato e receba um orçamento personalizado!</h2>
    <p className="mt-4 text-white text-xl font-thin mx-4 md:mx-0">Clique no botão abaixo para falar com a gente pelo Whatsapp.</p>
    <a target="_blank" href="https://api.whatsapp.com/send?phone=5551996936418&text=Ol%C3%A1!%20Voc%C3%AA%20pode%20me%20ajudar?"><LineButton className="mt-8">Clique aqui</LineButton></a>
    </div>
    </section>
  </Layout>
)

export default CursosPage