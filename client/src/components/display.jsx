import React, { useState } from 'react';
import ListModal from './listmodal.jsx';
import Carousel from './carousel.jsx';
import CreateListModal from './createlistmodal.jsx';
import SavedModal from './savedmodal.jsx';
import RemovedModal from './removedmodal.jsx';
import styled, { css, keyframes } from 'styled-components';

function Display (props) {

  // Below are items for ListModal
  const [show, setShow] = useState(false);
  const [roomName, setRoomName] = useState('');
  const closeListModal = () => setShow(false);
  function onClickLike (roomName) {
    setShow(true);
    setRoomName(roomName);
  }

  // Below are items for SavedModal
  const [savedShow, setSavedShow] = useState(false);
  const [listName, setListName] = useState('');
  const closeSavedModal = () => setSavedShow(false);
  function showSavedModal (listName) {
    setSavedShow(true);
    setListName(listName);
    setTimeout(function(){ closeSavedModal() }, 5000)
  }

  // Below are items for RemovedModal
  const [removedShow, setRemovedShow] = useState(false);
  const closeRemovedModal = () => setRemovedShow(false);
  function onClickUnlikeRM (roomName, listName) {
    setRemovedShow(true);
    setListName(listName);
    setRoomName(roomName);
    setTimeout(function(){ closeRemovedModal() }, 5000)
  }

  // Below are items for CreateListModal
  const [createListShow, setCreateListShow] = useState(false);
  const closeCreateListModal = () => setCreateListShow(false);
  function onClickCreateAList () {
    setShow(false),
    setCreateListShow(true)
  }

  return (
    <div>
      <CarouselContainer>
        <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} onClickUnlikeRM={onClickUnlikeRM}/>
      </CarouselContainer>
      <div>
        <ModalContainer show={show}></ModalContainer>
        <section>
          <ListModal lists={props.lists} show={show} roomName={roomName} closeListModal={closeListModal} onClickList={props.onClickList} showSavedModal={showSavedModal} onClickCreateAList={onClickCreateAList}/>
        </section>
      </div>
      <div>
        <SavedModal savedShow={savedShow} listName={listName} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} roomName={roomName} closeSavedModal={closeSavedModal}/>
      </div>
      <div>
        <CreateListModal createListShow={createListShow} closeCreateListModal={closeCreateListModal} onClickCreate={props.onClickCreate} onClickList={props.onClickList} roomName={roomName}/>
      </div>
      <div>
        <RemovedModal removedShow={removedShow} listName={listName} roomName={roomName} onClickList={props.onClickList} showSavedModal={showSavedModal}/>
      </div>
    </div>
  )
}

const CarouselContainer = styled.div`
  z-index: 2000 !important;
  display: block;
  position: relative;
  --page-shell-max-content-width: 1280px;
  min-height: 100vh !important;
`;

const ModalContainer = styled.div`
  background: rgb(34, 34, 34) !important;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  overflow-y: auto !important;
  opacity: ${(props) => props.show? "0.6" : "0"};
  z-index: ${(props) => props.show? "5000" : "0"}
`;

const keyframe = keyframes`
  0% {
    opacity: 0;
  },
  100% {
    opacity: 0.6;
  }
`;

export default Display;