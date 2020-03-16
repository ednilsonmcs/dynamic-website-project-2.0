import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-40 mr-3">
          <AnchorLink href="#top">
            <svg viewBox="0 0 593 124" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <clipPath id="a">
            <path d="m344 398h593v124h-593z" clip-rule="evenodd" fill-rule="evenodd"/>
            </clipPath>
            </defs>
            <g transform="translate(-344 -398)" clip-path="url(#a)" fill="#242F65" fill-rule="evenodd">
            <path d="m344 399h32.541c11.038 0 30.675 0 43.428 18.281 6.773 9.266 9.031 19.732 9.031 30.459 0 26.746-13.285 49.26-50.603 49.26h-34.397zm25.086 76.047h10.756c18.724 0 24.082-13.008 24.082-26.887 0-5.553-1.194-12.578-4.776-18.141-2.92-4.363-7.967-9.006-19.125-9.006h-10.917z"/>
            <path d="m511 423-36.96 98h-23.398l11.694-28.217-27.336-69.783h23.538l14.758 42.636h0.262l14.064-42.636z"/>
            <path d="m519.06 423.52h20.483v7.81h0.259c2.247-3.58 6.881-10.33 19.974-10.33 6.991 0 14.8 2.92 18.765 6.36s8.459 9.26 8.459 23.69v45.92h-21.971v-40.1c0-5.16 0-15.22-11.495-15.22-12.563 0-12.563 10.85-12.563 15.35v40h-21.971z"/>
            <path d="m679 496.5h-21.831v-7.891h-0.258c-3.681 7.106-12.741 10.395-21.275 10.395-23.111 0-36.636-18.156-36.636-39.065 0-23.939 17.197-38.935 36.636-38.935 11.908 0 18.646 5.794 21.275 10.266h0.258v-7.762h21.831zm-40.05-17.888c13.655 0 18.249-11.577 18.249-18.673 0-8.814-6.033-18.543-18.378-18.543-12.344 0-17.99 10.514-17.99 18.802 0 6.837 4.981 18.414 18.119 18.414z"/>
            <path d="m695.14 423.52h20.514v7.809h0.26c1.732-3.05 6.498-10.329 20.273-10.329 6.498 0 15.378 2.26 21.205 13.108 4.505-7.149 12.014-13.108 23.317-13.108 5.166 0 13.385 1.2 19.342 7.409 6.898 7.279 7.949 12.178 7.949 28.456v40.095h-22.025v-38.995c0-5.999 0-16.278-11.263-16.278-12.194 0-12.194 11.119-12.194 15.218v40.095h-22.026v-39.995c0-3.999 0-15.348-11.012-15.348-12.455 0-12.455 11.909-12.455 16.278v38.995h-22.025z"/>
            <path d="m846 415.69h-22v-16.69h22zm0 81.31h-22v-73.495h22z"/>
            <path d="m936 468.82c-5.074 21.113-26.406 34.139-47.646 29.095-17.738-4.211-30.277-19.934-30.354-38.061 0-21.499 16.839-38.854 38.86-38.854 19.505 0 35.291 12.792 39 30.725h-22.282c-2.385-4.982-6.765-10.282-15.916-10.282-10.485-0.528-17.511 8.04-17.511 18.591 0 10.55 7.016 18.59 17.511 18.59 9.151 0 13.531-5.28 15.916-9.764z"/>
            </g>
            </svg>
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
