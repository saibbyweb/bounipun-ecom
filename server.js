const { loadNuxt } = require('nuxt')

async function start() {
  // Load nuxt
  const nuxt = await loadNuxt('start')
  
  // Get port from environment variable or default to 3000
  const port = process.env.PORT || 3000
  
  // Listen on all network interfaces (0.0.0.0)
  await nuxt.listen(port, '0.0.0.0')
  console.log(`Server listening on http://0.0.0.0:${port}`)
}

start() 