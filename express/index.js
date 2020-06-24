const express = require('express')
const app = express();
app.set('view engine', 'jade')


app.route('/node').get((req, res) => {
    res.send('This route for Node')
})

app.route('/angular').get((req, res) => {
    res.send('This route for Angular');
})

app.get('/', (req, res) => {
    res.render('index', {title: 'Wikitechy Title', message: 'Wikitechy message'})
    //res.send('Hello world!')
})

const server = app.listen(3000,()=>{});