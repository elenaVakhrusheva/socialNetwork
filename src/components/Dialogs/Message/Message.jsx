import React from 'react';
import s from "./../Dialogs.module.css";


const Message = (props) => {  

  let newAnswer = React.createRef();

  let addAnswer = () => {
    let textAnswer = newAnswer.current.value;
    alert (textAnswer);
  }

  return (
    <>
      <div className={s.dialogs}>
        {props.message}
      </div>
      <div>
        <textarea ref={newAnswer}></textarea>
        <button onClick = {addAnswer}>Ответить</button>
      </div>
    </>
  )
};


export default Message;