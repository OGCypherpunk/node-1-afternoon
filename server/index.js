const express = require("express");
const bodyParser = require("body-parser");
const mc = require( __dirname + '/controllers/messages_controller');

const app = express();
const port = 3000;

app.use(bodyParser.json());



const api = "/api/messages";
app.post( api, mc.create );
app.get( api, mc.read );
app.put( `${api}/:id`, mc.update );
app.delete( `${api}/:id`, mc.delete );



app.listen(port, () => 
    { console.log (`Listening on port ${port}`)})
