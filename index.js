const app = require('./app')
require('./db')

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('Server running...')
})
