import React from "react";

function ListItem (props) {
  return (
    <div>
      <div>Any time</div>
      <div>
        {props.list.listName}
      </div>
      <div>
        {props.list.numberOfItems}
      </div>
    </div>
  )
}

export default ListItem;