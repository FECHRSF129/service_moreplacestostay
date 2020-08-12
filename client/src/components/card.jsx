import React, { useState } from 'react';
import ListModal from './listmodal.jsx'

var Cards = (props) => {

  return (
    <div>
      <div className="cards" style={styles.cards}>
        <button className="openModal" style={styles.openModal} onClick={() => props.onClickLike()}>Like</button>
        {props.cardNumber}
      </div>
    </div>
  )
}

const styles = {
  cards: {
    width: "350px",
    height: "200px",
    backgroundColor: "blue",
    border: "2px solid black",
    boxSizing: "border-box",
    fontSize: "2.5em",
    color: "white"
  },

  openModal: {
    cursor: "pointer"
  }
}

export default Cards;