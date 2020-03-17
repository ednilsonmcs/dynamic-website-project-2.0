import React from 'react';
import Button from '../components/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LineButton from '../components/LineButton';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import LottieWork from '../components/LottieWork'
import SvgCharts from '../svg/SvgCharts';
import DevIcon from '../svg/DevIcon';
import BulbIcon from '../svg/BulbIcon';
import ClassIcon from '../svg/ClassIcon';
import DynamicLogo from '../svg/DynamicLogo'

export default () => (
  <Layout>
    <section className="pt-20" id="top">
      <div className="container mx-auto px-8 lg:flex items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="w-3/5">
            <DynamicLogo />
          </div>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Desenvolvimento, Consultoria e Treinamento nas ferramentas da Microsoft para a sua empresa. 
          </p>
          <p className="mt-8 md:mt-12">
            <Button><AnchorLink className="text-white hover:text-white" href="#solucoes">Conheça as Soluções</AnchorLink></Button>
          </p>
        </div>
        <div className="m-0 lg:w-1/2">
          <LottieWork />
        </div>
      </div>
    </section>
    <section id="solucoes" className="my-20 py-16 pb-20 lg:mb-40 lg:mt-48" style={{background: "linear-gradient(29deg, #5B87B5, #3B5F9E 70%)"}}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-white">Transforme a sua empresa com os nossos serviços</h2>
        <p className="mt-4 text-white text-xl font-thin">Soluções personalizadas e pensadas no seu negócio</p>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card>
              <DevIcon />
              <p className="font-semibold text-xl">Desenvolvimento</p>
              <p className="mt-4 mb-8">
              Planilha que consome muito seu tempo? Tantos detalhes que sempre acaba com alguma informação errada?
Criamos ferramentas automatizadas!
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card>
              <BulbIcon />
              <p className="font-semibold text-xl">Consultoria</p>
              <p className="mt-4">
              Uma das melhores opções para sua empresa, permitindo contratar planos de suporte remoto de um especialista em planilhas, apresentações e documentos.

              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card>
              <ClassIcon />
              <p className="font-semibold text-xl">Treinamento</p>
              <p className="mt-4">
              Treinamentos in-company para qualificar a sua equipe nas principais ferramentas do mercado, aumentar a produtividade e
abrir portas para novas possibilidades.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="ferramentas"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="depoimentos" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
