const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request(
  "https://www.github.com/topics",
  callback
);
let finaldata=[];
function callback(err,res,html){
    if(!err){
        fs.writeFileSync("hello.html",html);
        let $ =cheerio.load(html);
let divs =$(".no-underline.d-flex.flex-colum.flex-justify-center");
for(let i=0; i<divs.length; i++){
    request("https://github.com"+$(divs[i]).attr("href"),getRepositories);
}
    }
}
function getRepositories(err,res,html){
    if(!err){
        let $=cheerio.load(html);
        let repoLinks=$("a.text-bold");
        for(let i=0; i<repoLinks.length && i<8; i++){
            request("https://github.com"+$(repoLinks[i]).attr("href"),"/issues",getIssues);
        }
    }
}

function getIssues(err,res,html){
    if(!err){
        let $=cheerio.load(html);
        fs.writeFileSync("issue.html",html);
        let issueLinks=$(".Link--primary.v-align-middle.no-underline,h4.js-navigation-open.markdown-title");
        for(let i=0; i<issueLinks.length && i<8; i++){
            console.log("Isuue no. "+(i+1));
            console.log
        }
    }
}