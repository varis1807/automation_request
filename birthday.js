const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request(
  "https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-royal-challengers-bangalore-1st-match-1254058/full-scorecard",
  callback
);

let finalData = [];
function callback(err, res, html) {
  if (!err) {
    fs.writeFileSync("bday.html", html);
    let $ = cheerio.load(html);
    let batsmanColoumn = $(".batsman-cell");
    console.log(batsmanColoumn.length);
    for (let i = 0; i < 1; i++) {
      let batsmanName = $(batsmanColoumn[i]).text();
      let batsmenUrl = $(batsmanColoumn[i]).find("a").attr("href");
      request( "https://www.espncricinfo.com"+batsmenUrl,getBday);
      finalData.push({
        "name": batsmanName,
      });
    }

  }
}

function getBday(err,res,html){
    if(!err){
        fs.writeFileSync("player.html",html);
        let $ = cheerio.load(html);
    }
}