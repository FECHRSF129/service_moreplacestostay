import React from 'react';
import styled from 'styled-components';

function SavedModal (props) {

  var handleSubmit = function() {
    props.onClickLike(props.roomName);
    props.onClickUnlike(props.roomName, props.listName)
    props.closeSavedModal()
  }

  return (
    <div>
      <SavedModalWrapper>
        <SavedModalFrame>
          <SavedHolder>
           <div>Saved to {props.listName}</div>
           <AnytimeHolder>Anytime</AnytimeHolder>
          </SavedHolder>
          <ChangeHolder>
            <ChangeBtn onClick={handleSubmit}>Change</ChangeBtn>
          </ChangeHolder>
        </SavedModalFrame>
      </SavedModalWrapper>
    </div>
  )
}

const SavedModalWrapper = styled.div`
  width: 375px !important;
  height: 134px;
  position: fixed !important;
  z-index: 3 !important;
  bottom: 0px !important;
  left: 10px !important;
`;

const SavedModalFrame = styled.div`
  width: 300px !important;
  height: 78px;
  border-radius: 12px !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  background: rgb(255, 255, 255) !important;
  border-color: rgb(113, 113, 113) !important;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
`;

const SavedHolder = styled.div`
width: 200;
height: 70
display: flex !important;
align-items: center !important;
justify-content: space-between !important;
padding-top: 20px !important;
padding-bottom: 0px !important;
padding-left: 20px !important;
padding-right: 24px !important;
font-size: 14px !important;
line-height: 20px !important;
flex: 0 0 auto !important;
color: rgb(34, 34, 34) !important;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important
`;

const AnytimeHolder = styled.div`
font-size: 12px !important;
color: rgb(113, 113, 113) !important;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important
`;

const ChangeHolder = styled.span`
  top: 30px !important;
  right: 24px !important;
  position: absolute !important;
  display: flex !important;
`;

const ChangeBtn = styled.div`
width: 50px;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important
font-size: 16px !important;
text-decoration: underline
`

export default SavedModal