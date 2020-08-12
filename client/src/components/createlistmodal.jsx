import React from 'react';

class CreateListModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.prevenDefault();
    this.props.createList(this.state.name);
    this.props.onClickLike();
  }

  render () {
    return (
      <div className="modalWrapper" style={styles.modalWrapper} style={{
        opacity: this.props.show? "1" : "0"
      }}>
        <div className="modalHeader" style={styles.modalHeader}>
          <span className="closeModelBtn" onClick={this.props.CreateListModal}>X</span>
          <span>Name this list</span>
        </div>
        <div className="modalContent">
          <form>
            <label>
              <input name="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
          </form>
        </div>
        <div className="modalFooter">
          <div className="addList" onClick={this.handleSubmit}>Create a list</div>
        </div>
      </div>
    )
  }
}

const styles = {
  modalWrapper: {
    backgroundColor: "yellow",
    width: "80%",
    maxWidth: "800px",
    margin: "4rem auto"
  },

  modalHeader: {
    backgroundColor: "yellow",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}

export default CreateListModal;