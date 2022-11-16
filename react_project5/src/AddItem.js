import React from "react"

export default function AddItem(props) {

return <form onSubmit={props.onFormSubmit}> 
        <div>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={props.name}  
            onChange={props.onNameChange} 
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={props.desc} 
            onChange={props.onDescChange} 
          />
        </div>
        <div className="form-footer">
          {!props.name ||  
            (!props.desc && <div className="validation">Заполните все поля!</div>)} 
          <input
            disabled={!props.name || !props.desc} 
            type="submit"
            className="ui-button"
            value="Добавить"
          />
        </div>
      </form>

          }