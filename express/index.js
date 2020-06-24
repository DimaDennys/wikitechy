const express = require('express')
const app = express();

app.route('/node').get((req, res) => {
    res.send('This route for Node')
})

app.route('/angular').get((req, res) => {
    res.send('This route for Angular');
})

app.get('/', (req, res) => {
    res.send('Hello world!')
})

const server = app.listen(3000,()=>{});