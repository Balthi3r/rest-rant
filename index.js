require ('dotenv').config()
const express = require ('express')
const app = express ()

app.use ('/places', require('./controllers/places'))
app.get ('/', (req, res) => {
    res.send ('hello world')
})

//Wildcard Route kindly tell them page does not exist
app.get ('*', (req, res) => {
    res.status(404).send ('<h1>404 Page</>')
})
app.listen (process.env.PORT)