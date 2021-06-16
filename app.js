const express= require('express');
const app= express();
const env= require('dotenv');
const mongoose= require('mongoose');
const router = require('./route/api');
const bodyParser= require('body-parser');


env.config();

app.use(bodyParser.json());

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
.then(() => {
    console.log("connect!!!");
}).catch((err) => {
    console.log(`error connection ${err}`);
}) 

app.use('/',router);



app.listen(4000, () => {console.log("listen port 4000")});

