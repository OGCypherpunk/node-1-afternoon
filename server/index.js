const express = require("express");
const bodyParser = require("body-parser");
const mc = require( __dirname + '/controllers/messages_controller');

const app = express();
const port = 3000;

app.use(bodyParser.json());



const url = "/api/messages";
app.post( url, mc.create );
app.get( url, mc.read );
app.put( `${url}/:id`, mc.update );
app.delete( `${url}/:id`, mc.delete );



app.listen(port, () => 
    { console.log (`Listening on port ${port}`)})
