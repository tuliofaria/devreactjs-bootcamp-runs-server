const app = require('./app')
require('./db')

app.listen(3001, () => {
  console.log('Server running...')
})
