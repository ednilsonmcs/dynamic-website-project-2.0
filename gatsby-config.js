module.exports = {
  siteMetadata: {
    title: 'Dynamic Soluções',
    description: 'Desenvolvimento, Consultoria e Treinamento nas ferramentas da Microsoft.',
    siteUrl: 'https://dynamicpoa.com'
  },
  plugins: [
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
