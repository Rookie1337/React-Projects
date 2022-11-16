import React, { useState } from "react";
import AddItem from "./AddItem.js"
import ItemList from "./ItemList.js"

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    setItems([...items, { id: items.length, name: name, desc: desc }]);
    setName("");
    setDesc("");
  }
  const handleRemoveClick = (id) => () => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <AddItem name={name} desc={desc} onFormSubmit={handleFormSubmit} onNameChange={(e) => setName(e.target.value)} onDescChange={(e) => setDesc(e.target.value)}/>
      <div>
        {items.length < 1 && <p className="ui-title">Добавьте первый товар</p>}
      </div>
      <ItemList items={items} onRemoveClick={handleRemoveClick}/>
    </>
  );
}
