import React, { useState } from 'react';
import ListModal from './listmodal.jsx'
import Carousel from './carousel.jsx';
import CreateListModal from './createlistmodal.jsx';

function Display (props) {

  const [show, setShow] = useState(false);
  const closeListModal = () => setShow(false);
  function onClickLike () {
    setShow(true)
  }

  const [createListShow, setCreateListShow] = useState(true);
  const closeCreateListModal = () => setCreateListShow(false);
  function onClickCreateAList () {
    setShow(false),
    setCreateListShow(true)
  }

  return (
    <div>
      <Carousel onClickLike={onClickLike}/>
      <ListModal show={show} closeListModal={closeListModal} onClickCreateAList={onClickCreateAList}/>
      <CreateListModal createListShow={createListShow} createList={props.createList} onClickLike={onClickLike} closeCreateListModal={closeCreateListModal}/>
    </div>
  )
}

export default Display;