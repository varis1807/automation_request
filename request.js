const request=require("request");
const cheerio = require("cheerio");

request("https://www.pepcoding.com",callback);

function callback(err,response,html){
    if(!err){
let $ = cheerio.load(html);
let myEmail = $("h1.section-heading-l.bolder");
console.log(myEmail.text());
    }
}
