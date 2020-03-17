import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3 content-center">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Sobre a Dynamic</h2>
        <p className="mt-5">Somos uma empresa localizada em Porto Alegre/RS, especializada em consultoria nas ferramentas da Microsoft, sendo as principais o Excel e o Power BI. Temos mais de 3 anos experiência com planilhas, Dashboards e VBA, além de estar sempre em busca de novos conhecimentos e atualizações.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Redes Sociais</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a target="_blank" href="https://www.linkedin.com/company/dynamicpoa/">Linkedin</a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/dynamicpoa/">Instagram</a>
          </li>
          <li>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5551996936418&text=Ol%C3%A1!%20Voc%C3%AA%20pode%20me%20ajudar?">Whatsapp</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
