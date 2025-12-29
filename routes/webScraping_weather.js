const express = require('express');
const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();


//Web Scraping!!
const URL = "https://tenki.jp/forecast/9/46/8610/43216/";



/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [];
  axios(URL).then((html)=>{
      const htmlParser = html.data;
      const $ = cheerio.load(htmlParser);

      $(".section-wrap").each(function(){
        const today = $(this).find(".today-weather").prop('outerHTML');
        const tomorrow = $(this).find(".tomorrow-weather").prop('outerHTML');
        data.push({today, tomorrow});
        console.log(today);
      });

      res.type("text/html");
      res.send(data);
      //res.send("<h1>Hello world</h1>");
  }).catch((error) => console.log(error));
});

module.exports = router;
