import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData={props.state}/>        
    </div>
  )
}

export default Profile;