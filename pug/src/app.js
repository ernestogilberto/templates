const express = require('express')
const productsRouter = require('./routes/products')

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.set('views',  './views')
app.set('view engine', 'pug')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/api/products', productsRouter)

app.get('/', (req, res) => {
  res.render('home')
})