import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import DynamicLogo from '../../svg/DynamicLogo'

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-40 mr-3">
          <AnchorLink href="#top">
            <DynamicLogo />
          </AnchorLink>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#solucoes">
          Soluções
        </AnchorLink>
        <AnchorLink className="px-4" href="#ferramentas">
          Ferramentas
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#depoimentos">
          Depoimentos
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">As Planilha + Braba</Button>
      </div>
    </div>
  </header>
);

export default Header;
