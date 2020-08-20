import React from 'react';
import ListItem from './listitem.jsx';
import styled from 'styled-components';

function ListModal (props) {


    return (
      <div>
        <ModalWrapper show={props.show}>
          <ListModalFrame show={props.show}>
            <CloseModalBtnHolder>
              <CloseModalBtn onClick={() => {props.closeListModal()}}>
                <CloseModalBtnIcon  aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32">
                  <path d="m 6 6 l 20 20"></path>
                  <path d="m 26 6 l -20 20"></path>
                </CloseModalBtnIcon>
              </CloseModalBtn>
            </CloseModalBtnHolder>
            <ListModalHeader>
              <ListModalH1Holder>
                <ListModalH1>Save to a list</ListModalH1>
              </ListModalH1Holder>
            </ListModalHeader>
            <ContentHolder>
              {props.lists.map(function(list) {
                return <ListItem key={list._id} list={list} onClickList={props.onClickList} closeListModal={props.closeListModal} roomName={props.roomName} showSavedModal={props.showSavedModal}/>
              })}
            </ContentHolder>
            <ListModalFooter>
              <CreateButton onClick={() => {props.onClickCreateAList()}}>Create a list</CreateButton>
            </ListModalFooter>
          </ListModalFrame>
        </ModalWrapper>
      </div>
    )

}

const ModalWrapper = styled.div`
  z-index: 200;
  -webkit-box-align: center !important;
  align-items: center !important;
  padding: 40px !important;
  -webkit-box-pack: center !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: horizontal !important;
  position: fixed !important;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  transition:
`;

const ListModalFrame = styled.div `
  width: 100% !important;
  max-width: 568px !important;
  border-radius: 12px !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  position: relative !important;
  max-height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  background: rgb(255, 255, 255) !important;
`;

const CloseModalBtnHolder = styled.span`
  top: 24px !important;
  left: 24px !important;
  position: absolute !important;
  display: flex !important;
`;

const CloseModalBtn = styled.button`
  appearance: none !important;
  display: inline-block !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: relative !important;
  border-radius: 50% !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  outline: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
`

const CloseModalBtnIcon = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const ListModalHeader = styled.header`
  min-height: 64px !important;
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
  flex: 0 0 auto !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
`;

const ListModalH1Holder = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 190px !important;
  padding-right: 24px !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
  flex: 0 0 auto !important;
`

const ListModalH1 = styled.h1`
  -webkit-box-flex: 0 !important;
  flex-grow: 0 !important;
  flex-shrink: 1 !important;
  flex-basis: auto !important;
  text-align: center !important;
  margin-left: 16px !important;
  margin-right: 16px !important;
  overflow: hidden !important;
  color: rgb(34, 34, 34) !important;
  font-size: 1em !important;
  font-weight: 600 !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const ContentHolder = styled.div`
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
  overflow-y: auto !important;
  display: block;
`;

const ListModalFooter = styled.div`
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  display: flex !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  align-items: center !important;
  justify-content: space-between !important;
  font-size: 16px !important;
  line-height: 20px !important;
  flex: 0 0 auto !important;
  border-top: 1px solid rgb(235, 235, 235) !important;
`;

const CreateButton = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  position: relative !important;
  text-align: center !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  color: rgb(34, 34, 34) !important;
  width: 100% !important;
  margin: 0px !important;
  border-radius: 8px !important;
  outline: none !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  background: transparent !important;
  text-decoration: underline !important;
`

export default ListModal
