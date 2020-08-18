import React from "react";
import styled from 'styled-components';

function ListItem (props) {
  var handleSubmit = function (event) {
    event.preventDefault();
    props.onClickList(props.roomName, props.list.listName);
    props.closeListModal();
    props.showSavedModal(props.list.listName)
  }

  return (
    <div>
      <ListHolder onClick={handleSubmit}>
        <MediaHolder>
          <Image src={props.list? props.list.imageUrl : null}/>
        </MediaHolder>
        <TextHolder>
          <AnyTimeHolder>Any time</AnyTimeHolder>
          <ListNameHolder>
            {props.list.listName}
          </ListNameHolder>
          <NumberOfItemsHolder>
            {props.list.numberOfItems} stays
          </NumberOfItemsHolder>
        </TextHolder>

      </ListHolder>
    </div>
  )
}

const ListHolder = styled.button`
  cursor: pointer !important;
  position: relative !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  display: block !important;
  height: 100% !important;
  width: 100% !important;
  border-radius: 0px !important;
  outline: none !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  background: transparent !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 0px !important;
  padding: 0px !important;
  text-decoration: none !important;
  -webkit-box-align: center !important;
  display: flex !important;
  align-items: center !important;
  padding: 12px !important;
  border-radius: 8px !important;
`;

const MediaHolder = styled.div`
  margin-right: 16px !important;
  width: 64px !important;
  height: 64px !important;
  background: rgb(221, 221, 221) !important;
  border-radius: 4px !important;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 4px;
  height: 100% !important;
  width: 100% !important;
  position: static !important;top: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  right: 0px !important;
`;

const TextHolder = styled.div`
  flex: 1 1 0% !important;
  text-align: left
`;

const AnyTimeHolder = styled.div`
  margin-bottom: 4px !important;
  font-size: 12px !important;
  line-height: 16px !important;
  font-weight: 400 !important;
  color: rgb(113, 113, 113) !important;
`;

const ListNameHolder = styled.div`
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  color: rgb(34, 34, 34) !important;
  margin-bottom: 4px !important;
`;

const NumberOfItemsHolder = styled.div`
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 400 !important;
  margin-top: 4px !important;
  color: rgb(34, 34, 34) !important;
`

export default ListItem