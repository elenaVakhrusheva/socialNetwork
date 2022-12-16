import React from 'react';
import s from "./Post.module.css";

const Post = (props) => { 

  return   (
      <div className={s.item}>
        <div>
          <img src="https://proprikol.ru/wp-content/uploads/2020/02/porodistye-sobaki-krasivye-kartinki-19.jpg"/>
          {props.message} 
          <span>Like</span>
        </div>
        
      </div>
      

  )
}

export default Post;