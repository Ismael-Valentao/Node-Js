var express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.status(200).write('<h1>Hello World By THE SECOND TIME!</h1>');
    res.end();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('Server Started...');
});

