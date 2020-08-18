import React from 'react';

function SavedModal (props) {

  var handleSubmit = function() {
    props.onClickLike(props.roomName);
    props.onClickUnlike(props.roomName, props.listName)
    props.closeSavedModal()
  }

  return (
    <div className="modalWrapper" style={styles.modalWrapper} style={{
      opacity: props.savedShow? "1" : "0"
    }}>
      <div>Saved to {props.listName}</div>
      <div onClick={handleSubmit}>Change</div>
    </div>
  )
}

const styles = {
  modalWrapper: {
    backgroundColor: "yellow",
    width: "80%",
    maxWidth: "800px",
    margin: "4rem auto"
  },

}

export default SavedModal