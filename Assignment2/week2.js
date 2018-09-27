// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// // load the thesis text file into a variable, `content`
// // this is the file that we created in the starter code from last week
// var content = fs.readFileSync('data/thesis.txt');

// // load `content` into a cheerio object
// var $ = cheerio.load(content);

// // print (to the console) names of thesis students
// $('h3').each(function(i, elem) {
//     console.log($(elem).text());
// });

// write the project titles to a text file
// var thesisTitles = ''; // this variable will hold the lines of text

// $('.project .title').each(function(i, elem) {
//     thesisTitles += ($(elem).text()) + '\n';
// });

// fs.writeFileSync('data/thesisTitles.txt', thesisTitles);

var content = fs.readFileSync('../Assignment1/data/m03.txt');

var $ = cheerio.load(content);

var finalArray = []

$('td').each(function(i, elem) {
  if ($(elem).attr("style")=="border-bottom:1px solid #e3e3e3; width:260px") {
    var result = $(elem).html().split('<br>')[2].trim(); //result is a string
    var betterresult = result.split(',')[0].trim();  //better result is string
    var bestresult = betterresult.split('- '); //bestresult is an array
//    var youcandoit = bestresult[0].split('- Conference Room H'); //
    var thisshoulddoit = bestresult[0];
    //console.log(thisshoulddoit);
    finalArray.push(thisshoulddoit);
    console.log(finalArray.join('\n'));
    fs.writeFileSync("Week2.json",JSON.stringify(finalArray));
  }
});

