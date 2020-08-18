import React from 'react';

function RemovedModal (props) {

  var handleSubmit = function(event) {
    event.preventDefault();
    props.onClickList(props.roomName, props.listName);
    props.showSavedModal(props.listName)
  }

  return (
    <div style={{
      opacity: props.removedShow? "1" : "0"
    }}>
      <div>Removed from {props.listName}</div>
      <div onClick={handleSubmit}>Undo</div>
    </div>
  )
}

export default RemovedModal