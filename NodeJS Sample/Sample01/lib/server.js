// var request = require("request");
// request("https://ghibliapi.herokuapp.com/films", function(error, response, body) {
//     console.log(body);
// });

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'EmployeeDB';

var empNames = '';

var empJSON = '';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const myDB = client.db(dbName);

    var cursor = myDB.collection("Employee").find();

    cursor.forEach(function(item) {
        empNames = empNames + item['Employee Name'] + '\n';
        empJSON = empJSON + item + '\n';
    });

    console.log(empJSON)

    client.close();
});

/*server.js*/
const http = require('http');
const hostname = '127.0.0.1';
const port = 4043;
const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Name of Employees:\n');
    res.end(empNames);
});
server.listen(4043, hostname, function() {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});