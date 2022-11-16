import React from "react"
import Item from "./Item.js";

export default function ItemList(props) {

return <ul className="ui-list">
        {props.items.map((item) => {
          return (
            <li className="ui-item-list" key={item.id}>
              <Item info={item} item={item} />
              <button
                className="item-button"
                onClick={props.onRemoveClick(item.id)}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
}