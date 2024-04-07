const express = require('express')
const app = express()
const port = 80

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs')

const names = []

app.get('/', (req, res) => {
    res.render('index', { names: names })
})

app.post('/', (req, res) => {
    names.push(req.body.name)
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})