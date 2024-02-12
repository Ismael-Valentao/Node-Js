var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.status(200).json({
        status : 'success',
        data: 'Hello World'
    });
    res.end();
})

app.get('/home', (req, res)=>{
    res.status(200).json({
        status : 'success',
        data: 'WelCome to HomePage'
    });
    res.end();
})


app.listen(PORT, ()=>{
    console.log('Server Started...');
});

