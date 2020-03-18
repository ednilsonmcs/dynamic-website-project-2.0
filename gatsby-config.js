module.exports = {
  siteMetadata: {
    title: 'Dynamic Soluções',
    description: 'Desenvolvimento, Consultoria e Treinamento nas ferramentas da Microsoft.',
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
