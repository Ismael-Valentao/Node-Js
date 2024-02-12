var express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.status(200).write('<h1>Hello World!</h1>');
    res.end();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('Server Started...');
});

