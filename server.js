const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const https = require('http');
var servers = '';
var servers2 = '';
var timestamp = '';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/getsxlservers', (req, res) => {
    fs.readFile('currentServers.json', (err, data) => { 
        if(err) { 
            throw err; 
        } 
        servers = JSON.parse(data);
    }); 
    res.json(servers);
});

app.post('/api/postsxlservers', (req, res) => {

    timestamp = Date.now();

    fs.readFile('currentServers.json', (err, data) => { 
      if(err) { 
          throw err; 
      } 
      servers2 = JSON.parse(data);

      var ipsToCheck = [];

      servers2[0].forEach((element) => {
        console.log([element.ip]);
        newElement = [element.ip]
        ipsToCheck.push(newElement);
      });

      ipsToCheck.forEach(function(){
        var newData2 = JSON.parse(JSON.stringify(req.body));
        var newIpAddr2 = newData2["ip"];
  
        var newArr2 = servers2[0].filter(function(a) {
          return a.ip == newIpAddr2;
        });
  
        fs.writeFileSync("currentServers.json", JSON.stringify([newArr2]))
      });
    });

    var newServer = JSON.stringify(req.body);
    console.log("A SXL server has pinged master server: " + newServer);

    fs.readFile('currentServers.json', function (err, data) {
      var json = JSON.parse(data)

      var newData = JSON.parse(JSON.stringify(req.body));
      var newIpAddr = newData["ip"];

      console.log("This is the ip address: " + newIpAddr)

      var newArr = json[0].filter(function(a) {
        return a.ip !== newIpAddr;
      });

      newArr.push(req.body);
         
      console.log("Current Server List: ");
      console.log(([newArr]));
  
      fs.writeFileSync("currentServers.json", JSON.stringify([newArr]))
    })
});

function checkIfAnythingOnline(){
  var newTimestamp = Date.now();
  var difference = (timestamp - newTimestamp)/1000/60;

  if(difference < -3){
    var ar = [];
    fs.writeFileSync("currentServers.json", JSON.stringify([ar]))
    console.log("No servers online, clearing serverlist");
  }
}

checkIfAnythingOnline();

setInterval(function(){
  checkIfAnythingOnline();
}, 30000)

const port = 7778;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
