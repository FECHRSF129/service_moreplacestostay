// This is to establish the databse
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/room', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const dbroom = mongoose.connection;

// Below is to verify whether it is connected to DB:
dbroom.on('error', console.error.bind(console, 'connection error:'));
dbroom.once('open', function() {
  console.log(`Connected to Room DB`)
});

// This is to define the room schema
let roomSchema = new mongoose.Schema({
  roomName: String,
  roomPrice: Number,
  type: String,
  numberOfBeds: Number,
  imageUrl: String,
  savedList: String,
  roomUrl: String,
  superHost: Boolean
})

// This is to define the list schema
let listSchema = new mongoose.Schema({
  listName: String,
  numberOfItems: Number
});

const Room = mongoose.model('Room', roomSchema);
const List = mongoose.model('List', listSchema);

var getAllRooms = function(callback) {
  Room.find((err, rooms) => {
    if (err) {
      callback(err)
      console.log(`Error getting rooms info from DB`)
    } else {
      callback(null, rooms)
      console.log(`Success getting rooms info from DB`)
    }
  });
}

var addToList = function(info, callback) {
  let roomName = {roomName: info["roomName"]}
  let savedList = {$set:{savedList: info["listName"]}}
  Room.update(roomName, savedList, (err, result) => {
    if (err) {
      callback(err)
      console.log("Error updating rooms")
    } else {
      callback(null, result)
      console.log("Rooms updated")
    }
  })
}

var removeRoom = function(info, callback) {
  let roomName = {roomName: info["roomName"]}
  let savedList = {$set:{savedList: ""}}
  Room.update(roomName, savedList, (err, result) => {
    if (err) {
      callback(err)
      console.log("Error updating rooms")
    } else {
      callback(null, result)
      console.log("Rooms updated")
    }
  })
}

var getAllLists = function(callback) {
  List.find((err, lists) => {
    if (err) {
      callback(err)
      console.log(`Error getting lists info from DB`)
    } else {
      callback(null, lists)
      console.log(`Success getting lists info from DB`)
    }
  });
}

var incList = function(info, callback) {
  let listName = {listName: info["listName"]}
  let numberOfItems = {$inc:{numberOfItems:1}}
  console.log(info["listName"])
  List.update(listName, numberOfItems, (err, result) => {
    if (err) {
      callback(err)
      console.log("Error updating rooms")
    } else {
      callback(null, result)
      console.log("Rooms updated")
    }
  })
}

var decList = function(info, callback) {
  let listName = {listName: info["listName"]}
  let numberOfItems = {$inc:{numberOfItems:-1}}
  List.update(listName, numberOfItems, (err, result) => {
    if (err) {
      callback(err)
      console.log("Error updating rooms")
    } else {
      callback(null, result)
      console.log("Rooms updated")
    }
  })
}

var createList = function(info, callback) {
  let listName = {listName: info["listName"]}
  let list = {listName: info["listName"], numberOfItems: 0}
  List.update(listName, list, {upsert: true}, (err, result) => {
    if (err) {
      callback(err)
      console.log("Error updating rooms")
    } else {
      callback(null, result)
      console.log("Rooms updated")
    }
  })
}

module.exports = {
  Room: Room,
  dbroom: dbroom,
  List: List,
  getAllRooms: getAllRooms,
  getAllLists: getAllLists,
  addToList: addToList,
  incList: incList,
  removeRoom: removeRoom,
  decList: decList,
  createList: createList
}


