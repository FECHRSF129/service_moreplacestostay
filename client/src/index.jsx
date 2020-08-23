import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Display from "./components/display.jsx";
import Topbar from './components/topbar.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rooms: [],
      lists: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAllRooms = this.getAllRooms.bind(this);
    this.getAllLists = this.getAllLists.bind(this);
    this.onClickList = this.onClickList.bind(this);
    this.onClickUnlike = this.onClickUnlike.bind(this);
    this.onClickCreate = this.onClickCreate.bind(this);
  }

  componentDidMount () {
    this.getAllRooms();
    this.getAllLists()
  }

  getAllRooms () {
    axios.get('/place/room')
    .then((rooms) => {
      this.setState({
        rooms: rooms.data
      })
    })
    .catch((err) => {
      console.log(err, `Client get all room err`)
    })
  }

  getAllLists () {
    axios.get('/place/list')
    .then((lists) => {
      this.setState({
        lists: lists.data
      })
    })
    .catch((err) => {
      console.log(err, `Client get all list err`)
    })
  }

  onClickList (roomName, listName) {
    axios.post('/place/room', {'roomName': roomName, 'listName': listName})
    .then(() => {console.log(`Client like list post success`)})
    .catch()
    .then(() => {
      axios.post('/place/list', {'listName': listName})
      .then(() => {console.log(`Client list update success`)})
      .catch()
    })
    .then(() => {
      this.getAllRooms();
      this.getAllLists()
    })
  }

  onClickUnlike (roomName, listName) {
    axios.post('/place/removeRoom', {'roomName': roomName, 'listName': listName})
    .then(() => {console.log(`Client remove room from list post success`)})
    .catch()
    .then(() => {
      axios.post('/place/decList', {'listName': listName})
      .then(() => {console.log(`Client list update success`)})
      .catch()
    })
    .then(() => {
      this.getAllRooms();
      this.getAllLists()
    })
  }

  onClickCreate (listName) {
    console.log(`will write a post request to /list to create a list`)
    axios.post('/place/createList', {'listName': listName})
    .then(() => {console.log(`Client create list success`)})
    .catch()
  }

  render() {
    return (
      <div>
        <div>
          <StaticHolder>
            <StaticImgHolder src="https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/static.png"/>
          </StaticHolder>
          <div>
            <Topbar data-plugin-in-point-id="display"/>
          </div>
          <Display rooms={this.state.rooms} onClickList={this.onClickList} onClickUnlike={this.onClickUnlike} onClickCreate={this.onClickCreate} lists={this.state.lists} id="display"/>
        </div>
      </div>
    )
  }
};

const StaticHolder = styled.div`
  position: relative !important;;
  display: block;
`;

const StaticImgHolder = styled.img`
  position: static !important;
  display: block;
  width: 100%
`;

ReactDOM.render(<App/>, document.getElementById('moreplaces'));