const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#4c74b9',
              '@font-variant-base': "'Poppins'",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
