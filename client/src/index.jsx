import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Display from "./components/display.jsx";
import Topbar from './components/topbar.jsx';
import styled from 'styled-components';

class Stay extends React.Component {
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
    axios.get('/stay/room')
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
    axios.get('/stay/list')
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
    axios.post('/stay/room', {'roomName': roomName, 'listName': listName})
    .then(() => {console.log(`Client like list post success`)})
    .catch()
    .then(() => {
      axios.post('/stay/list', {'listName': listName})
      .then(() => {console.log(`Client list update success`)})
      .catch()
    })
    .then(() => {
      this.getAllRooms();
      this.getAllLists()
    })
  }

  onClickUnlike (roomName, listName) {
    axios.post('/stay/removeRoom', {'roomName': roomName, 'listName': listName})
    .then(() => {console.log(`Client remove room from list post success`)})
    .catch()
    .then(() => {
      axios.post('/stay/decList', {'listName': listName})
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
    axios.post('/stay/createList', {'listName': listName})
    .then(() => {console.log(`Client create list success`)})
    .catch()
  }

  render() {
    return (
      <div>
        <div>
          <StaticHolder>
            <StaticConcent>
              <StaticImgHolder src="https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/static.png"/>
            </StaticConcent>
          </StaticHolder>
          {/* <div>
            <Topbar data-plugin-in-point-id="display"/>
          </div> */}
          <Display rooms={this.state.rooms} onClickList={this.onClickList} onClickUnlike={this.onClickUnlike} onClickCreate={this.onClickCreate} lists={this.state.lists} id="display"/>
          <StaticHolder>
          <StaticConcent>
            <StaticImgHolder src="https://fecmoreplacestostayimages.s3-us-west-1.amazonaws.com/image/static2.png"/>
          </StaticConcent>
          </StaticHolder>
        </div>
      </div>
    )
  }
};

const StaticHolder = styled.div`
  margin-top: 50px;
  position: relative !important;;
  display: block;
`;

const StaticConcent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StaticImgHolder = styled.img`
  position: static !important;
  display: block;
  width: 1140px;
`;

ReactDOM.render(<Stay/>, document.getElementById('moreplaces'));