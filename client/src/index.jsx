import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carousel from "./components/carousel.jsx";
import Display from "./components/display.jsx";

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rooms: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAllRooms = this.getAllRooms.bind(this);
  }

  componentDidMount () {
    this.getAllRooms();
  }

  getAllRooms () {
    axios.get('/room')
    .then((rooms) => {
      this.setState({
        rooms: rooms.data,
      })
    })
    .catch((err) => {
      console.log(err, `Client get all room err`)
    })
  }

  createList () {
    console.log(`will write a post request`)
  }

  render() {
    return (
      <div>
        <div>
          <Display />
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));