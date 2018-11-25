//CONNECT TO DB
const { Client } = require('pg');

var db_credentials = new Object();
db_credentials.user = 'ddperry';
db_credentials.host = 'process.env.AWSRDS_EP' 
db_credentials.database = 'sensorDataPotentiometer';
db_credentials.password =  "process.env.AWS_PW"; 
db_credentials.port = 5432;

const client = new Client(db_credentials);
client.connect();

//CREATE TABLE
const async = require('async');
var thisQuery = "CREATE TABLE sensorDataPotentiometer (\
name               varchar(50),\
result             varchar(10),\
last_heard         varchar(50),\
last_handshake_at  varchar(50),\
current_timestamp  varchar(100));"


client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});


//CHECK MY WORK: 
var thisQuery = "SELECT * FROM writeSensorData;"; // print all values
// var secondQuery = "SELECT COUNT (*) FROM writeSensorData;"; // print the number of rows
// var thirdQuery = "SELECT sensorValue, COUNT (*) FROM writeSensorData GROUP BY result;"; // print the number of rows for each sensorValue


client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
    console.table(res.rows);
    }
});

// client.query(secondQuery, (err, res) => {
//     if (err) {throw err}
//     else {
//     console.table(res.rows);
//     }
// });

// client.query(thirdQuery, (err, res) => {
//     if (err) {throw err}
//     else {
//     console.table(res.rows);
//     }
//     client.end();
// });
