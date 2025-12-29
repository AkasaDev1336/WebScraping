const express = require('express');
const router = express.Router();
const cherrio = require("cheerio");
const axios = require("axios");

const app = express();


//Web Scraping!!
const URL = "https://tenki.jp/forecast/9/46/8610/43216/";



/* GET home page. */
router.get('/', function(req, res, next) {
  axios(URL).then((res)=>{
      const htmlParser = res.data;
      let data = htmlParser;
      // const $ = cherrio.load(htmlParser);

      // $(".forecast-days-wrap")

      //res.send(data);
      res.send("hello");
  }).catch((error) => console.log(error));
});

module.exports = router;
