import React from 'react'; 
 import s from "./friend.modules.css"

const Friend = () => {
  return  (    
    <div className={s.element}>
        <span className={s.photo}></span>
       {/*  <img src="https://proprikol.ru/wp-content/uploads/2020/02/porodistye-sobaki-krasivye-kartinki-19.jpg" className={s.photo}/> */}
         {/*  {props.message} 
          <span>Like</span> */}
              
    </div>
  ) 
}

export default Friend;