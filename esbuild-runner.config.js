// example esbuild-runner.config.js
module.exports = {
    type: "bundle", // bundle or transform (see description above)
    esbuild: {
      // Any esbuild build or transform options go here
      platform: 'node',
    },
  }