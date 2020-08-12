// import dependencies
var express = require('express');
var app = express();
var PORT = 3000;
// This refers to the "dbroom" variable defined at the top of index_room.js, which is different from "Room" below; the purpose of importing this variable is to verify whether the server is connected to DB.
var dbroom = require('../database/index.js');
// var dblist = require('../database/index_list.js')
// This refers to the module exported at the borrom of index_room.js, which is different from "dbroom" above; the purpose is to use the properties inside the module.
const Room = require('../database/index.js');
const path = require('path');
const filePath = path.join(__dirname, '../client/dist')

// middleware
app.use(express.static(filePath));
app.use(express.json())

// routes (will make a router to direct different routes)

// Below is a GET request to obatin all of the room info
app.get('/room', (req, res) => {
  Room.getAllRooms((err, result) => {
    if (err) {
      res.status(401)
      res.end()
      console.log(err, `Server get room err`)
    } else {
      res.status(201)
      res.send(result)
      res.end()
      console.log(`Server get room success`)
    }
  })
})

// start server
app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})