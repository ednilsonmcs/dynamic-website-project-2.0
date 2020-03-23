module.exports = {
  siteMetadata: {
    title: 'Dynamic Soluções',
    description: 'Desenvolvimento, Consultoria e Treinamento nas ferramentas da Microsoft.',
    siteUrl: 'https://dynamicpoa.com',
    image: "/assets/img/dynamic.jpeg"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dynamic Soluções`,
        short_name: `Dynamic`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/logo.svg`
      }
    },  
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
};
