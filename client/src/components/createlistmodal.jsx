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

  handleSubmit() {
    this.props.onClickCreate(this.state.name);
    this.props.onClickList(this.props.roomName, this.state.name);
    this.props.closeCreateListModal()
  }

  render () {
    return (
      <div className="modalWrapper" style={styles.modalWrapper} style={{
        opacity: this.props.createListShow? "1" : "0"
      }}>
        <div className="modalHeader" style={styles.modalHeader}>
          <span className="closeModelBtn" onClick={this.props.closeCreateListModal}>X</span>
          <span>Name this list</span>
        </div>
        <div className="modalContent">
          <form>
            <label>
              <input name="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
          </form>
          <div>50 characters maximum</div>
        </div>
        <div className="modalFooter">
          <div className="addList" onClick={this.handleSubmit}>Create</div>
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