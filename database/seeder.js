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
    imageUrl: "https://a0.muscache.com/im/pictures/068b765f-6085-4eb7-86d2-5024199c01c5.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/23278914?adults=4&children=0&infants=0&source_impression_id=p3_1596748436_YpHxpm7Gt8Lh66KL",
    superHost: false
  }),
  new Room.Room({
    roomName: "$45 Million Ocean View Malibu Mansion Sleeps 14",
    roomPrice: 10000,
    type: "Entire house",
    numberOfBeds: 9,
    imageUrl: "https://a0.muscache.com/im/pictures/e1f0bc56-dae3-4ce5-944c-864626f8c6d5.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/22602788/photos/430689080?adults=4&children=0&infants=0&source_impression_id=p3_1596748439_xH8lfZt3xuT57wRM",
    superHost: false
  }),
  new Room.Room({
    roomName: "Elegance at the Beach by stayLA Luxury Rentals",
    roomPrice: 6875,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://a0.muscache.com/im/pictures/91c9103d-f9a0-4e1d-bbec-9b17ad7b3c4e.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/21960937?adults=4&children=0&infants=0&source_impression_id=p3_1596748442_B5n6O9PA76tajU%2Bn",
    superHost: false
  }),
  new Room.Room({
    roomName: "Beachview Malibu Estate near MariSol",
    roomPrice: 6000,
    type: "Entire house",
    numberOfBeds: 7,
    imageUrl: "https://a0.muscache.com/im/pictures/91c9103d-f9a0-4e1d-bbec-9b17ad7b3c4e.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/21960937?adults=4&children=0&infants=0&source_impression_id=p3_1596748442_B5n6O9PA76tajU%2Bn",
    superHost: false
  }),
  new Room.Room({
    roomName: "Petra Manor | Malibu Luxury Mansion",
    roomPrice: 9999,
    type: "Entire house",
    numberOfBeds: 8,
    imageUrl: "https://a0.muscache.com/im/pictures/adf425ef-2b43-4c2f-8ab9-a922604879be.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/24770890?adults=4&children=0&infants=0&source_impression_id=p3_1596749008_m13u8uQv8RH7JlGb",
    superHost: true
  }),
  new Room.Room({
    roomName: "LOS ANGELES VIEW MODERN ESTATE- POOL- 12,000 SQ FT",
    roomPrice: 5800,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://a0.muscache.com/im/pictures/7c309b92-484c-4e2c-ba54-b8cd101f1fbb.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/16291634?adults=4&children=0&infants=0&source_impression_id=p3_1596749130_LsvlcamDwqwT2F7G",
    superHost: false
  }),
  new Room.Room({
    roomName: "Malibu Estate w/ Ocean View, Pool and Amenities",
    roomPrice: 8357,
    type: "Entire villa",
    numberOfBeds: 7,
    imageUrl: "https://a0.muscache.com/im/pictures/7e2f47f3-054c-4b07-b2da-e7d2ffc9ec18.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/42018313?adults=4&children=0&infants=0&source_impression_id=p3_1596749233_vc6q6QmNI7ArNwGf",
    superHost: false
  }),
  new Room.Room({
    roomName: "Bel Air Gated 1 acre Ralph Lauren Furnished 1 mthm",
    roomPrice: 10900,
    type: "Entire house",
    numberOfBeds: 10,
    imageUrl: "https://a0.muscache.com/im/pictures/e77f0924-19eb-4cb6-b152-b41f63738b96.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/35993766?adults=4&children=0&infants=0&source_impression_id=p3_1596749301_kgLwATCGcAVMG22t",
    superHost: false
  }),
  new Room.Room({
    roomName: "Spectacular views",
    roomPrice: 7000,
    type: "Entire house",
    numberOfBeds: 5,
    imageUrl: "https://a0.muscache.com/im/pictures/c31a6586-af3e-48b4-9677-a51a09c8a899.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/42231227?adults=4&children=0&infants=0&source_impression_id=p3_1596749393_2r7MmpPiNKuwP4SK",
    superHost: true
  }),
  new Room.Room({
    roomName: "MALIBU PRESIDENTIAL",
    roomPrice: 10000,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://a0.muscache.com/im/pictures/7acaf9da-0a34-4487-a964-784192ba9ea7.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/20666634?adults=4&children=0&infants=0&source_impression_id=p3_1596749462_ckA8aNSOkroxS4vW",
    superHost: false
  }),
  new Room.Room({
    roomName: "Hillside Villa views in Beverly Hills Trousdale",
    roomPrice: 7000,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://a0.muscache.com/im/pictures/522789ff-bd45-48f0-9fb4-053784fa5371.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/35517241?adults=4&children=0&infants=0&source_impression_id=p3_1596749587_bKXfTHkeTz%2Fyqer%2B",
    superHost: false
  }),
  new Room.Room({
    roomName: "Villa Paullina",
    roomPrice: 10000,
    type: "Entire villa",
    numberOfBeds: 6,
    imageUrl: "https://a0.muscache.com/im/pictures/926b721c-6f9d-4eb1-873f-5e1b43205805.jpg?im_w=1200",
    savedList: '',
    roomUrl: "https://www.airbnb.com/rooms/40900055?adults=4&children=0&infants=0&source_impression_id=p3_1596749651_Fk1Fycii%2BWu4m5kf",
    superHost: false
  })
];

var lists = [
  new Room.List({
    listName: "Summer Trips",
    numberOfItems: 6
  }),
  new Room.List({
    listName: "Europe Trip",
    numberOfItems: 11
  }),
  new Room.List({
    listName: "Thanksgivings",
    numberOfItems: 2
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




