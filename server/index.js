const express = require('express');
// const cors = require('cors');

const app = express();

app.use(express.json());
// app.use(cors());


app.listen(6009 , () => console.log(`on port 6009`))