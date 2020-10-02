module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
      
    }
    return config
  },
  env: {
    Dev: { 
      FaqInv:'http://10.172.24.130/informations/faq'
    },
  },
}
