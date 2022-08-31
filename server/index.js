const express = require('express');
const path = require('path')


const app = express();

app.get('/' , function (req , res) {
    res.sendFile(path.join(__dirname , '../index.html'))
});

const port = process.env.PORT || 9006;


app.listen(port , () => {
    console.log(`on port ${port}`);
})