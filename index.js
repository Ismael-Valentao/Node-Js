var express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        status : 'success',
        data: 'Hello World'
    });
    res.end();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('Server Started...');
});

