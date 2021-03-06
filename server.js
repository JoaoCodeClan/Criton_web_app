const express = require('express');
const parser = require('body-parser');
const server = express();


server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));
server.use(express.static('client/public'));



server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});


server.listen(3000, function(){
  console.log("Listening on port 3000");
});
