import React, { useState } from 'react';
import ListModal from './listmodal.jsx';
import Carousel from './carousel.jsx';
import CreateListModal from './createlistmodal.jsx';
import SavedModal from './savedmodal.jsx';
import RemovedModal from './removedmodal.jsx';
import styled, { css, keyframes } from 'styled-components';
import Topbar from './topbar.jsx';
import Header from './header.jsx'

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
    setTimeout(function(){ closeSavedModal() }, 3000)
  }

  // Below are items for RemovedModal
  const [removedShow, setRemovedShow] = useState(false);
  const closeRemovedModal = () => setRemovedShow(false);
  function onClickUnlikeRM (roomName, listName) {
    setRemovedShow(true);
    setListName(listName);
    setRoomName(roomName);
    setTimeout(function(){ closeRemovedModal() }, 3000)
  }

  // Below are items for CreateListModal
  const [createListShow, setCreateListShow] = useState(false);
  const closeCreateListModal = () => setCreateListShow(false);
  function onClickCreateAList () {
    setShow(false),
    setCreateListShow(true)
  }

  if (show) {
    return (
      <div>
        <div>
          <Topbar data-plugin-in-point-id="photo"/>
        </div>
        <ListModalContainer show={show}></ListModalContainer>
        <section>
          <ListModal lists={props.lists} show={show} roomName={roomName} closeListModal={closeListModal} onClickList={props.onClickList} showSavedModal={showSavedModal} onClickCreateAList={onClickCreateAList}/>
        </section>
        <CarouselContainer>
          <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} onClickUnlikeRM={onClickUnlikeRM}/>
        </CarouselContainer>
      </div>
    )
  } else if (savedShow) {
    return (
      <div>
        <div>
          <Topbar data-plugin-in-point-id="photo"/>
        </div>
        <SavedModal savedShow={savedShow} listName={listName} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} roomName={roomName} closeSavedModal={closeSavedModal}/>
        <CarouselContainer>
          <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} onClickUnlikeRM={onClickUnlikeRM}/>
        </CarouselContainer>
      </div>
    )
  } else if (createListShow) {
    return (
      <div>
          <div>
            <Topbar data-plugin-in-point-id="photo"/>
          </div>
         <CreateModalContainer createListShow={createListShow}></CreateModalContainer>
         <CreateListModal createListShow={createListShow} closeCreateListModal={closeCreateListModal} onClickCreate={props.onClickCreate} onClickList={props.onClickList} roomName={roomName}/>
            <CarouselContainer>
            <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} onClickUnlikeRM={onClickUnlikeRM}/>
          </CarouselContainer>
          </div>
    )
  } else if (removedShow) {
    return (
      <div>
        <div>
          <Topbar data-plugin-in-point-id="photo"/>
        </div>
        <RemovedModal removedShow={removedShow} listName={listName} roomName={roomName} onClickList={props.onClickList} showSavedModal={showSavedModal}/>
        <CarouselContainer>
          <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} onClickUnlikeRM={onClickUnlikeRM}/>
        </CarouselContainer>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <Topbar data-plugin-in-point-id="photo"/>
        </div>
        <CarouselContainer>
          <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} onClickUnlikeRM={onClickUnlikeRM}/>
        </CarouselContainer>
      </div>
    )
  }
}

const CarouselContainer = styled.div`
  margin-top: 200px;
  display: block;
  position: relative;
`;

const ListModalContainer = styled.div`
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
  z-index: 70;
  bottom: ${(props) => props.show? '0px': '-250px'};
  transition: bottom 1.3s ease out;
`;

const CreateModalContainer = styled.div`
  background: rgb(34, 34, 34) !important;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  overflow-y: auto !important;
  opacity: ${(props) => props.createListShow? "0.6" : "0"};
  z-index: 70;
  transition: bottom 10s ease-out;
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