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


module.exports = {
  Room: Room,
  dbroom: dbroom,
  List: List,
  getAllRooms: getAllRooms
}


