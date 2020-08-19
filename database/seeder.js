var Room = require('./index.js');
// var List = require('./database/index_room.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/room', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

var rooms = [
  new Room.Room({
    roomName: "IronMan Mansion on Top of Beverly Hills",
    roomPrice: 10000,
    type: "Entire villa",
    numberOfBeds: 5,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/ironman.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/23278914?adults=4&children=0&infants=0&source_impression_id=p3_1596748436_YpHxpm7Gt8Lh66KL",
    superHost: false,
    review: 0,
    score: null
  }),
  new Room.Room({
    roomName: "$45 Million Ocean View Malibu Mansion Sleeps 14",
    roomPrice: 10000,
    type: "Entire house",
    numberOfBeds: 9,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/45_million.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/22602788/photos/430689080?adults=4&children=0&infants=0&source_impression_id=p3_1596748439_xH8lfZt3xuT57wRM",
    superHost: false,
    review: 2,
    score: null
  }),
  new Room.Room({
    roomName: "Elegance at the Beach by stayLA Luxury Rentals",
    roomPrice: 6875,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/elegance.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/21960937?adults=4&children=0&infants=0&source_impression_id=p3_1596748442_B5n6O9PA76tajU%2Bn",
    superHost: false,
    review: 1,
    score: null
  }),
  new Room.Room({
    roomName: "Beachview Malibu Estate near MariSol",
    roomPrice: 6000,
    type: "Entire house",
    numberOfBeds: 7,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/beachhouse.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/21960937?adults=4&children=0&infants=0&source_impression_id=p3_1596748442_B5n6O9PA76tajU%2Bn",
    superHost: false,
    review: 1,
    score: null
  }),
  new Room.Room({
    roomName: "Petra Manor | Malibu Luxury Mansion",
    roomPrice: 9999,
    type: "Entire house",
    numberOfBeds: 8,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/petra.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/24770890?adults=4&children=0&infants=0&source_impression_id=p3_1596749008_m13u8uQv8RH7JlGb",
    superHost: true,
    review: 0,
    score: null
  }),
  new Room.Room({
    roomName: "LOS ANGELES VIEW MODERN ESTATE- POOL- 12,000 SQ FT",
    roomPrice: 5800,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/modernestate.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/16291634?adults=4&children=0&infants=0&source_impression_id=p3_1596749130_LsvlcamDwqwT2F7G",
    superHost: false,
    review: 2,
    score: null
  }),
  new Room.Room({
    roomName: "Malibu Estate w/ Ocean View, Pool and Amenities",
    roomPrice: 8357,
    type: "Entire villa",
    numberOfBeds: 7,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/malibu.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/42018313?adults=4&children=0&infants=0&source_impression_id=p3_1596749233_vc6q6QmNI7ArNwGf",
    superHost: false,
    review: 0,
    score: null
  }),
  new Room.Room({
    roomName: "Bel Air Gated 1 acre Ralph Lauren Furnished 1 mthm",
    roomPrice: 10900,
    type: "Entire house",
    numberOfBeds: 10,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/belair.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/35993766?adults=4&children=0&infants=0&source_impression_id=p3_1596749301_kgLwATCGcAVMG22t",
    superHost: false,
    reivew: 0,
    score: null
  }),
  new Room.Room({
    roomName: "Spectacular views",
    roomPrice: 7000,
    type: "Entire house",
    numberOfBeds: 5,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/spectacular.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/42231227?adults=4&children=0&infants=0&source_impression_id=p3_1596749393_2r7MmpPiNKuwP4SK",
    superHost: true,
    review: 3,
    score: 5
  }),
  new Room.Room({
    roomName: "MALIBU PRESIDENTIAL",
    roomPrice: 10000,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/maliburesidence.jpeg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/20666634?adults=4&children=0&infants=0&source_impression_id=p3_1596749462_ckA8aNSOkroxS4vW",
    superHost: false,
    review: 1,
    score: null
  }),
  new Room.Room({
    roomName: "Hillside Villa views in Beverly Hills Trousdale",
    roomPrice: 7000,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/hillsidevilla.jpeg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/35517241?adults=4&children=0&infants=0&source_impression_id=p3_1596749587_bKXfTHkeTz%2Fyqer%2B",
    superHost: false,
    review: 0,
    score: null
  }),
  new Room.Room({
    roomName: "Villa Paullina",
    roomPrice: 10000,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/villapaullina.jpg",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/40900055?adults=4&children=0&infants=0&source_impression_id=p3_1596749651_Fk1Fycii%2BWu4m5kf",
    superHost: false,
    review: 0,
    score: null
  })
];

var lists = [
  new Room.List({
    listName: "Summer Trips",
    numberOfItems: 0
  }),
  new Room.List({
    listName: "Europe Trip",
    numberOfItems: 0
  }),
  new Room.List({
    listName: "Thanksgivings",
    numberOfItems: 0
  })
];

var counter = 0;
for (var i =0; i < rooms.length; i++) {
  rooms[i].save((err, result) => {
    counter += 1;
    if (err) {
      console.log('Error seeding room data')
    } else if (counter === rooms.length) {
      console.log(`Seeding room finished`)
    }
  });
}

var listCounter = 0;
for (var i = 0; i < lists.length; i++) {
  lists[i].save((err, result) => {
    listCounter += 1;
    if (err) {
      console.log(`Error seeding list data`)
    } else if (listCounter === lists.length) {
      exit();
      console.log(`Seeding list data finished`)
    }
  });
}

function exit() {
  mongoose.disconnect();
}




