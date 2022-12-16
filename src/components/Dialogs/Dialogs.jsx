import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css";
import Message from './Message/Message';

const Dialogs = (props) => {
  //debugger;
  
  let dialogsElements = props.dialogs.map( d => <DialogItem name= {d.name} id={d.id} /> );

  let messagesElements = props.messages.map( d => <Message name= {d.name} id={d.id} /> );

  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}   
      </div>
    </div>
  )
}

export default Dialogs;