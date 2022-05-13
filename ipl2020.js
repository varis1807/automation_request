const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request(
    "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results",callback
  );

  function callback(err,res,html){
    if(!err){
        fs.writeFileSync("hello2.html",html);
        let $ =cheerio.load(html);
        let batsmanCol=
    }
}