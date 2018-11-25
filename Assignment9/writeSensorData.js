
var request = require('request');
const { Client } = require('pg');

var device_id = process.env.PHOTON_ID;
var access_token = process.env.PHOTON_TOKEN;
var particle_variable = 'analogvalue';
var url = 'https://api.particle.io/v1/devices/' + device_id + '/' + particle_variable + '?access_token=' + access_token;

var db_credentials = new Object();
db_credentials.user = 'ddperry';
db_credentials.host = 'process.env.AWSRDS_EP' 
db_credentials.database = 'sensorDataPotentiometer';
db_credentials.password =  "process.env.AWS_PW"; 
db_credentials.port = 5432;


var getAndWriteData = function() {
    
    // Make request to the Particle API to get sensor values
    request(url, function(error, response, body) {
        
        // Store sensor value(s) in a variable
        var sv = JSON.parse(body).result;
        
        // Convert 1/0 to TRUE/FALSE for the Postgres INSERT INTO statement
        var sv_mod; 
        sv_mod = sv;

        // Connect to the AWS RDS Postgres database
        const client = new Client(db_credentials);
        client.connect();

        // Construct a SQL statement to insert sensor values into a table
        var thisQuery = "INSERT INTO writeSensorData VALUES (" + sv_mod + ", DEFAULT);";
        console.log(thisQuery); // for debugging

        // Connect to the AWS RDS Postgres database and insert a new row of sensor values
        client.query(thisQuery, (err, res) => {
            console.log(err, res);
            client.end();
        });
    });
};

// write a new row of sensor data every five minutes
setInterval(getAndWriteData, 300000);
