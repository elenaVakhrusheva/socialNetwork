import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
 
  let postsElements = 
    props.postData.map ( p=> <Post message={p.message} likesCount={p.likesCount}/> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text); 
  }

  return   (
    <div className={s.postsBlock}>
      <div>
        <h3>My Posts</h3>
          <div>New Post
            <div>
              <textarea ref={newPostElement}></textarea>
            </div>
            <div>
              <button onClick={ addPost }>Add post</button>
            </div>
          </div>

          <div className={s.posts}> 
             {postsElements}
            {/* <Post 
              message={postData[0].message}
              likesCount={postData[0].likesCount}/>
            <Post 
              message={postData[1].message}
              likesCount={postData[1].likesCount}/> */}
          </div>
        </div>        
      </div>
  )
}

export default MyPosts;