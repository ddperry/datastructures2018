// mkdir data


var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m01.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m01.txt', body);
    }
    else {console.log("Request failed!")}
});


request('https://parsons.nyc/aa/m02.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m02.txt', body);
    }
    else {console.log("Request failed!")}
});


// npm install request
// mkdir data



request('https://parsons.nyc/aa/m03.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m03.txt', body);
    }
    else {console.log("Request failed!")}
});


// npm install request
// mkdir data



request('https://parsons.nyc/aa/m04.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m04.txt', body);
    }
    else {console.log("Request failed!")}
});

// npm install request
// mkdir data



request('https://parsons.nyc/aa/m05.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m05.txt', body);
    }
    else {console.log("Request failed!")}
});


// npm install request
// mkdir data



request('https://parsons.nyc/aa/m06.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m06.txt', body);
    }
    else {console.log("Request failed!")}
});


// npm install request
// mkdir data



request('https://parsons.nyc/aa/m07.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m07.txt', body);
    }
    else {console.log("Request failed!")}
});


// npm install request
// mkdir data



request('https://parsons.nyc/aa/m08.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m08.txt', body);
    }
    else {console.log("Request failed!")}
});


// npm install request
// mkdir data



request('https://parsons.nyc/aa/m09.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m09.txt', body);
    }
    else {console.log("Request failed!")}
});


// npm install request
// mkdir data



request('https://parsons.nyc/aa/m10.html ', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m10.txt', body);
    }
    else {console.log("Request failed!")}
});