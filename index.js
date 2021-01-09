const express = require("express");
const app = express();
const axios = require("axios");

var configuration = {
  headers: {
    "x-rapidapi-key": "dc8ab90c3amsh21d6ac1a1d42cd2p1a4da3jsnabdc8672582e",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
  }
};

const util = (baseUrl) => {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl, configuration).then((data) => {
      resolve(data.data);
    });
  });
};

var getNewsBaseUrl =
  "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?category=";
var getAnalysisBaseUrl =
  "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=";

app.get("/get-news", (req, res) => {
  getNewsBaseUrl += req.query.symbol;
  util(getNewsBaseUrl).then((data) => {
    res.send(data);
  });
});

app.get("/get-analysis", (req, res) => {
  getAnalysisBaseUrl += req.query.symbol;
  util(getAnalysisBaseUrl).then((data) => {
    res.send(data);
  });
});

const port = process.env.PORT || 3011;
app.listen(port, () => {
  console.log(`connected on port ${port}`);
});
