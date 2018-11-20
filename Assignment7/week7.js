// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

    var content = fs.readFileSync('../Assignment1/data/m01.txt');//add as list or 1 by 1
    // var content = fs.readFileSync('../Assignment1/data/m02.txt');
    // var content = fs.readFileSync('../Assignment1/data/m03.txt');
    // var content = fs.readFileSync('../Assignment1/data/m04.txt');
    // var content = fs.readFileSync('../Assignment1/data/m05.txt');
    // var content = fs.readFileSync('../Assignment1/data/m06.txt');
    // var content = fs.readFileSync('../Assignment1/data/m07.txt');
    // var content = fs.readFileSync('../Assignment1/data/m08.txt');
    // var content = fs.readFileSync('../Assignment1/data/m09.txt');
    // var content = fs.readFileSync('../Assignment1/data/m10.txt');

var $ = cheerio.load(content);
var finalArray = []

//console.log($('table').eq(0).find('tbody').children()); //EX: go to the table, give me the 1st table, and let me look at the children in the HTML file
//console.log($('table').eq(1).find('tbody').children());


// var finalArray = "";
// var object1 = {a: 1, b: 2, c: 3};

// for (var property1 in object1) {
//   string1 += object1[property1];
// }

// console.log(string1);

//PARSED DATA FOR ALL 10 ZONES
//ZONE 1 
let addressArray = [];
$('td').each(function(i, elem) {
  if ($(elem).attr("style")=="border-bottom:1px solid #e3e3e3; width:260px") {
    var result = $(elem).html().split('<br>')[2].trim(); //result is a string
    var betterresult = result.split(',')[0].trim();  //better result is string
    var bestresult = betterresult.split('- '); //bestresult is an array
//    var youcandoit = bestresult[0].split('- Conference Room H'); //
    var thisshoulddoit = bestresult[0];
    //console.log(thisshoulddoit);
    addressArray.push(thisshoulddoit);
  }
})

//console.log(addressArray);

//Meeting Venue
let meetingVenueArray = [];
$('h4').each(function(i, elem) {
  if ($(elem).attr("style")=="margin:0;padding:0;") {
    var result = $(elem).html()
   // console.log(result)
    // var result = $(elem).html().split('</h4>')[0].trim(); //result is a string. if splitting at "<h4>". [0] here reflects which element to target if there are multiples
    // //console.log(result);
    // //var betterresult = result.split('style="margin:0;padding:0;">')[0].trim();  //better result is string
    // // var bestresult = betterresult.split('- '); //bestresult is an array
    // var thisshoulddoit = result[0]; // prints the 1st element in the array which is what [0] means
    // //console.log(thisshoulddoit);
    //meetingVenueArray.push(result);
  }
})

//console.log(meetingVenueArray);

//Name of Group
let groupNameArray = [];
$('td').each(function(i, elem) {
  if ($(elem).attr("style")=="border-bottom:1px solid #e3e3e3; width:260px") { //will need to creep my way down to the target the <b> through the <td> element
    var result = $(elem).html().split('</b>')[0].trim().split('<b>')[1]; //result is a string
    var betterresult = result.split(',')[0].trim();  //better result is string
    // var bestresult = betterresult.split('- '); //bestresult is an array
    // var youcandoit = bestresult[0].split('- Conference Room H'); //
    //var thisshoulddoit = result[0];
    //console.log(thisshoulddoit);
    //groupNameArray.push(result);
    
  }
})

//console.log(groupNameArray);

//Meeting Topic
let meetingTopicArray = [];
$('.detailsBox').each(function(i, elem) {
  //if ($(elem).children("div")== {
    var result = $(elem).html().split('<br />')[0].trim() //.split('</div>')[0]; //result is a string 
    // var betterresult = result.split('<br />')[4].trim();  //better result is string
    // var bestresult = betterresult.split('- '); //bestresult is an array
    // var youcandoit = bestresult[0].split('- Conference Room H'); //
    // var thisshoulddoit = result[0];
    //console.log(thisshoulddoit);
    meetingTopicArray.push(result);

})

console.log(meetingTopicArray);

//Meeting Hours
let meetingHoursArray = [];
$('td').each(function(i, elem) {
  if ($(elem).attr("style")=="border-bottom:1px solid #e3e3e3;width:350px;") {
    //var result = $(elem).html().trim().split('<br />\n<br />'); //result is a string array - each row. then loop through the result to get the <b>
    var betterresult = result.split('<br />')[0].trim();  //better result is string 
    var bestresult = betterresult.split('<option>'); //bestresult is an array
    // var youcandoit = bestresult[0].split('- Conference Room H'); //
    var thisshoulddoit = result[0];
    //console.log(thisshoulddoit);
    meetingHoursArray.push(result);
  }
})

//console.log(meetingHoursArray);


//Special Interest
let specialInterestArray = [];
$('select').each(function(i, elem) {
  if ($(elem).attr("style")=="width:145px; margin:1px;") {
    var result = $(elem).html().split('</b>')[0].trim(); //result is a string
    // var betterresult = result.split(',')[0].trim();  //better result is string
    // var bestresult = betterresult.split('- '); //bestresult is an array
    // var youcandoit = bestresult[0].split('- Conference Room H'); //
    var thisshoulddoit = result[0];
    //console.log(thisshoulddoit);
    specialInterestArray.push(result);
  }
})

//console.log(specialInterestArray);

finalArray.push({
    addresses: addressArray
    ,meetingVenues: meetingVenueArray
    ,groupName: groupNameArray
    ,meetingTopic: meetingTopicArray
    ,meetingHours: meetingHoursArray
    ,specialInterest: specialInterestArray
    
});

//console.log(JSON.stringify(result));
//console.log(finalArray.join('\n'));

