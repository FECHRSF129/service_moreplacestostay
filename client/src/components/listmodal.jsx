import React from 'react';

function ListModal (props) {
    return (
      <div className="modalWrapper" style={styles.modalWrapper} style={{
        opacity: props.show? "1" : "0"
      }}>
        <div className="modalHeader" style={styles.modalHeader}>
          <span className="closeModelBtn" onClick={props.closeListModal}>X</span>
          <span>Save to a list</span>
        </div>
        <div className="modalContent">
          test
        </div>
        <div className="modalFooter">
          <div className="addList" onClick={() => {props.onClickCreateAList()}}>Create a list</div>
        </div>
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

  modalHeader: {
    backgroundColor: "yellow",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}

export default ListModal
