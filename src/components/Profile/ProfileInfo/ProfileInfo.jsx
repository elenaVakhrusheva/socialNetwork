import React from 'react'; 
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>       
      <div>
        <img src="https://wallbox.ru/resize/1024x768/wallpapers/main2/201726/nebo-gory-otrazenie.jpg"/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;