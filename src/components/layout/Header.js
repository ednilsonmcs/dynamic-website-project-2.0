import React from 'react';
import {Link} from 'gatsby'
import Button from '../Button';
import DynamicIcon from '../../svg/DynamicIcon'

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <Link to="/">
            <DynamicIcon />
          </Link>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/">
          Para Empresas
        </Link>
        <Link className="px-4" to="/paravoce">
          Para Você
        </Link>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Receber Planilha Grátis</Button>
      </div>
    </div>
  </header>
);

export default Header;
