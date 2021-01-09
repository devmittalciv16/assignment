const express = require('express');

const app = express();

const axios = require("axios");

let config1 = {
    headers: {
        "x-rapidapi-key": "dc8ab90c3amsh21d6ac1a1d42cd2p1a4da3jsnabdc8672582e",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
}

app.get("/get-news", (req, res)=>{

    axios.get("http://ludoqueer.herokuapp.com/all", config1).then(data=>{
        res.send(data.data);
    })
    
})

const port = process.env.PORT||3010;
app.listen(port, ()=>{
    console.log("connected");
})